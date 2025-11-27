import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle, TrendingUp, BarChart, Target, PieChart, LineChart, Zap, ArrowRight, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ManagementAccounting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: BarChart,
      title: 'Management Reports',
      description: 'Comprehensive monthly or quarterly management accounts providing detailed profit and loss, balance sheets, cash flow statements, and variance analysis against budgets.'
    },
    {
      icon: Target,
      title: 'Budgeting & Forecasting',
      description: 'Strategic budget creation and rolling forecasts to plan ahead, manage resources effectively, and anticipate future cash requirements based on realistic projections.'
    },
    {
      icon: PieChart,
      title: 'Cost Analysis',
      description: 'Detailed cost breakdowns by product, service, department, or project. Identify profit drains, understand true costs, and optimise pricing strategies for improved margins.'
    },
    {
      icon: LineChart,
      title: 'Performance Metrics & KPIs',
      description: 'Development of tailored KPI dashboards tracking the metrics that matter most to your business, from gross profit margins to customer acquisition costs.'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Better Decision Making',
      description: 'Base strategic decisions on accurate, timely financial data rather than gut feeling'
    },
    {
      icon: Target,
      title: 'Goal Achievement',
      description: 'Set realistic targets, track progress, and course-correct quickly when needed'
    },
    {
      icon: Zap,
      title: 'Identify Opportunities',
      description: 'Spot profitable products, services, or customers, and identify areas for cost reduction'
    },
    {
      icon: CheckCircle,
      title: 'Investor Ready',
      description: 'Provide professional management accounts that satisfy lenders and investors'
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
            <span className="text-white">Management Accounting</span>
          </div>
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-4 rounded-xl mr-6">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">Management Accounting Services</h1>
              <p className="text-xl text-slate-300">Strategic financial insights to drive business performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose max-w-none mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Financial Intelligence for Business Growth</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Whilst statutory accounts tell you where you've been, management accounting shows you where you're going. At Optmark Accountants, our management accounting services provide the financial intelligence you need to steer your business confidently towards your goals.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Many business owners operate with limited visibility of their true financial position. They know their bank balance, but understanding profitability by product line, customer, or department requires sophisticated management accounting. Our services transform raw financial data into actionable insights that directly impact your bottom line.
          </p>
          <p className="text-lg text-muted-foreground">
            Whether you're seeking funding, planning expansion, or simply want better control over your finances, our management accounting services provide the clarity, foresight, and financial discipline that successful businesses rely on.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Management Accounting Services</h2>
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

        {/* What's Included */}
        <div className="bg-muted p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">What's Included in Management Accounts?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our management accounts packages provide comprehensive financial reporting tailored to your business needs:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Standard Reports Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Detailed profit & loss by department/project</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Balance sheet with key ratio analysis</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Cash flow statements and forecasts</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Variance analysis (actual vs budget)</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Aged debtors and creditors reports</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Enhanced Analysis Options:</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Profitability by product/service line</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Customer profitability analysis</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Break-even and sensitivity analysis</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Rolling 12-month forecasts</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Board-ready presentation packs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* KPI Dashboard Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Custom KPI Dashboards</h2>
          <div className="bg-card p-8 rounded-xl border border-border">
            <p className="text-lg text-muted-foreground mb-6">
              We create tailored KPI dashboards that track the metrics most critical to your business success. Examples include:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-bold mb-2 text-foreground">Financial KPIs</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Gross profit margin %</li>
                  <li>• Net profit margin %</li>
                  <li>• EBITDA</li>
                  <li>• Return on investment</li>
                  <li>• Working capital ratio</li>
                </ul>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-bold mb-2 text-foreground">Operational KPIs</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Revenue per employee</li>
                  <li>• Average transaction value</li>
                  <li>• Stock turnover ratio</li>
                  <li>• Debtor days</li>
                  <li>• Creditor days</li>
                </ul>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-bold mb-2 text-foreground">Growth KPIs</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Month-on-month growth %</li>
                  <li>• Customer acquisition cost</li>
                  <li>• Customer lifetime value</li>
                  <li>• Churn rate</li>
                  <li>• Sales pipeline value</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Benefits of Management Accounting</h2>
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

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">When Do You Need Management Accounting?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3 text-foreground">Seeking Funding or Investment</h3>
              <p className="text-muted-foreground">
                Banks and investors require detailed management accounts, forecasts, and financial projections. We prepare investment-grade financial packs that demonstrate business viability and growth potential.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3 text-foreground">Rapid Growth Phase</h3>
              <p className="text-muted-foreground">
                Growing businesses need tight financial control. Our management accounts help you monitor cash burn, manage working capital, and ensure growth is profitable and sustainable.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3 text-foreground">Multiple Revenue Streams</h3>
              <p className="text-muted-foreground">
                If you offer different products or services, understanding which are profitable is crucial. We provide detailed segmental reporting to guide your commercial strategy.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3 text-foreground">Underperformance or Uncertainty</h3>
              <p className="text-muted-foreground">
                When things aren't going to plan, management accounts diagnose problems quickly. Identify where money is leaking, which costs are out of control, and where to focus improvement efforts.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">What's the difference between statutory accounts and management accounts?</AccordionTrigger>
              <AccordionContent>
                Statutory accounts are legally required annual accounts prepared for HMRC and Companies House, following strict accounting standards. They're historical and tell you what happened last year. Management accounts are produced for you, the business owner, more frequently (typically monthly or quarterly). They're forward-looking, flexible in format, and focused on providing actionable insights for running your business. Management accounts can include budgets, forecasts, and analysis not found in statutory accounts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">How quickly can you produce management accounts?</AccordionTrigger>
              <AccordionContent>
                With well-maintained bookkeeping and cloud accounting systems, we typically produce management accounts within 5-10 working days after month-end. The key is having clean, up-to-date bookkeeping. If your books are behind or need tidying, we can help get systems in place to enable fast, accurate reporting. Many clients receive their accounts by the 10th of the following month, giving them timely information for decision-making.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Do we need management accounts every month?</AccordionTrigger>
              <AccordionContent>
                Frequency depends on your business needs and complexity. Fast-growing businesses, those with significant cash flow pressures, or companies with investor reporting requirements typically benefit from monthly accounts. More stable, established businesses might opt for quarterly accounts. We can also provide different levels of reporting - perhaps monthly summaries with detailed quarterly deep-dives. During your consultation, we'll recommend a frequency that balances insight with cost-effectiveness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Can you help us set budgets and forecasts?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Budget creation is a core management accounting service. We'll work with you to understand your business plans, then build realistic budgets based on historical performance, market conditions, and your growth ambitions. We typically create annual budgets broken down monthly, with quarterly reviews and rolling forecasts. This gives you targets to aim for and a framework to measure actual performance against. We'll also scenario-plan different outcomes (best case, worst case, most likely) to aid strategic planning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">How much do management accounting services cost?</AccordionTrigger>
              <AccordionContent>
                Pricing depends on your business size, reporting complexity, and frequency. Monthly management accounts typically range from £300-£1,500 per month depending on turnover and detail required. This includes profit & loss, balance sheet, cash flow, and variance analysis. Additional services like detailed KPI dashboards, departmental reporting, or forecast modelling are priced separately. We offer fixed monthly fees so you can budget accordingly. The investment typically pays for itself through better financial control and decision-making.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Financial Clarity?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Discover how management accounting can transform your business decision-making.
          </p>
          <button
            onClick={() => {
              navigate('/book-consultation');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center text-lg"
          >
            Book a Strategy Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagementAccounting;