import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Truck, Package, MapPin, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const TransportLogistics = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      icon: Truck,
      title: 'Fleet Management',
      description: 'Track vehicle costs, depreciation, and capital allowances optimally.',
      detail: 'Fleet accounting requires careful tracking of vehicle purchase costs, running expenses, and tax reliefs. We help you claim capital allowances on commercial vehicles, manage lease vs purchase decisions, track per-vehicle profitability, and optimise tax relief on your fleet investment.'
    },
    {
      icon: Package,
      title: 'Fuel & Expenses',
      description: 'Maximise fuel duty rebates and driver expense claims.',
      detail: 'Transport businesses face significant fuel costs. We help you track fuel expenses accurately, claim legitimate driver expenses (overnight allowances, meals), manage fuel card reconciliation, and advise on fuel duty rebates for qualifying agricultural or construction vehicles.'
    },
    {
      icon: MapPin,
      title: 'International Trade',
      description: 'Navigate customs, import VAT, and cross-border documentation.',
      detail: 'Post-Brexit trade requires careful customs compliance. We advise on customs declarations, import VAT deferment, transit procedures, and documentation requirements. Our support ensures smooth international operations whilst minimising duty costs and avoiding penalties.'
    },
    {
      icon: TrendingUp,
      title: 'Driver Administration',
      description: 'Manage employed drivers, self-employed drivers, and agency workers.',
      detail: 'Transport businesses use various driver arrangements. We handle payroll for employed drivers (including tachograph-based payments), advise on CIS for self-employed drivers, manage IR35 for personal service companies, and ensure correct tax treatment of driver benefits like vehicles and accommodation.'
    }
  ];

  const services = [
    'Fleet cost tracking and vehicle profitability',
    'Capital allowances on vehicles and trailers',
    'Fuel card reconciliation and expense tracking',
    'Driver payroll and expense management',
    'Customs and import VAT compliance',
    'International shipping documentation',
    'CIS compliance for drivers',
    'Mileage tracking and HMRC records',
    'Lease vs purchase vehicle analysis',
    'VAT on international transport services'
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Truck className="h-12 w-12 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Transport & Logistics</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Specialist accounting for haulage, courier services, freight forwarding, and logistics companies
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Transport Industry Accountants</h2>
            <p className="text-muted-foreground mb-4">
              The transport and logistics sector faces unique accounting challenges, from fleet management and fuel costs to international customs compliance. We specialise in supporting hauliers, courier services, freight forwarders, and logistics businesses across the UK.
            </p>
            <p className="text-muted-foreground mb-4">
              Our team understands the specific needs of transport businesses, including capital allowances on vehicles, driver expense compliance, fuel duty considerations, and post-Brexit customs requirements. We help you track per-vehicle profitability and optimise tax relief on your fleet.
            </p>
            <p className="text-muted-foreground">
              Whether you're an owner-driver, growing courier company, or established haulage business, we provide practical accounting support that keeps you moving forward.
            </p>
          </div>
          <div className="bg-accent/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Transport Sectors</h3>
            <ul className="space-y-3">
              {['HGV haulage and road freight', 'Courier and parcel delivery services', 'Freight forwarding and logistics', 'Warehouse and distribution', 'Owner-drivers and small fleets', 'International transport operators'].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Transport & Logistics Expertise</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Transport Accounting Services</h2>
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
            <AccordionTrigger>Can I claim capital allowances on my vehicles?</AccordionTrigger>
            <AccordionContent>
              Yes, commercial vehicles (lorries, vans over 3.5 tonnes) qualify for 100% Annual Investment Allowance, providing immediate tax relief. Cars and smaller vans have restrictions based on CO2 emissions. We identify all qualifying vehicles, optimise timing of purchases for maximum relief, and handle all capital allowances calculations and claims.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I handle driver expenses correctly?</AccordionTrigger>
            <AccordionContent>
              Drivers can claim overnight allowances (up to £34.90 per night) and meal allowances when away from base. Employed drivers should submit expense claims; self-employed drivers include these in their accounts. Keep receipts, track nights away, and maintain a logbook. We ensure your expense policies are HMRC-compliant and maximise legitimate deductions without triggering enquiries.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What's changed with post-Brexit customs?</AccordionTrigger>
            <AccordionContent>
              EU trade now requires full customs declarations, including commodity codes, origin certificates, and safety/security declarations. Import VAT is due on goods entering the UK (though can be deferred). We help you navigate customs procedures, register for postponed VAT accounting, complete documentation correctly, and minimise delays at borders.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-gradient-to-br from-accent to-blue-600 p-8 md:p-12 rounded-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Keep Your Transport Business Moving</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book a consultation to discuss fleet accounting, driver expenses, or international trade compliance.
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

export default TransportLogistics;