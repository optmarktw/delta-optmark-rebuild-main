import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, ShoppingBag, Briefcase, Building2, Heart, Hammer, Palette, Truck, ArrowRight } from 'lucide-react';

const Industries = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    {
      icon: Monitor,
      title: 'Technology & Startups',
      description: 'Specialised support for tech companies, SaaS businesses, and high-growth startups.',
      keyChallenges: ['R&D tax credits', 'Share option schemes', 'International expansion', 'Investor reporting'],
      howWeHelp: 'We understand the unique challenges of tech businesses, from complex equity structures to R&D claims.',
      link: '/industries/technology-startups'
    },
    {
      icon: ShoppingBag,
      title: 'Retail & E-commerce',
      description: 'Comprehensive accounting for retail businesses, both online and brick-and-mortar.',
      keyChallenges: ['Inventory management', 'Multi-channel sales', 'VAT on digital services', 'Seasonal fluctuations'],
      howWeHelp: 'Our retail expertise covers everything from inventory accounting to online marketplace compliance.',
      link: '/industries/retail-ecommerce'
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Tailored solutions for consultancies, agencies, and professional practices.',
      keyChallenges: ['Project accounting', 'Time billing', 'Partnership structures', 'Professional indemnity'],
      howWeHelp: 'We help professional service firms optimise their financial processes and partnership structures.',
      link: '/industries/professional-services'
    },
    {
      icon: Building2,
      title: 'Property & Real Estate',
      description: 'Expert guidance for property developers, landlords, and real estate investors.',
      keyChallenges: ['Capital allowances', 'Stamp duty planning', 'Rental income', 'Development finance'],
      howWeHelp: 'Maximise your property returns with specialist tax planning and investment structuring advice.',
      link: '/industries/property-real-estate'
    },
    {
      icon: Heart,
      title: 'Healthcare & Medical',
      description: 'Dedicated accounting services for healthcare professionals and medical practices.',
      keyChallenges: ['NHS pension schemes', 'Medical indemnity', 'Practice partnerships', 'Clinical negligence'],
      howWeHelp: 'We understand medical practice finances, from GP partnerships to consultant tax planning.',
      link: '/industries/healthcare-medical'
    },
    {
      icon: Hammer,
      title: 'Construction & Trades',
      description: 'Industry-specific accounting for contractors, builders, and construction businesses.',
      keyChallenges: ['CIS compliance', 'Project costing', 'Cash flow management', 'Contract accounting'],
      howWeHelp: 'Navigate CIS regulations and optimise your construction business finances with our expertise.',
      link: '/industries/construction-trades'
    },
    {
      icon: Palette,
      title: 'Creative & Media',
      description: 'Tailored financial services for creative professionals and media businesses.',
      keyChallenges: ['Freelance income', 'Royalty accounting', 'IP management', 'Grant funding'],
      howWeHelp: 'Support creative businesses with tax planning for royalties, grants, and intellectual property.',
      link: '/industries/creative-media'
    },
    {
      icon: Truck,
      title: 'Transport & Logistics',
      description: 'Specialist accounting for haulage, delivery, and logistics companies.',
      keyChallenges: ['Fleet management', 'Fuel duty', 'Driver expenses', 'International trade'],
      howWeHelp: 'Expert guidance on transport industry tax reliefs and operational efficiency improvements.',
      link: '/industries/transport-logistics'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Specialised accounting expertise tailored to your industry's unique challenges and opportunities
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group cursor-pointer border border-border"
                onClick={() => {
                  navigate(industry.link);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{industry.title}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Challenges:</h4>
                  <ul className="space-y-2">
                    {industry.keyChallenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">How We Help:</h4>
                  <p className="text-sm text-muted-foreground">{industry.howWeHelp}</p>
                </div>

                <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Industries;
