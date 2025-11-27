import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Monitor, Code, Rocket, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const TechnologyStartups = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      icon: Code,
      title: 'R&D Tax Credits',
      description: 'Maximise cash rebates for your software development and innovation activities.',
      detail: 'R&D tax relief can return up to 33p for every £1 spent on qualifying development. We identify eligible projects, calculate claims, and handle HMRC submissions. Our tech sector expertise means we understand what qualifies, from cloud infrastructure to AI/ML development.'
    },
    {
      icon: Users,
      title: 'Share Option Schemes',
      description: 'Implement tax-efficient EMI and CSOP schemes to attract and retain talent.',
      detail: 'Enterprise Management Incentives (EMI) and Company Share Option Plans (CSOP) offer significant tax advantages. We help you establish schemes, obtain HMRC approval, manage grants and exercises, and ensure compliance with valuation requirements.'
    },
    {
      icon: TrendingUp,
      title: 'Equity Structures',
      description: 'Structure your cap table for investment readiness and founder protection.',
      detail: 'From seed to Series C, we advise on optimal equity structures, preference shares, option pools, and anti-dilution provisions. We ensure your cap table is investor-ready whilst protecting founder interests through appropriate classes of shares.'
    },
    {
      icon: Rocket,
      title: 'Investor Reporting',
      description: 'Deliver professional monthly reporting that builds investor confidence.',
      detail: 'Investors expect timely, accurate financial reporting. We prepare monthly management accounts, KPI dashboards, burn rate analysis, and runway projections in formats familiar to VCs and angels, including SaaS-specific metrics like ARR, MRR, CAC, and LTV.'
    }
  ];

  const services = [
    'R&D tax credit claims and HMRC liaison',
    'EMI/CSOP scheme setup and administration',
    'Seed, Series A, B, C fundraising support',
    'Financial modelling and projections',
    'Management accounts and KPI dashboards',
    'Burn rate analysis and runway forecasting',
    'VAT schemes for digital services',
    'International expansion tax planning',
    'Cloud accounting setup (Xero, QuickBooks)',
    'Due diligence support for acquisitions'
  ];

  const metrics = [
    { metric: 'MRR/ARR', description: 'Monthly and Annual Recurring Revenue tracking' },
    { metric: 'Customer Acquisition Cost', description: 'Cost to acquire each new customer' },
    { metric: 'Lifetime Value', description: 'Total revenue expected per customer' },
    { metric: 'Burn Rate', description: 'Monthly cash consumption and runway' },
    { metric: 'Gross Margin', description: 'Revenue minus direct costs of service delivery' },
    { metric: 'Churn Rate', description: 'Customer and revenue retention metrics' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Monitor className="h-12 w-12 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Technology & Startups</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Specialist accounting and tax services for tech companies, SaaS businesses, and high-growth startups
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Your Tech-Savvy Accounting Partner</h2>
            <p className="text-muted-foreground mb-4">
              We specialise in supporting technology companies and startups through every stage of growth. Whether you're bootstrapping your first product, raising seed funding, or scaling to Series B and beyond, we understand the unique challenges you face.
            </p>
            <p className="text-muted-foreground mb-4">
              Our team has extensive experience working with SaaS platforms, fintech businesses, AI/ML companies, and marketplace platforms. We speak your language and understand metrics like ARR, burn rate, and unit economics that matter to you and your investors.
            </p>
            <p className="text-muted-foreground">
              From R&D tax credits that can inject cash into your business to employee share schemes that help you compete for top talent, we provide proactive advice that supports your growth ambitions.
            </p>
          </div>
          <div className="bg-accent/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Expertise</h3>
            <ul className="space-y-3">
              {[
                'SaaS and subscription business models',
                'Fintech and payment platforms',
                'AI/ML and data science companies',
                'Marketplace and platform businesses',
                'Mobile app and gaming studios',
                'Cloud infrastructure and DevOps'
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
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">How We Help Tech Businesses</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Tailored Services for Tech Companies</h2>
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
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">SaaS Metrics We Track</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((item, idx) => (
            <div key={idx} className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.metric}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Fundraising Support */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle>Pre-Seed & Seed Stage</CardTitle>
              <CardDescription>Getting your first funding</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Financial models for investor pitches</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">SEIS/EIS compliance for tax relief</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Cap table setup and management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Due diligence preparation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle>Series A, B, C+</CardTitle>
              <CardDescription>Scaling your business</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Vendor due diligence reports</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Monthly investor reporting packs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Complex cap table management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">International entity structure</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mb-16">
          <AccordionItem value="item-1">
            <AccordionTrigger>How much can I claim in R&D tax credits?</AccordionTrigger>
            <AccordionContent>
              SMEs can claim up to 33p for every £1 spent on qualifying R&D activities. For a profitable company, this reduces your Corporation Tax bill. For loss-making companies (common for startups), you receive a cash rebate. For example, £100k of R&D expenditure could generate a £33k cash injection. We'll calculate your potential claim and identify all qualifying activities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What are EMI share options and why should I use them?</AccordionTrigger>
            <AccordionContent>
              EMI (Enterprise Management Incentives) allow you to grant share options to employees with significant tax advantages. Employees pay no Income Tax or National Insurance when exercising options, and typically only 10% Capital Gains Tax when selling shares (via Business Asset Disposal Relief). This makes EMI highly attractive for recruiting and retaining key talent in competitive tech hiring markets.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How should we structure our company for investment?</AccordionTrigger>
            <AccordionContent>
              Most UK tech startups use a simple structure with one UK limited company and Ordinary shares for founders. When raising investment, you'll typically create new Preference shares with investor-friendly rights. We help structure your cap table with appropriate option pools (usually 10-15%), ensure SEIS/EIS compliance for tax relief, and advise on anti-dilution protections for founders.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What financial reporting do investors expect?</AccordionTrigger>
            <AccordionContent>
              Early-stage investors typically expect monthly management accounts within 2 weeks of month-end. Reports should include P&L, balance sheet, cash flow, burn rate, runway, and key SaaS metrics (MRR, ARR, churn, CAC, LTV). More mature companies add cohort analysis, unit economics, and departmental breakdowns. We prepare investor-ready reports in familiar formats used by VCs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Do we need audited accounts?</AccordionTrigger>
            <AccordionContent>
              Most UK tech startups don't require statutory audits (unless turnover exceeds £10.2m, assets exceed £5.1m, or you have 50+ employees). However, some investors may request audited accounts or "audit-lite" reviews for due diligence. We can arrange these when needed and ensure your accounting records are audit-ready throughout the year.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How do you charge for your services?</AccordionTrigger>
            <AccordionContent>
              We typically work with tech companies on fixed monthly retainers covering accounting, management reporting, payroll, and compliance. R&D claims are usually charged on success-fee or fixed-fee basis. For fundraising support, we offer project-based fees. We'll discuss your needs and provide transparent pricing that scales with your growth stage.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-accent to-blue-600 p-8 md:p-12 rounded-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Maximise Your R&D Tax Credits?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book a free consultation to discover how much you could claim and explore how we support tech businesses like yours.
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

export default TechnologyStartups;