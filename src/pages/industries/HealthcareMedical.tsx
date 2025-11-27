import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Stethoscope, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const HealthcareMedical = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      icon: Heart,
      title: 'NHS Pension Schemes',
      description: 'Navigate complex NHS pension annual allowance and lifetime allowance rules.',
      detail: 'NHS pensions are valuable but complex. We help you understand annual allowance charges (£60,000 standard, tapered for high earners), lifetime allowance considerations, scheme pays elections, and tax-efficient withdrawal strategies to maximise your retirement benefits whilst minimising tax charges.'
    },
    {
      icon: Stethoscope,
      title: 'GP Partnership Accounts',
      description: 'Specialist accounts preparation for GP practices and partnerships.',
      detail: 'GP partnerships require unique accounting treatments for NHS income, superannuation, premises costs, and profit allocation. We prepare partnership accounts compliant with BMA guidance, calculate profit shares per partnership deed, and manage capital accounts for joining and leaving partners.'
    },
    {
      icon: Users,
      title: 'Medical Indemnity & Insurance',
      description: 'Accounting for professional indemnity and medical defence costs.',
      detail: 'Medical indemnity insurance is a significant expense. We help you claim tax relief appropriately, account for defence organisation subscriptions, manage provisions for potential claims, and ensure correct treatment of insurance settlements in your accounts.'
    },
    {
      icon: TrendingUp,
      title: 'Private Practice Income',
      description: 'Tax-efficient management of NHS and private practice income.',
      detail: 'Consultants and GPs with mixed NHS and private income face complex tax planning. We advise on optimal structures (personal vs company), expense apportionment, VAT registration for private work, and extraction strategies to minimise overall tax whilst ensuring compliance with NHS regulations.'
    }
  ];

  const services = [
    'GP partnership accounts and tax returns',
    'NHS pension annual allowance calculations',
    'Medical consultant self-assessment returns',
    'Private practice bookkeeping and VAT',
    'Locum income accounting',
    'Medical defence subscription relief claims',
    'Partnership profit share calculations',
    'Practice valuation for partnership changes',
    'Tax-efficient income extraction planning',
    'Superannuation and pension scheme advice'
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Heart className="h-12 w-12 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Healthcare & Medical</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Specialist accounting for GPs, consultants, medical practices, and healthcare professionals
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Medical Accountants You Can Trust</h2>
            <p className="text-muted-foreground mb-4">
              Healthcare professionals face unique financial challenges, from complex NHS pension schemes to partnership structures and private practice management. We specialise in accounting for GPs, hospital consultants, dentists, and other medical professionals.
            </p>
            <p className="text-muted-foreground mb-4">
              Our team understands NHS superannuation, annual allowance tapered charges, GP partnership agreements, and BMA guidance. We help you navigate these complexities whilst optimising your tax position and ensuring compliance with medical professional regulations.
            </p>
            <p className="text-muted-foreground">
              Whether you're a salaried GP, equity partner, consultant with private practice, or locum doctor, we provide clear, practical advice tailored to medical professionals.
            </p>
          </div>
          <div className="bg-accent/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Who We Support</h3>
            <ul className="space-y-3">
              {['GP partnerships and practices', 'Hospital consultants (NHS and private)', 'Dentists and dental practices', 'Locum doctors and healthcare professionals', 'Medical specialists and surgeons', 'Healthcare service providers'].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Medical-Specific Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {challenges.map((challenge, idx) => {
            const Icon = challenge.icon;
            return (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{challenge.detail}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-muted p-8 md:p-12 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Healthcare Accounting Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <Accordion type="single" collapsible className="mb-16">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does the NHS pension annual allowance work?</AccordionTrigger>
            <AccordionContent>
              The standard annual allowance is £60,000, but high earners (adjusted income over £260,000) face tapering down to £10,000. NHS pension growth often exceeds this, triggering tax charges. You can elect "scheme pays" to have the NHS pension scheme pay the charge (reducing your pension), or pay personally. We calculate your position annually and advise on optimal strategies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Should I incorporate my private practice?</AccordionTrigger>
            <AccordionContent>
              Many consultants benefit from incorporating private practice. A limited company pays 19-25% corporation tax versus up to 45% income tax personally, plus you can retain profits in the company tax-efficiently. However, consider NHS rules on incorporated practices, potential loss of pension benefits for private income, and additional administrative burden. We'll model your specific circumstances.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How are GP partnership profits calculated?</AccordionTrigger>
            <AccordionContent>
              GP partnerships calculate total practice profit (NHS income plus private/enhanced services income, minus all expenses). This is then allocated per the partnership agreement, typically based on profit share ratios that may vary by partner seniority, sessions worked, and capital invested. We prepare accounts showing individual partner allocations and handle partnership tax returns.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-gradient-to-br from-accent to-blue-600 p-8 md:p-12 rounded-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Expert Medical Accounting Advice</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book a consultation to discuss your NHS pension, practice finances, or private income taxation.
          </p>
          <Button size="lg" variant="secondary" className="group" onClick={() => { navigate('/book-consultation'); window.scrollTo(0, 0); }}>
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HealthcareMedical;