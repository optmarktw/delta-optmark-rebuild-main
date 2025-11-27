import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Building2, Home, Key, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const PropertyRealEstate = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      icon: Building2,
      title: 'Capital Allowances',
      description: 'Maximise tax relief on fixtures, fittings, and integral features.',
      detail: 'Capital allowances can provide substantial tax relief on property purchases. We identify qualifying expenditure on fixtures, fittings, and integral features (heating, lifts, electrical systems), preparing detailed capital allowances schedules that can reduce your tax bill by tens of thousands of pounds.'
    },
    {
      icon: Home,
      title: 'Rental Income Taxation',
      description: 'Optimise tax efficiency for your buy-to-let portfolio.',
      detail: 'Rental income taxation has become more complex with restrictions on mortgage interest relief. We help you navigate these rules, advise on incorporation decisions, manage property accounts, and ensure compliance with Making Tax Digital for landlords with larger portfolios.'
    },
    {
      icon: Key,
      title: 'Property Development',
      description: 'Accounting and tax planning for development projects.',
      detail: 'Property development requires specialist treatment, from securing development finance to managing project accounting. We handle construction industry scheme (CIS) compliance, development profit recognition, VAT planning (including options to tax), and structuring deals to minimise capital gains tax.'
    },
    {
      icon: TrendingUp,
      title: 'Portfolio Structuring',
      description: 'Optimise your property investment structure for tax efficiency.',
      detail: 'The optimal structure depends on your circumstances and objectives. We analyse holding properties personally, through limited companies, partnerships, or SIPPs, considering income tax, capital gains tax, inheritance tax, and exit planning to recommend the most tax-efficient structure for your portfolio.'
    }
  ];

  const services = [
    'Capital allowances surveys and claims',
    'Buy-to-let accounting and tax returns',
    'Property company accounts and CT600s',
    'Stamp Duty Land Tax (SDLT) planning',
    'Development project accounting',
    'Construction Industry Scheme (CIS) compliance',
    'Capital gains tax planning on disposals',
    'Incorporation of rental portfolios',
    'Inheritance tax planning for property',
    'Property finance and due diligence support'
  ];

  const taxConsiderations = [
    { aspect: 'Mortgage Interest Relief', detail: 'Now restricted to 20% tax credit for personal landlords' },
    { aspect: 'Capital Gains Tax', detail: 'Currently 18% (basic rate) or 28% (higher rate) on residential property' },
    { aspect: 'SDLT Surcharge', detail: '3% additional SDLT on second homes and buy-to-let properties' },
    { aspect: 'Annual Tax on Enveloped Dwellings', detail: 'Annual charge on residential properties held by companies' },
    { aspect: 'Non-Resident CGT', detail: 'CGT on UK property disposals by non-residents since April 2015' },
    { aspect: 'Mixed-Use Relief', detail: 'Lower SDLT rates and better CGT treatment for mixed-use properties' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Building2 className="h-12 w-12 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Property & Real Estate</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Specialist tax and accounting services for property investors, landlords, and developers
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Property Tax Specialists</h2>
            <p className="text-muted-foreground mb-4">
              Property taxation is one of the most complex areas of UK tax law. Whether you're a buy-to-let landlord, property developer, or real estate investor, we provide specialist advice to help you minimise tax and maximise returns from your property investments.
            </p>
            <p className="text-muted-foreground mb-4">
              Our property team understands capital allowances claims, Stamp Duty Land Tax planning, capital gains tax strategies, and the intricacies of rental income taxation. We help you structure your holdings tax-efficiently, whether through personal ownership, limited companies, or more sophisticated structures.
            </p>
            <p className="text-muted-foreground">
              From first-time landlords to sophisticated developers managing multi-million pound projects, we provide practical, tax-efficient advice backed by deep property sector expertise.
            </p>
          </div>
          <div className="bg-accent/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Who We Help</h3>
            <ul className="space-y-3">
              {[
                'Buy-to-let landlords and property investors',
                'Property developers and house builders',
                'Commercial property owners and investors',
                'Property trading and investment companies',
                'HMO (House in Multiple Occupation) landlords',
                'Overseas investors in UK property'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Services */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Property Tax Expertise</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Property Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tax Considerations */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Key Property Tax Considerations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {taxConsiderations.map((item, idx) => (
            <div key={idx} className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.aspect}</h3>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Structuring Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle>Personal Ownership</CardTitle>
              <CardDescription>Holding property in your own name</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Advantages:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                      <span>Simple to set up and manage</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                      <span>Lower CGT rates on eventual sale (18%/28%)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                      <span>Easier mortgage availability</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Disadvantages:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                      <span>Restricted mortgage interest relief (20% only)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                      <span>Income taxed at marginal rates up to 45%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle>Limited Company</CardTitle>
              <CardDescription>Holding property through a company</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Advantages:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                      <span>Full mortgage interest deductibility</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                      <span>Corporation tax at 25% (small profits rate 19%)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                      <span>Easier to pass on to next generation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Disadvantages:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                      <span>3% SDLT surcharge on purchases</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                      <span>Extraction via dividends (further tax)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mb-16">
          <AccordionItem value="item-1">
            <AccordionTrigger>What are capital allowances and how much can I claim?</AccordionTrigger>
            <AccordionContent>
              Capital allowances provide tax relief on qualifying items within a property purchase, including fixtures, fittings, and integral features (heating, lifts, electrical systems, water systems). Claims typically range from 10-30% of purchase price. For a £500,000 commercial property, this could mean £50,000-£150,000 of additional tax deductions, saving £10,000-£37,500 in corporation tax.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Should I incorporate my rental portfolio?</AccordionTrigger>
            <AccordionContent>
              Incorporation is beneficial when mortgage interest is significant and you're a higher-rate taxpayer. A limited company gets full mortgage interest relief and pays 19-25% corporation tax. However, incorporation triggers SDLT (or transfer at market value avoiding SDLT but triggering CGT). We'll model both scenarios and recommend based on your portfolio size, leverage, and long-term plans.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How is Stamp Duty Land Tax calculated on property purchases?</AccordionTrigger>
            <AccordionContent>
              SDLT is charged on a tiered basis: 0% up to £250,000 (or £425,000 for first-time buyers), 5% on £250,001-£925,000, 10% on £925,001-£1.5m, and 12% above £1.5m. Buy-to-let and second homes attract an additional 3% surcharge on all bands. For mixed-use properties (commercial element), lower non-residential rates may apply. We advise on SDLT planning strategies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What's the Construction Industry Scheme (CIS)?</AccordionTrigger>
            <AccordionContent>
              CIS requires contractors to deduct tax at source from subcontractor payments (typically 20%, or 30% if not registered). As a property developer, you're likely a contractor and must register, verify subcontractors, make deductions, and file monthly returns. We handle all CIS compliance and ensure subcontractors receive statements for their tax returns.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How can I reduce capital gains tax when selling property?</AccordionTrigger>
            <AccordionContent>
              CGT planning strategies include: utilising your annual exempt amount (£6,000 for 2024/25), transferring assets to a spouse to use their allowance, timing disposals across tax years, claiming principal private residence relief for former homes, offsetting capital losses, and considering instalment payment elections. For developers, trading treatment (income tax but losses deductible) may be preferable to investment treatment (CGT).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Do you help with property development projects?</AccordionTrigger>
            <AccordionContent>
              Yes, we provide comprehensive support including development appraisals, finance raising assistance, project accounting (tracking costs by development phase), CIS compliance, VAT advice (options to tax, zero-rating new builds), profit recognition (on completion or stage of completion basis), and capital vs revenue treatment decisions. We work with both small refurbishment projects and large-scale developments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-accent to-blue-600 p-8 md:p-12 rounded-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Maximise Your Property Returns</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book a free consultation to discuss capital allowances claims, tax-efficient structuring, and how to improve your property investment returns.
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

export default PropertyRealEstate;