import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InlineWidget } from 'react-calendly';
import { Calendar, Phone, Mail, Clock, CheckCircle, ArrowLeft } from 'lucide-react';

const BookConsultation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Choose a convenient time to discuss your accounting needs with our expert team
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
            <InlineWidget 
              url="https://calendly.com/abubakarhussein"
              styles={{
                height: '700px',
                width: '100%',
              }}
            />
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* What to Prepare */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">What to Prepare</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Recent financial statements
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Tax documents
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  List of questions or concerns
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Business goals and objectives
                </li>
              </ul>
            </div>

            {/* What We'll Discuss */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">What We'll Discuss</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Your business needs and challenges
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Tailored accounting solutions
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Service packages and pricing
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Next steps and timeline
                </li>
              </ul>
            </div>

            {/* Alternative Contact */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-7 w-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Prefer to Call?</h3>
              <div className="space-y-4 text-muted-foreground">
                <a
                  href="tel:02035760000"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">020 3576 0000</span>
                </a>
                <a
                  href="mailto:info@optmark.co.uk"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">info@optmark.co.uk</span>
                </a>
                <div className="flex items-start pt-2">
                  <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-sm">Mon - Fri: 9:30 AM - 5:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;
