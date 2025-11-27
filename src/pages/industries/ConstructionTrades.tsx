import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Hammer, HardHat, Wrench, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const ConstructionTrades = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      icon: Hammer,
      title: 'CIS Compliance',
      description: 'Navigate Construction Industry Scheme deductions and returns.',
      detail: 'The CIS requires contractors to deduct tax from subcontractor payments (20% standard, 30% unregistered). We handle CIS registration, subcontractor verification, monthly return submissions, and reverse charge VAT compliance. Our expertise ensures you avoid penalties whilst maximising cash flow through proper CIS management.'
    },
    {
      icon: HardHat,
      title: 'Project Costing',
      description: 'Track profitability across multiple construction projects.',
      detail: 'Accurate project costing is essential for construction profitability. We implement job costing systems tracking materials, labour, subcontractors, and plant costs per project. This enables accurate tender pricing, progress billing, and identification of profitable vs loss-making contracts before completion.'
    },
    {
      icon: Wrench,
      title: 'Cash Flow Management',
      description: 'Navigate retention accounting and cash flow volatility.',
      detail: 'Construction businesses face unique cash flow challenges from retentions (typically 5% held for 6-12 months), long payment terms, and upfront material costs. We provide cash flow forecasting accounting for retention releases, CIS deduction timing, and working capital requirements for multiple concurrent projects.'
    },
    {
      icon: TrendingUp,
      title: 'Contract Accounting',
      description: 'Revenue recognition and profit taking on long-term contracts.',
      detail: 'Long-term construction contracts require careful accounting. We apply appropriate revenue recognition methods (completed contract or percentage completion), calculate work-in-progress valuations, account for variations and claims, and ensure compliance with JCT contract terms and accounting standards.'
    }
  ];

  const services = [
    'CIS registration and monthly returns',
    'Subcontractor verification and management',
    'Reverse charge VAT compliance',
    'Project profitability tracking',
    'Job costing and work-in-progress',
    'Cash flow forecasting',
    'Retention accounting',
    'Capital allowances on plant and machinery',
    'Contract accounting (JCT contracts)',
    'Fleet and vehicle expense management'
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Hammer className="h-12 w-12 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Construction & Trades</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Specialist accounting for contractors, builders, tradespeople, and construction businesses
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Construction Industry Specialists</h2>
            <p className="text-muted-foreground mb-4">
              The construction industry has unique accounting requirements, particularly around CIS compliance, project costing, and cash flow management. We specialise in supporting contractors, subcontractors, builders, and tradespeople across all construction sectors.
            </p>
            <p className="text-muted-foreground mb-4">
              Our team understands the Construction Industry Scheme inside-out, from contractor obligations to subcontractor registrations. We help you navigate CIS deductions, manage project profitability, handle reverse charge VAT, and optimise tax relief on plant, machinery, and vehicles.
            </p>
            <p className="text-muted-foreground">
              Whether you're a sole trader builder, limited company contractor, or growing construction business managing multiple projects, we provide practical accounting support that keeps you compliant and profitable.
            </p>
          </div>
          <div className="bg-accent/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Who We Help</h3>
            <ul className="space-y-3">
              {['General builders and contractors', 'Specialist trade contractors (electrical, plumbing)', 'House builders and property developers', 'Civil engineering contractors', 'Groundwork and plant hire companies', 'Construction subcontractors'].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Construction Accounting Expertise</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Construction Services</h2>
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
            <AccordionTrigger>How does the Construction Industry Scheme work?</AccordionTrigger>
            <AccordionContent>
              Under CIS, contractors must verify subcontractors with HMRC and deduct tax from payments (20% if registered, 30% if not, 0% for gross payment status). Deductions are reported monthly via CIS returns. Subcontractors reclaim deductions via their tax returns. We handle all CIS administration, from registration to monthly submissions, ensuring compliance and avoiding penalties up to £3,000 per month.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is reverse charge VAT and how does it affect me?</AccordionTrigger>
            <AccordionContent>
              Since March 2021, VAT reverse charge applies to most construction services. Instead of the subcontractor charging VAT, the contractor accounts for it. This prevents VAT fraud but requires careful accounting. We ensure your invoices are correctly marked, reverse charge transactions are properly recorded, and VAT returns accurately reflect both your normal and reverse charge supplies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I claim capital allowances on plant and vehicles?</AccordionTrigger>
            <AccordionContent>
              Yes, construction plant, machinery, and commercial vehicles qualify for capital allowances, providing immediate tax relief. Annual Investment Allowance gives 100% first-year relief on qualifying assets up to £1 million. Vehicles under 3.5 tonnes may be subject to restrictions. We identify all qualifying expenditure and optimise claims, including super-deduction claims where applicable for larger investments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-gradient-to-br from-accent to-blue-600 p-8 md:p-12 rounded-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Construction Finances in Order</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book a consultation to discuss CIS compliance, project costing, and construction accounting.
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

export default ConstructionTrades;