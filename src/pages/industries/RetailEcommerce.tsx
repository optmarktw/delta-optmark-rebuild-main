import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShoppingBag, TrendingUp, Package, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';

const RetailEcommerce = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Accurate stock accounting and valuation for profitability analysis.',
      detail: 'We help you track stock levels, calculate cost of goods sold, manage stock write-offs, and implement proper inventory valuation methods (FIFO, weighted average). Integration with your inventory systems ensures accurate gross margin reporting.'
    },
    {
      icon: ShoppingBag,
      title: 'Multi-Channel Sales',
      description: 'Reconciliation across Amazon, eBay, Shopify, and your own website.',
      detail: 'Selling across multiple platforms creates complex accounting. We reconcile sales, fees, refunds, and payments from all channels, providing consolidated reporting and channel profitability analysis to optimise your marketplace strategy.'
    },
    {
      icon: CreditCard,
      title: 'VAT Compliance',
      description: 'Navigate cross-border VAT, distance selling, and Making Tax Digital.',
      detail: 'E-commerce VAT is complex, especially post-Brexit. We handle UK VAT registration, EU OSS (One Stop Shop) registration, distance selling thresholds, import VAT, and ensure MTD compliance with automated submissions from your accounting software.'
    },
    {
      icon: TrendingUp,
      title: 'Cash Flow Management',
      description: 'Managing seasonal peaks, stock investment, and working capital.',
      detail: 'Retail businesses face volatile cash flow from seasonal trading and stock investment. We provide cash flow forecasting, working capital analysis, and peak season planning to ensure you have sufficient funding for Black Friday, Christmas, and growth.'
    }
  ];

  const services = [
    'Stock accounting and inventory valuation',
    'Multi-channel sales reconciliation',
    'Marketplace fee analysis (Amazon, eBay)',
    'Shopify, WooCommerce, Magento integration',
    'VAT returns and Making Tax Digital compliance',
    'Cross-border and distance selling VAT',
    'Cash flow forecasting and seasonal planning',
    'Gross margin and profitability analysis',
    'Payment gateway reconciliation (Stripe, PayPal)',
    'Channel performance reporting'
  ];

  const metrics = [
    { metric: 'Gross Margin %', description: 'Sales minus cost of goods sold' },
    { metric: 'Stock Turn', description: 'How quickly you sell through inventory' },
    { metric: 'Average Order Value', description: 'Average transaction size per customer' },
    { metric: 'Customer Acquisition Cost', description: 'Marketing spend per new customer' },
    { metric: 'Channel Profitability', description: 'Net profit by sales platform' },
    { metric: 'Days Stock Cover', description: 'How long current stock will last' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <ShoppingBag className="h-12 w-12 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Retail & E-commerce</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Specialist accounting for retail businesses, online stores, and multi-channel sellers
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Retail Accounting Specialists</h2>
            <p className="text-muted-foreground mb-4">
              Whether you run a boutique shop, an online store, or a multi-channel retail business, we understand the complexities of retail accounting. From inventory management to marketplace reconciliation, we provide clear financial insights that help you grow profitably.
            </p>
            <p className="text-muted-foreground mb-4">
              Our team has extensive experience with e-commerce platforms like Shopify, WooCommerce, and Magento, plus marketplaces including Amazon, eBay, and Etsy. We integrate directly with your sales channels to automate data capture and provide real-time financial reporting.
            </p>
            <p className="text-muted-foreground">
              We help retail businesses navigate VAT complexities, manage seasonal cash flow, analyse channel profitability, and make data-driven decisions about stock investment and marketing spend.
            </p>
          </div>
          <div className="bg-accent/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Who We Work With</h3>
            <ul className="space-y-3">
              {[
                'Independent retail shops and boutiques',
                'Pure-play online stores (Shopify, WooCommerce)',
                'Amazon FBA and marketplace sellers',
                'Multi-channel retailers (online + physical)',
                'Fashion, homewares, and consumer goods',
                'Wholesale and trade businesses'
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
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Retail Challenges We Solve</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Retail Accounting Services</h2>
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
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Key Retail Metrics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((item, idx) => (
            <div key={idx} className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.metric}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* VAT & Compliance */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle>UK & EU VAT Compliance</CardTitle>
              <CardDescription>Navigate post-Brexit complexity</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">UK VAT registration and returns</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">EU OSS (One Stop Shop) registration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Distance selling thresholds monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Import VAT and customs duty advice</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle>Peak Season Planning</CardTitle>
              <CardDescription>Prepare for your busiest periods</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Black Friday and Christmas forecasting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Stock investment and working capital planning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Cash flow management for seasonal peaks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                  <span className="text-sm text-muted-foreground">Marketing ROI and promotional analysis</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mb-16">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do you handle multi-channel sales reconciliation?</AccordionTrigger>
            <AccordionContent>
              We connect directly to your sales platforms via API integrations or file imports. Sales, fees, refunds, and payouts from each channel are automatically reconciled to your bank statements. We provide consolidated reporting showing total sales and channel-by-channel profitability, helping you identify which platforms deliver the best returns.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What's the best way to value my inventory?</AccordionTrigger>
            <AccordionContent>
              Most retail businesses use either FIFO (First In, First Out) or weighted average cost methods. FIFO is simpler and works well for perishable goods or fashion. Weighted average is better for commoditised products with fluctuating costs. We'll recommend the most appropriate method for your business and ensure consistent application.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do I need to register for VAT if I sell on Amazon?</AccordionTrigger>
            <AccordionContent>
              You must register for UK VAT once your rolling 12-month turnover exceeds £90,000 (or you expect to exceed this in the next 30 days). This includes all UK sales across all channels. Amazon UK sales count towards this threshold. We can also advise on voluntary VAT registration if you're below the threshold but have significant VAT on purchases.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How does post-Brexit VAT work for EU sales?</AccordionTrigger>
            <AccordionContent>
              Selling to EU consumers now has different rules. For orders under €150, you can register for the OSS (One Stop Shop) scheme, allowing one quarterly return covering all EU sales. For orders over €150, VAT is collected by customs on import. We handle OSS registration, quarterly returns, and advise on the most cost-effective fulfilment structure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What's a healthy gross margin for retail?</AccordionTrigger>
            <AccordionContent>
              Gross margins vary significantly by sector. Fashion typically runs 50-60%, homewares 40-50%, consumer electronics 10-20%. For e-commerce, you need sufficient margin to cover marketplace fees (15-20% on Amazon), payment processing (2-3%), and shipping costs, whilst leaving room for marketing spend and profit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How do you help with cash flow management?</AccordionTrigger>
            <AccordionContent>
              We provide 13-week rolling cash flow forecasts updated monthly, highlighting upcoming peak periods and funding requirements. We'll help you plan stock investment, manage supplier payment terms, and arrange invoice financing or business loans when needed. Our goal is ensuring you never run out of cash, especially during peak trading periods.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-accent to-blue-600 p-8 md:p-12 rounded-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Retail Finances Under Control</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book a free consultation to discuss how we can help streamline your accounting and boost profitability.
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

export default RetailEcommerce;