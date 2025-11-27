import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TrendingUp, Target, LineChart, Users, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';

const BusinessAdvisory = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Target,
      title: 'Business Planning',
      description: 'Develop comprehensive business plans that align with your strategic objectives and secure funding.',
      details: ['Strategic planning workshops', 'Financial projections and modelling', 'Market analysis', 'Business plan documentation']
    },
    {
      icon: LineChart,
      title: 'Cash Flow Management',
      description: 'Optimise cash flow and working capital to ensure sustainable growth and financial stability.',
      details: ['Cash flow forecasting', 'Working capital optimisation', 'Debtor and creditor management', 'Funding strategies']
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Strategic guidance to scale your business efficiently whilst maintaining profitability.',
      details: ['Growth opportunity identification', 'Market expansion planning', 'Operational efficiency reviews', 'Performance improvement strategies']
    },
    {
      icon: Users,
      title: 'Exit Planning',
      description: 'Prepare your business for sale or succession with our expert exit planning services.',
      details: ['Business valuation', 'Exit strategy development', 'Succession planning', 'Tax-efficient exit structures']
    },
    {
      icon: RefreshCw,
      title: 'Financial Restructuring',
      description: 'Navigate financial challenges with structured turnaround and recovery solutions.',
      details: ['Financial health reviews', 'Restructuring plans', 'Creditor negotiations', 'Turnaround management']
    }
  ];

  const process = [
    { step: 1, title: 'Discovery', description: 'Understanding your business, objectives, and challenges' },
    { step: 2, title: 'Analysis', description: 'Detailed review of your financial position and market opportunity' },
    { step: 3, title: 'Strategy', description: 'Developing tailored recommendations and action plans' },
    { step: 4, title: 'Implementation', description: 'Supporting execution with ongoing guidance' },
    { step: 5, title: 'Review', description: 'Regular monitoring and adjustment of strategies' }
  ];

  const benefits = [
    'Expert strategic guidance from experienced business advisors',
    'Data-driven insights for informed decision-making',
    'Improved financial performance and profitability',
    'Enhanced business valuation and exit readiness',
    'Access to funding and growth opportunities',
    'Risk mitigation and financial resilience'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Business Advisory Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Strategic financial guidance to help your business grow, thrive, and achieve its full potential
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Your Strategic Business Partner</h2>
            <p className="text-muted-foreground mb-4">
              At Optmark, we go beyond traditional accounting to provide strategic business advisory services that drive real growth and value. Whether you're a start-up seeking direction, an SME looking to scale, or an established business planning your exit, our experienced advisors work alongside you to navigate challenges and seize opportunities.
            </p>
            <p className="text-muted-foreground mb-4">
              Our advisory services combine financial expertise with practical business insight, helping you make confident decisions based on robust analysis and proven strategies. We understand the unique pressures facing UK businesses and provide tailored guidance that delivers measurable results.
            </p>
            <p className="text-muted-foreground">
              From cash flow optimisation to succession planning, we're with you every step of the way, acting as a trusted sounding board and strategic partner for your business journey.
            </p>
          </div>
          <div className="bg-accent/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Who We Help</h3>
            <ul className="space-y-3">
              {['SMEs seeking growth capital', 'Scale-ups navigating rapid expansion', 'Family businesses planning succession', 'Distressed companies requiring turnaround', 'Business owners preparing for exit', 'Start-ups developing their strategy'].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services Grid */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Advisory Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-muted p-8 md:p-12 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Why Choose Optmark?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Advisory Process</h2>
        <div className="grid md:grid-cols-5 gap-4 mb-16">
          {process.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">{item.step}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mb-16">
          <AccordionItem value="item-1">
            <AccordionTrigger>What's the difference between business advisory and standard accounting?</AccordionTrigger>
            <AccordionContent>
              Standard accounting focuses on compliance and historical reporting, whilst business advisory is forward-looking and strategic. Our advisory services help you plan for growth, optimise operations, and make strategic decisions based on financial insights and market opportunities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How much do business advisory services cost?</AccordionTrigger>
            <AccordionContent>
              Our fees depend on the scope and complexity of your requirements. We offer both project-based and ongoing retainer arrangements. During our initial consultation, we'll discuss your needs and provide a transparent fee proposal tailored to your business.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can you help with raising finance or investment?</AccordionTrigger>
            <AccordionContent>
              Yes, we assist businesses in preparing for fundraising by developing robust business plans, financial projections, and pitch materials. We can also introduce you to potential funders within our network, including banks, investors, and grant providers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How do you help businesses in financial difficulty?</AccordionTrigger>
            <AccordionContent>
              We provide confidential financial health reviews to identify issues early. Our restructuring services include cash flow management, creditor negotiations, and turnaround planning. We work pragmatically to stabilise the business and implement recovery strategies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>When should I start planning my business exit?</AccordionTrigger>
            <AccordionContent>
              Ideally, exit planning should begin 3-5 years before you intend to sell or retire. This allows time to maximise business value, structure tax-efficiently, and ensure a smooth transition. However, we can assist at any stage, from initial planning to immediate exit preparation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Do you work with businesses outside London?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Whilst we're based in London, we work with businesses across the UK. Thanks to modern communication technology, we can provide the same high level of service remotely, with in-person meetings arranged when beneficial.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-accent to-blue-600 p-8 md:p-12 rounded-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Your Business Further?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book a free consultation to discuss your business challenges and explore how our advisory services can help you achieve your goals.
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

export default BusinessAdvisory;