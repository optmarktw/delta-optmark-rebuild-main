import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  phone: z.string().trim().max(20, "Phone number is too long").optional(),
  service: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message is too long"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData);

      // Call the edge function
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
          body: JSON.stringify(validatedData),
        }
      );

      console.log("Contact form response status:", response.status);

      if (!response.ok) {
        let errorMessage = "Failed to send message";
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
          console.error("Contact form error response:", errorData);
        } catch (jsonError) {
          // Response body was empty or invalid JSON
          console.error("Failed to parse error response:", jsonError);
          errorMessage = `Server error (${response.status})`;
        }
        throw new Error(errorMessage);
      }

      // Success
      toast.success("Thank you! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      
      if (error instanceof z.ZodError) {
        // Validation error
        toast.error(error.errors[0].message);
      } else if (error instanceof Error) {
        // API error
        toast.error(error.message);
      } else {
        // Unknown error
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Unit 5 Red Lion Court", "Alexandra Road", "Hounslow, Middlesex TW3 1JS"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["020 8696 7090", "Mon-Fri: 9AM-6PM"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@optmark.co.uk"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday", "9:00 AM - 6:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question or ready to discuss your accounting needs? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border">
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="bg-muted p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Optmark?</h3>
              <ul className="space-y-3">
                {[
                  "15+ years of professional experience",
                  "Qualified ACA accountants",
                  "Personalized service and support",
                  "Competitive pricing",
                  "Latest accounting technology",
                  "Proactive tax planning",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="020 1234 5678"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select a service</option>
                  <option value="tax">Tax Preparation & Planning</option>
                  <option value="audit">Audit & Assurance</option>
                  <option value="bookkeeping">Bookkeeping & Payroll</option>
                  <option value="management">Management Accounting</option>
                  <option value="advisory">Business Advisory</option>
                  <option value="secretarial">Company Secretarial</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors font-semibold flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
