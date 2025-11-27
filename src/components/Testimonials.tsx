import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import TrustBadges from '@/components/TrustBadges';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Thompson',
      role: 'CEO, TechVision Solutions',
      industry: 'Technology & Startups',
      rating: 5,
      text: 'OptMark transformed our financial management. Their expertise in R&D tax credits saved us over £50,000 in the first year. The team truly understands the tech startup landscape.',
      avatar: 'ST'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Chen Properties Ltd',
      industry: 'Property & Real Estate',
      rating: 5,
      text: 'The capital allowances planning and stamp duty advice we received was exceptional. OptMark helped us structure our property portfolio tax-efficiently, resulting in significant savings.',
      avatar: 'MC'
    },
    {
      name: 'Dr. Amelia Roberts',
      role: 'GP Partner',
      industry: 'Healthcare & Medical',
      rating: 5,
      text: 'As a busy GP, I needed accountants who understood NHS pension schemes and medical practice finances. OptMark delivers proactive advice and handles everything seamlessly.',
      avatar: 'AR'
    },
    {
      name: 'James Morrison',
      role: 'Director, BuildRight Construction',
      industry: 'Construction & Trades',
      rating: 5,
      text: 'OptMark keeps us fully CIS compliant and provides invaluable cash flow forecasting. Their construction industry expertise gives us peace of mind to focus on building.',
      avatar: 'JM'
    },
    {
      name: 'Emma Williams',
      role: 'Owner, Blossoms Boutique',
      industry: 'Retail & E-commerce',
      rating: 5,
      text: 'Managing multi-channel sales was overwhelming until OptMark stepped in. They set up systems that work seamlessly across our store and online platforms. Game changer!',
      avatar: 'EW'
    },
    {
      name: 'David Patterson',
      role: 'Managing Partner, Patterson Consulting',
      industry: 'Professional Services',
      rating: 5,
      text: 'The partnership structure advice and project accounting systems OptMark implemented improved our profitability by 25%. They truly understand professional service firms.',
      avatar: 'DP'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across industries for exceptional accounting services and expert financial guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {testimonial.text}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-accent font-medium">{testimonial.industry}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-card p-6 rounded-lg shadow-md">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <TrustBadges />
      </div>
    </section>
  );
};

export default Testimonials;
