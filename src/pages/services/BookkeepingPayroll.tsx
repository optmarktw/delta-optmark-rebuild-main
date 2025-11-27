import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, CheckCircle, Clock, Users, FileText, PoundSterling, Laptop, Shield, ArrowRight, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BookkeepingPayroll = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: FileText,
      title: 'Monthly Bookkeeping',
      description: 'Complete bookkeeping services including bank reconciliations, purchase and sales ledgers, expense tracking, and preparation of management accounts for informed decision-making.'
    },
    {
      icon: Users,
      title: 'Payroll Processing',
      description: 'Full payroll bureau services including RTI submissions to HMRC, payslip generation, pension auto-enrolment, P11D preparation, and year-end reporting for businesses of all sizes.'
    },
    {
      icon: Laptop,
      title: 'Cloud Accounting Setup',
      description: 'Implementation and training on cloud accounting platforms like Xero, QuickBooks, and Sage, including integration with bank feeds, Making Tax Digital compliance, and mobile access.'
    },
    {
      icon: PoundSterling,
      title: 'Expense Management',
      description: 'Streamlined expense tracking and processing, including receipt capture, mileage claims, employee reimbursements, and integration with accounting systems for real-time visibility.'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Focus on growing your business whilst we handle the day-to-day financial administration'
    },
    {
      icon: CheckCircle,
      title: 'Accurate Records',
      description: 'Maintain compliant, up-to-date books that satisfy HMRC and provide reliable financial data'
    },
    {
      icon: TrendingUp,
      title: 'Better Insights',
      description: 'Regular management reports help you understand profitability and make informed decisions'
    },
    {
      icon: Shield,
      title: 'Compliance Peace of Mind',
      description: 'Ensure payroll tax, pension, and employment law compliance without the headache'
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
            <span className="text-white">Bookkeeping & Payroll</span>
          </div>
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-4 rounded-xl mr-6">
              <TrendingUp className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">Bookkeeping & Payroll Services</h1>
              <p className="text-xl text-slate-300">Keep your finances organised and your team paid accurately and on time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose max-w-none mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Professional Bookkeeping & Payroll in the UK</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Effective bookkeeping and payroll management are the foundation of any successful business. At Optmark Accountants, we take the burden of financial administration off your shoulders, ensuring your books are always up to date, accurate, and compliant with UK regulations.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our bookkeeping services go beyond simply recording transactions. We provide meaningful management information that helps you understand your business performance, manage cash flow effectively, and make confident decisions. Whether you're a sole trader, small business, or growing enterprise, we tailor our services to your specific needs.
          </p>
          <p className="text-lg text-muted-foreground">
            Payroll compliance in the UK is increasingly complex, with RTI (Real Time Information) reporting, auto-enrolment pensions, and employment law requirements. Our payroll bureau handles everything from calculating pay and deductions to submitting required filings, ensuring your employees are paid correctly whilst you remain fully compliant.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Bookkeeping & Payroll Services</h2>
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

        {/* Detailed Services */}
        <div className="bg-muted p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">What's Included in Our Services?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Bookkeeping Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Bank account reconciliations (current, savings, credit cards)</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Sales and purchase invoice processing</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Expense recording and categorisation</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>VAT return preparation and submission</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Monthly management accounts and reports</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Debtor and creditor management</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Payroll Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>PAYE, National Insurance, and pension calculations</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Payslip generation and distribution</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>RTI submissions to HMRC</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Auto-enrolment pension compliance</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Year-end P60s and P11D forms</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Statutory payments (SSP, SMP, SPP)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cloud Accounting */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Cloud Accounting Solutions</h2>
          <div className="bg-card p-8 rounded-xl border border-border">
            <p className="text-lg text-muted-foreground mb-6">
              We're experts in cloud accounting platforms including Xero, QuickBooks Online, and Sage Business Cloud. Cloud accounting offers numerous benefits including real-time access to your figures, automatic bank feeds, Making Tax Digital compliance, and the ability to collaborate with your accountant seamlessly.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Laptop className="h-12 w-12 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-foreground">Xero</h3>
                <p className="text-sm text-muted-foreground">Beautiful interface, extensive integrations, perfect for SMEs</p>
              </div>
              <div className="text-center">
                <Laptop className="h-12 w-12 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-foreground">QuickBooks</h3>
                <p className="text-sm text-muted-foreground">User-friendly, great for small businesses and freelancers</p>
              </div>
              <div className="text-center">
                <Laptop className="h-12 w-12 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-foreground">Sage</h3>
                <p className="text-sm text-muted-foreground">Established platform, ideal for growing businesses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Outsource to Optmark?</h2>
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

        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How much do bookkeeping and payroll services cost?</AccordionTrigger>
              <AccordionContent>
                Our pricing is tailored to your business size and complexity. Bookkeeping typically ranges from £150-£500 per month depending on transaction volumes. Payroll services start from £5-£10 per employee per month. We offer package deals combining both services for better value. During your free consultation, we'll provide a transparent quote based on your specific requirements with no hidden fees.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Can you take over from our current bookkeeper or do payroll mid-year?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We regularly take over bookkeeping and payroll from other providers or bring in-house functions external. For bookkeeping, we'll review your current records and ensure everything is accurate before taking over. For payroll, we can start at any point in the tax year - we'll need your employees' year-to-date figures and HMRC login details to set up RTI correctly. We make the transition smooth and hassle-free.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">What information do you need from us each month?</AccordionTrigger>
              <AccordionContent>
                For bookkeeping with cloud accounting, bank transactions import automatically. You'll just need to forward sales invoices, purchase invoices/receipts, and any cash transactions. For payroll, we need hours worked, overtime, bonuses, new starters/leavers, and any changes to employee details. Most clients send information via secure email or upload to a shared folder. We provide a checklist making it simple to know what's needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">How quickly can we access our financial information?</AccordionTrigger>
              <AccordionContent>
                With cloud accounting, you have 24/7 access to real-time financial data from any device. We typically update your books weekly or monthly (depending on your package), but bank transactions are visible immediately via bank feeds. We can provide management accounts monthly, quarterly, or whenever needed. You'll have dashboard views of key metrics like cash flow, profit/loss, and outstanding invoices at your fingertips.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">What happens if there's a payroll or bookkeeping error?</AccordionTrigger>
              <AccordionContent>
                We carry professional indemnity insurance and take full responsibility for our work. Our quality control processes minimise errors, but if one occurs, we'll correct it immediately at no cost to you. For payroll errors, we'll handle any necessary corrections with HMRC and affected employees. We also provide support if HMRC queries arise. Our goal is 100% accuracy, backed by professional accountability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Financial Administration?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Let us handle your bookkeeping and payroll so you can focus on what you do best.
          </p>
          <button
            onClick={() => {
              navigate('/book-consultation');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center text-lg"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookkeepingPayroll;