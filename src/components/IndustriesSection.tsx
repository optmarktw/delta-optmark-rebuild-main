import { useNavigate } from 'react-router-dom';
import { Monitor, ShoppingBag, Briefcase, Building2, Heart, Hammer, Palette, Truck, ArrowRight, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const IndustriesSection = () => {
  const navigate = useNavigate();

  const industries = [
    {
      icon: Monitor,
      title: 'Technology & Startups',
      description: 'Specialised support for tech companies, SaaS businesses, and high-growth startups.',
      keyChallenges: ['R&D tax credits', 'Share option schemes', 'International expansion', 'Investor reporting'],
      howWeHelp: 'We understand the unique challenges of tech businesses, from complex equity structures to R&D claims. Our team helps you maximise tax incentives, manage investor relationships, and scale efficiently.',
      stats: {
        clients: '50+',
        avgSaving: '£45K',
        successRate: '96%'
      },
      miniCaseStudy: {
        result: '£50K R&D tax credit secured',
        client: 'SaaS Startup'
      },
      link: '/industries/technology-startups'
    },
    {
      icon: ShoppingBag,
      title: 'Retail & E-commerce',
      description: 'Comprehensive accounting for retail businesses, both online and brick-and-mortar.',
      keyChallenges: ['Inventory management', 'Multi-channel sales', 'VAT on digital services', 'Seasonal fluctuations'],
      howWeHelp: 'Our retail expertise covers everything from inventory accounting to online marketplace compliance. We streamline your operations across all sales channels and help you manage cash flow through seasonal peaks.',
      stats: {
        clients: '80+',
        avgSaving: '15 hrs/week',
        successRate: '99%'
      },
      miniCaseStudy: {
        result: '15 hours saved weekly',
        client: 'Multi-channel Retailer'
      },
      link: '/industries/retail-ecommerce'
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Tailored solutions for consultancies, agencies, and professional practices.',
      keyChallenges: ['Project accounting', 'Time billing', 'Partnership structures', 'Professional indemnity'],
      howWeHelp: 'We help professional service firms optimise their financial processes and partnership structures. From project profitability analysis to partner profit allocation, we ensure your practice runs smoothly.',
      stats: {
        clients: '65+',
        avgSaving: '25%',
        successRate: '98%'
      },
      miniCaseStudy: {
        result: '25% profitability increase',
        client: 'Consulting Firm'
      },
      link: '/industries/professional-services'
    },
    {
      icon: Building2,
      title: 'Property & Real Estate',
      description: 'Expert guidance for property developers, landlords, and real estate investors.',
      keyChallenges: ['Capital allowances', 'Stamp duty planning', 'Rental income', 'Development finance'],
      howWeHelp: 'Maximise your property returns with specialist tax planning and investment structuring advice. We handle everything from buy-to-let portfolios to complex development projects.',
      stats: {
        clients: '45+',
        avgSaving: '£75K',
        successRate: '94%'
      },
      miniCaseStudy: {
        result: '£75K tax savings achieved',
        client: 'Property Developer'
      },
      link: '/industries/property-real-estate'
    },
    {
      icon: Heart,
      title: 'Healthcare & Medical',
      description: 'Dedicated accounting services for healthcare professionals and medical practices.',
      keyChallenges: ['NHS pension schemes', 'Medical indemnity', 'Practice partnerships', 'Clinical negligence'],
      howWeHelp: 'We understand medical practice finances, from GP partnerships to consultant tax planning. Our healthcare specialists navigate NHS pension complexities and help optimise your practice profitability.',
      stats: {
        clients: '40+',
        avgSaving: '£20K',
        successRate: '100%'
      },
      miniCaseStudy: {
        result: '£20K pension tax savings',
        client: 'GP Practice'
      },
      link: '/industries/healthcare-medical'
    },
    {
      icon: Hammer,
      title: 'Construction & Trades',
      description: 'Industry-specific accounting for contractors, builders, and construction businesses.',
      keyChallenges: ['CIS compliance', 'Project costing', 'Cash flow management', 'Contract accounting'],
      howWeHelp: 'Navigate CIS regulations and optimise your construction business finances with our expertise. We provide project costing systems, subcontractor management, and construction-specific tax planning.',
      stats: {
        clients: '70+',
        avgSaving: '100%',
        successRate: '100%'
      },
      miniCaseStudy: {
        result: '100% CIS compliance achieved',
        client: 'Construction Company'
      },
      link: '/industries/construction-trades'
    },
    {
      icon: Palette,
      title: 'Creative & Media',
      description: 'Tailored financial services for creative professionals and media businesses.',
      keyChallenges: ['Freelance income', 'Royalty accounting', 'IP management', 'Grant funding'],
      howWeHelp: 'Support creative businesses with tax planning for royalties, grants, and intellectual property. We understand the unique financial landscape of creatives, from freelancers to production companies.',
      stats: {
        clients: '55+',
        avgSaving: '£12K',
        successRate: '97%'
      },
      miniCaseStudy: {
        result: '£12K annual tax savings',
        client: 'Creative Agency'
      },
      link: '/industries/creative-media'
    },
    {
      icon: Truck,
      title: 'Transport & Logistics',
      description: 'Specialist accounting for haulage, delivery, and logistics companies.',
      keyChallenges: ['Fleet management', 'Fuel duty', 'Driver expenses', 'International trade'],
      howWeHelp: 'Expert guidance on transport industry tax reliefs and operational efficiency improvements. From fleet accounting to cross-border compliance, we keep your logistics business moving forward.',
      stats: {
        clients: '35+',
        avgSaving: '£30K',
        successRate: '95%'
      },
      miniCaseStudy: {
        result: '£30K fleet tax savings',
        client: 'Logistics Company'
      },
      link: '/industries/transport-logistics'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialised accounting expertise tailored to your industry's unique challenges and opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all group cursor-pointer overflow-hidden"
                onClick={() => {
                  navigate(industry.link);
                  window.scrollTo(0, 0);
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{industry.title}</h3>
                      <p className="text-muted-foreground">{industry.description}</p>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-accent/5 rounded-lg">
                      <Users className="h-5 w-5 text-accent mx-auto mb-1" />
                      <div className="text-lg font-bold text-foreground">{industry.stats.clients}</div>
                      <div className="text-xs text-muted-foreground">Clients</div>
                    </div>
                    <div className="text-center p-3 bg-accent/5 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-accent mx-auto mb-1" />
                      <div className="text-lg font-bold text-foreground">{industry.stats.avgSaving}</div>
                      <div className="text-xs text-muted-foreground">Avg Saving</div>
                    </div>
                    <div className="text-center p-3 bg-accent/5 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-accent mx-auto mb-1" />
                      <div className="text-lg font-bold text-foreground">{industry.stats.successRate}</div>
                      <div className="text-xs text-muted-foreground">Success</div>
                    </div>
                  </div>

                  {/* Mini Case Study */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-start">
                      <Badge variant="secondary" className="mr-2 mb-2">Success Story</Badge>
                    </div>
                    <p className="text-sm font-semibold text-foreground mb-1">{industry.miniCaseStudy.result}</p>
                    <p className="text-xs text-muted-foreground">{industry.miniCaseStudy.client}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Challenges We Address:</h4>
                    <ul className="space-y-2">
                      {industry.keyChallenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">How We Help:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{industry.howWeHelp}</p>
                  </div>

                  <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More About {industry.title}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
