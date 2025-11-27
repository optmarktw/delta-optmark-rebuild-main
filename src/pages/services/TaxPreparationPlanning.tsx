import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, CheckCircle, Clock, Shield, TrendingUp, Users, FileText, PoundSterling, ArrowRight, ChevronRight, Building2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TaxPreparationPlanning = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: FileText,
      title: 'Self Assessment Tax Returns',
      description: 'Comprehensive personal tax return preparation for individuals, freelancers, and sole traders. We ensure you claim all available reliefs and meet HMRC deadlines.'
    },
    {
      icon: Building2,
      title: 'Corporation Tax',
      description: 'Expert corporation tax planning and compliance for limited companies. Optimise your company\'s tax position whilst maintaining full HMRC compliance.'
    },
    {
      icon: Calculator,
      title: 'VAT Services',
      description: 'Complete VAT registration, return preparation, and compliance support. We handle Making Tax Digital (MTD) requirements and help you navigate complex VAT rules.'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Tax Planning',
      description: 'Proactive tax planning to minimise your liabilities legally. From capital gains planning to inheritance tax mitigation, we help you retain more of your wealth.'
    }
  ];

  const benefits = [
    {
      icon: PoundSterling,
      title: 'Maximise Tax Efficiency',
      description: 'Identify all available reliefs, allowances, and planning opportunities to reduce your tax burden'
    },
    {
      icon: Shield,
      title: 'HMRC Compliance',
      description: 'Stay fully compliant with all HMRC requirements and avoid penalties through accurate, timely submissions'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Free up your time to focus on your business whilst we handle all tax administration and compliance'
    },
    {
      icon: CheckCircle,
      title: 'Peace of Mind',
      description: 'Rest assured your tax affairs are handled by qualified professionals with extensive HMRC experience'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your circumstances, income sources, and tax planning objectives to understand your unique situation.'
    },
    {
      step: 2,
      title: 'Information Gathering',
      description: 'Securely collect all necessary documentation including P60s, P11Ds, business records, and investment statements.'
    },
    {
      step: 3,
      title: 'Tax Preparation & Review',
      description: 'Our specialists prepare your returns, identifying all available reliefs and ensuring accuracy before submission.'
    },
    {
      step: 4,
      title: 'Filing & Follow-up',
      description: 'We submit your returns to HMRC, handle any queries, and provide planning advice for the coming tax year.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm mb-4 text-slate-300">
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
            <ChevronRight className="h-4 w-4 mx-2" />
            <button onClick={() => navigate('/#services')} className="hover:text-white transition-colors">Services</button>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">Tax Preparation & Planning</span>
          </div>
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-4 rounded-xl mr-6">
              <Calculator className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">Tax Preparation & Planning</h1>
              <p className="text-xl text-slate-300">Expert tax services to minimise liabilities and maximise compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-6 rounded-xl border border-border">
            <Users className="h-8 w-8 text-accent mb-3" />
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-muted-foreground">Tax returns prepared annually</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <PoundSterling className="h-8 w-8 text-accent mb-3" />
            <h3 className="text-2xl font-bold mb-2">£2.5M+</h3>
            <p className="text-muted-foreground">Tax savings identified for clients</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <CheckCircle className="h-8 w-8 text-accent mb-3" />
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p className="text-muted-foreground">On-time submission rate</p>
          </div>
        </div>

        <div className="prose max-w-none mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive UK Tax Services</h2>
          <p className="text-lg text-muted-foreground mb-4">
            At Optmark Accountants, we understand that UK tax legislation is complex and constantly evolving. Our team of qualified tax professionals stays abreast of all HMRC changes to ensure you benefit from every available relief whilst maintaining full compliance.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Whether you're a sole trader completing your first Self Assessment, a limited company director navigating corporation tax, or a high-net-worth individual requiring sophisticated tax planning, we provide tailored solutions to meet your specific needs.
          </p>
          <p className="text-lg text-muted-foreground">
            Our proactive approach means we don't just prepare your returns – we work with you throughout the year to identify planning opportunities, manage cash flow for tax payments, and ensure you're structuring your affairs in the most tax-efficient manner possible.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Tax Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Who Benefits Section */}
        <div className="bg-muted p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Who Benefits from Our Tax Services?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Individuals & Sole Traders</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Self-employed professionals and freelancers</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Landlords with property rental income</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>High earners with complex income sources</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Individuals with overseas income or assets</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Limited Companies & Partnerships</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>SMEs requiring corporation tax compliance</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Companies with R&D tax credit opportunities</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Businesses requiring VAT and payroll tax support</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Partnerships needing partner tax return coordination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Optmark for Your Tax Needs?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Tax Preparation Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">When is the deadline for Self Assessment tax returns?</AccordionTrigger>
              <AccordionContent>
                The deadline for online Self Assessment tax returns is 31st January following the end of the tax year (5th April). For example, the 2023/24 tax year runs from 6th April 2023 to 5th April 2024, with returns due by 31st January 2025. Any tax owed is also due by this date, with a second payment on account due by 31st July. We recommend getting your information to us by December to ensure timely submission.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">What records do I need to keep for my tax return?</AccordionTrigger>
              <AccordionContent>
                HMRC requires you to keep all records for at least 5 years from 31st January following the tax year. This includes invoices, receipts, bank statements, payslips, P60s, P11Ds, dividend vouchers, and any documents supporting income or expenses claimed. For limited companies, records must be kept for 6 years from the end of the accounting period. We can provide guidance on digital record-keeping systems that integrate with Making Tax Digital requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Can you help me reduce my tax bill legally?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Tax planning is about structuring your affairs efficiently within the law. Strategies might include maximising pension contributions, utilising capital allowances, claiming all eligible business expenses, optimising salary-dividend mix for company directors, using available reliefs like Marriage Allowance or trading losses, and timing of income or disposal of assets. During our consultation, we'll identify opportunities specific to your circumstances.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">What if I've missed previous tax return deadlines?</AccordionTrigger>
              <AccordionContent>
                If you've missed deadlines, it's crucial to act quickly. HMRC charges penalties for late submission and interest on unpaid tax. We can help you get up to date by preparing outstanding returns, liaising with HMRC to potentially reduce penalties, setting up payment plans if needed, and ensuring you don't fall behind again. The sooner we address the issue, the better the outcome typically is.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">Do you offer support if HMRC investigates or queries my return?</AccordionTrigger>
              <AccordionContent>
                Yes, we provide full support during HMRC enquiries and investigations. This includes responding to information requests, representing you in correspondence with HMRC, attending meetings if required, and negotiating settlements. Our fee protection insurance can cover the costs of dealing with routine compliance checks. Having professional representation significantly improves outcomes and reduces stress during investigations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimise Your Tax Position?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our tax specialists to discuss your requirements and discover how we can help you save tax.
          </p>
          <button
            onClick={() => {
              navigate('/book-consultation');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center text-lg"
          >
            Book Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxPreparationPlanning;