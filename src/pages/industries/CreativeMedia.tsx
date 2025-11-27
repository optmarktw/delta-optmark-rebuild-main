import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Palette, Camera, Film, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const CreativeMedia = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      icon: Palette,
      title: 'Freelance Income',
      description: 'Manage irregular income and expenses for creative freelancers.',
      detail: 'Creative freelancers face income volatility from project-based work. We help you manage irregular cash flow, track expenses across multiple projects, plan for tax payments, and advise on optimal business structures (sole trader vs limited company) to minimise tax whilst maintaining flexibility.'
    },
    {
      icon: Camera,
      title: 'Royalty Accounting',
      description: 'Track and report royalty income from multiple sources.',
      detail: 'Royalties from publishing, music, photography, or licensing create complex accounting. We track royalty income from various sources, handle foreign tax credits, manage copyright income taxation, and ensure proper reporting of both UK and international royalties on your tax return.'
    },
    {
      icon: Film,
      title: 'Grant Funding',
      description: 'Manage Arts Council, BFI, and other creative industry grants.',
      detail: 'Creative businesses often access grant funding from bodies like Arts Council England, BFI, or Creative England. We help you account for grants properly, ensure compliance with funding conditions, track restricted funds separately, and manage reporting requirements to funders.'
    },
    {
      icon: TrendingUp,
      title: 'Intellectual Property',
      description: 'Value, protect, and optimise tax treatment of creative IP.',
      detail: 'Your creative work is valuable intellectual property. We advise on IP ownership structures, licensing arrangements, transfer pricing for IP exploitation, and tax reliefs available for creative content production, including theatre tax relief and film tax relief where applicable.'
    }
  ];

  const services = [
    'Freelancer accounts and tax returns',
    'Royalty income tracking and reporting',
    'Grant funding accounting and compliance',
    'Production company accounts',
    'IR35 compliance for media contractors',
    'Copyright and licensing income advice',
    'Creative industry tax relief claims',
    'Agency vs freelance structure advice',
    'International income and tax credits',
    'Cash flow management for projects'
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Palette className="h-12 w-12 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Creative & Media</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Specialist accounting for creative freelancers, agencies, artists, and media businesses
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Accountants for Creatives</h2>
            <p className="text-muted-foreground mb-4">
              Creative professionals and media businesses have unique financial needs. We specialise in supporting freelance creatives, production companies, content creators, agencies, and arts organisations through the complexities of creative industry accounting.
            </p>
            <p className="text-muted-foreground mb-4">
              Our team understands royalty accounting, grant funding compliance, IR35 for media contractors, and the various tax reliefs available to creative businesses. We help you manage irregular income, track project costs, and optimise your tax position.
            </p>
            <p className="text-muted-foreground">
              Whether you're a sole creative practitioner, growing agency, or established production company, we provide practical financial support that lets you focus on your creative work.
            </p>
          </div>
          <div className="bg-accent/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Creative Sectors</h3>
            <ul className="space-y-3">
              {['Graphic designers and illustrators', 'Photographers and videographers', 'Writers, authors, and content creators', 'Film and TV production companies', 'Marketing and creative agencies', 'Musicians and performing artists'].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Creative Industry Expertise</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Creative Services</h2>
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
            <AccordionTrigger>How do I manage irregular freelance income?</AccordionTrigger>
            <AccordionContent>
              Set aside 30-35% of all income for tax and National Insurance (higher if you're a higher-rate taxpayer). Use accounting software to track income and expenses monthly. Make regular transfers to a tax savings account. We provide quarterly profit forecasts and tax estimates so you're never caught out by unexpected tax bills.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Should I set up a limited company for my creative business?</AccordionTrigger>
            <AccordionContent>
              Limited companies can save tax once profits exceed £25,000-£30,000 annually. Benefits include corporation tax at 19-25% (versus 20-45% income tax), dividend tax efficiency, and limited liability. However, consider IR35 if you're a media contractor, plus additional admin and costs. We'll model both structures and advise based on your income, work pattern, and growth plans.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How are royalties taxed?</AccordionTrigger>
            <AccordionContent>
              Royalty income is taxable as self-employment income or property income depending on the nature of the rights. UK royalties are typically paid gross (no tax deducted), whilst foreign royalties may have withholding tax that you can claim back or credit against UK tax. We track all royalty sources, claim foreign tax credits, and ensure proper reporting on your tax return.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-gradient-to-br from-accent to-blue-600 p-8 md:p-12 rounded-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Focus on Your Creativity, Not Your Accounts</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book a consultation to discuss freelance accounting, royalty income, or creative industry tax.
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

export default CreativeMedia;