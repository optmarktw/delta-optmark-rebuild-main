import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calculator, TrendingUp, Shield, Users, Building } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Calculator,
      title: 'Tax Preparation & Planning',
      description: 'Comprehensive tax services including preparation, planning, and compliance for individuals and businesses.',
      features: ['Personal Tax Returns', 'Corporate Tax Planning', 'VAT Registration & Returns', 'Tax Compliance'],
      link: '/services/tax-preparation-planning'
    },
    {
      icon: TrendingUp,
      title: 'Bookkeeping & Payroll',
      description: 'Complete bookkeeping and payroll management services to keep your finances organized.',
      features: ['Monthly Bookkeeping', 'Payroll Processing', 'Expense Management', 'Financial Reporting'],
      link: '/services/bookkeeping-payroll'
    },
    {
      icon: Shield,
      title: 'Management Accounting',
      description: 'Strategic financial analysis and reporting to support informed business decisions.',
      features: ['Management Reports', 'Budgeting & Forecasting', 'Cost Analysis', 'Performance Metrics'],
      link: '/services/management-accounting'
    },
    {
      icon: Users,
      title: 'Business Advisory',
      description: 'Expert guidance on business strategy, growth planning, and financial optimization.',
      features: ['Business Planning', 'Cash Flow Management', 'Exit Strategy', 'Growth Advisory'],
      link: '/services/business-advisory'
    },
    {
      icon: Building,
      title: 'Company Secretarial',
      description: 'Professional company secretarial services to ensure corporate compliance.',
      features: ['Company Formation', 'Statutory Filing', 'Corporate Governance', 'Share Management'],
      link: '/services/company-secretarial'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive accounting solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group cursor-pointer border border-border"
                onClick={() => {
                  navigate(service.link);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
