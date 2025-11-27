import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Briefcase, Users, FileText, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const ProfessionalServices = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      icon: FileText,
      title: 'Project Accounting',
      description: 'Track profitability across multiple client engagements and projects.',
      detail: 'We implement robust project accounting to track costs and revenue by engagement, enabling accurate work-in-progress valuations, project profitability analysis, and informed pricing decisions for future work.'
    },
    {
      icon: TrendingUp,
      title: 'Time Billing & Recovery',
      description: 'Maximise revenue with effective time tracking and billing systems.',
      detail: 'We integrate with time recording systems to analyse billing efficiency, identify write-offs, monitor utilisation rates, and improve fee recovery. Our reporting highlights which clients, projects, and team members deliver the best returns.'
    },
    {
      icon: Users,
      title: 'Partnership Structures',
      description: 'Navigate partnership taxation, profit allocation, and capital accounts.',
      detail: 'Professional partnerships have unique tax and accounting requirements. We manage partnership accounts, allocate profits according to your agreement, handle capital accounts, and ensure compliance with partnership tax returns.'
    },
    {
      icon: Briefcase,
      title: 'Professional Indemnity',
      description: 'Manage professional indemnity provisions and claims accounting.',
      detail: 'We help you account for professional indemnity insurance, provision for potential claims, and manage the financial impact of PI claims, ensuring your financial statements accurately reflect your exposure and liabilities.'
    }
  ];

  const services = [
    'Project profitability tracking',
    'Work-in-progress (WIP) valuation',
    'Time and billing analysis',
    'Utilisation rate reporting',
    'Partnership accounts and tax returns',
    'Partner capital account management',
    'Profit allocation calculations',
    'Management accounts by department',
    'Cash collection and debtor management',
    'Succession and exit planning'
  ];

  const metrics = [
    { metric: 'Utilisation Rate', description: 'Percentage of billable vs available hours' },
    { metric: 'Average Hourly Rate', description: 'Realised billing rate per fee earner' },
    { metric: 'Work in Progress', description: 'Unbilled time at cost and value' },
    { metric: 'Lock-Up Days', description: 'Average time from work done to cash received' },
    { metric: 'Profit per Partner', description: 'Distributable profit per equity partner' },
    { metric: 'Overhead Recovery', description: 'How efficiently overheads are recovered' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Briefcase className="h-12 w-12 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Professional Services</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Specialist accounting for consultancies, agencies, law firms, architects, and professional practices
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Accounting for Professional Firms</h2>
            <p className="text-muted-foreground mb-4">
              Professional service firms have unique accounting requirements that differ significantly from product-based businesses. We specialise in serving consultancies, agencies, architects, surveyors, law firms, and other time-based professional practices.
            </p>
            <p className="text-muted-foreground mb-4">
              Our expertise covers project accounting, work-in-progress valuation, partnership structures, and the specific financial metrics that matter to professional service firms. We help you understand which clients and projects are most profitable, optimise billing efficiency, and improve cash collection.
            </p>
            <p className="text-muted-foreground">
              Whether you're a sole practitioner, growing firm, or established partnership, we provide insights that help you run your practice more profitably whilst ensuring compliance with professional regulations and partnership tax requirements.
            </p>
          </div>
          <div className="bg-accent/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Sectors We Serve</h3>
            <ul className="space-y-3">
              {[
                'Management and business consultancies',
                'Marketing, PR, and creative agencies',
                'Legal practices and solicitors',
                'Architects and design practices',
                'Engineering and technical consultants',
                'HR and recruitment consultancies'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Challenges */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">How We Help Professional Practices</h2>
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

        {/* Services List */}
        <div className="bg-muted p-8 md:p-12 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Services for Professional Firms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* KPI Metrics */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Key Practice Metrics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((item, idx) => (
            <div key={idx} className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.metric}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Partnership Support */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle>Partnership Taxation</CardTitle>
              <CardDescription>Navigate complex partnership tax</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Partnership tax returns (SA800)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Individual partner tax returns (SA100)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Class 2 and Class 4 NIC calculations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Profit allocation per partnership deed</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle>Practice Management</CardTitle>
              <CardDescription>Improve operational efficiency</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Overhead allocation by department</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Fee earner profitability analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Pricing strategy and rate optimisation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Cash flow and working capital management</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mb-16">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do you value work-in-progress?</AccordionTrigger>
            <AccordionContent>
              WIP represents unbilled time and expenses for ongoing projects. We value this at cost (time at cost rates) or at selling value (time at billing rates), depending on your accounting policy. Proper WIP valuation is crucial for accurate profit reporting and ensures you recognise revenue in the correct period when billing is delayed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Should we operate as a partnership or limited company?</AccordionTrigger>
            <AccordionContent>
              Many professional practices operate as partnerships (traditional or LLP) for regulatory, cultural, or tax reasons. Limited companies can offer tax advantages but reduce flexibility in profit distribution. We'll analyse your specific circumstances, considering liability protection, tax efficiency, regulatory requirements, and exit planning to recommend the optimal structure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How should we allocate profits between partners?</AccordionTrigger>
            <AccordionContent>
              Profit allocation should be documented in your partnership agreement. Common methods include equal shares, seniority-based splits, or performance-based allocation (lockstep, eat-what-you-kill, or hybrid). We help you implement your agreed allocation method, track individual partner performance, and manage capital account movements when partners join or leave.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What's a good utilisation rate for our firm?</AccordionTrigger>
            <AccordionContent>
              Target utilisation rates vary by sector and seniority. For consulting firms, 60-75% is typical for partners, 70-85% for managers, and 75-90% for analysts. Legal and accounting practices often target similar ranges. Low utilisation may indicate insufficient client work, whilst very high utilisation can lead to burnout and quality issues.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How can we improve our cash collection?</AccordionTrigger>
            <AccordionContent>
              Reducing lock-up (days from work done to cash received) requires disciplined processes: bill promptly at month-end, issue invoices immediately, chase overdue accounts systematically, and consider payment terms like staged billing or upfront retainers. We provide aged debtor reports, monitor collection performance, and implement credit control procedures to accelerate cash flow.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Do you integrate with our practice management software?</AccordionTrigger>
            <AccordionContent>
              Yes, we work with most major practice management systems including Clio (legal), WorkflowMax, FreeAgent, and specialist time recording tools. We can extract time data, project costs, and billing information to integrate with your accounting system, providing comprehensive financial reporting without duplicate data entry.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-accent to-blue-600 p-8 md:p-12 rounded-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Improve Your Practice Profitability</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book a free consultation to discover how we can help you track project profitability and optimise your practice finances.
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

export default ProfessionalServices;