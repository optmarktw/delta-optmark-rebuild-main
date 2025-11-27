import { TrendingUp, DollarSign, Clock, Users, Target, CheckCircle, Award, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface CaseStudy {
  id: string;
  featured: boolean;
  title: string;
  client: {
    name: string;
    industry: string;
    size: string;
    location: string;
  };
  challenge: {
    headline: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    approach: string;
    services: string[];
    timeline: string;
    team: string[];
  };
  results: {
    headline: string;
    metrics: {
      label: string;
      value: string;
      icon: LucideIcon;
    }[];
    testimonial: {
      quote: string;
      author: string;
      role: string;
    };
    additionalOutcomes: string[];
  };
  tags: string[];
  publishedDate: string;
  readTime: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'tech-startup-rd-tax',
    featured: true,
    title: 'Tech Startup Unlocks £50K in R&D Tax Credits',
    client: {
      name: 'A Leading London Tech Startup',
      industry: 'Technology & Startups',
      size: '25 employees',
      location: 'London, UK'
    },
    challenge: {
      headline: 'Missing Out on Significant R&D Tax Relief',
      description: 'The startup was developing innovative AI-powered solutions but was unaware they qualified for substantial R&D tax credits.',
      painPoints: [
        'No awareness of R&D tax credit eligibility',
        'Complex technical documentation requirements',
        'Limited cash flow for ongoing development',
        'Time-consuming claim process deterring attempts'
      ]
    },
    solution: {
      approach: 'We conducted a comprehensive technical review, identified qualifying activities, and prepared a detailed R&D claim with full technical documentation.',
      services: ['R&D Tax Credits', 'Tax Planning', 'Financial Advisory'],
      timeline: '6 weeks from initial consultation to claim submission',
      team: ['R&D Tax Specialist', 'Senior Accountant', 'Technical Writer']
    },
    results: {
      headline: 'Transformed Cash Flow and Accelerated Growth',
      metrics: [
        { label: 'Tax Savings', value: '£50,000', icon: DollarSign },
        { label: 'Claim Success Rate', value: '100%', icon: CheckCircle },
        { label: 'Reinvestment in R&D', value: '£45,000', icon: TrendingUp },
        { label: 'Time to Claim', value: '6 weeks', icon: Clock }
      ],
      testimonial: {
        quote: 'OptMark transformed our financial management. Their expertise in R&D tax credits saved us over £50,000 in the first year. The team truly understands the tech startup landscape.',
        author: 'Sarah Thompson',
        role: 'CEO, TechVision Solutions'
      },
      additionalOutcomes: [
        'Improved cash flow enabling hiring of 3 additional developers',
        'Established annual R&D claim process for ongoing benefits',
        'Better documentation of innovation activities',
        'Strategic tax planning reducing overall tax burden by 18%'
      ]
    },
    tags: ['Technology', 'R&D Tax Credits', 'Startups', 'Tax Planning'],
    publishedDate: '2024-09-15',
    readTime: '4 min'
  },
  {
    id: 'retail-multi-channel',
    featured: false,
    title: 'Retail Business Achieves 99% Accounting Accuracy',
    client: {
      name: 'A Growing E-commerce Boutique',
      industry: 'Retail & E-commerce',
      size: '8 employees',
      location: 'Manchester, UK'
    },
    challenge: {
      headline: 'Overwhelmed by Multi-Channel Sales Management',
      description: 'Managing inventory and accounting across physical store, website, Amazon, and eBay was creating chaos and errors.',
      painPoints: [
        'Manual reconciliation taking 15+ hours weekly',
        'Frequent inventory discrepancies',
        'VAT calculation errors across platforms',
        'Inability to track profitability by channel'
      ]
    },
    solution: {
      approach: 'Implemented integrated cloud accounting with automated multi-channel synchronization and real-time inventory tracking.',
      services: ['Bookkeeping', 'Cloud Accounting', 'VAT Returns', 'Management Reporting'],
      timeline: '4 weeks implementation with ongoing support',
      team: ['Cloud Accounting Specialist', 'Retail Accountant', 'Systems Integrator']
    },
    results: {
      headline: 'Streamlined Operations and Enhanced Profitability',
      metrics: [
        { label: 'Time Saved Weekly', value: '15 hours', icon: Clock },
        { label: 'Accounting Accuracy', value: '99%', icon: Target },
        { label: 'Inventory Accuracy', value: '98%', icon: CheckCircle },
        { label: 'Profitability Insight', value: 'Real-time', icon: TrendingUp }
      ],
      testimonial: {
        quote: 'Managing multi-channel sales was overwhelming until OptMark stepped in. They set up systems that work seamlessly across our store and online platforms. Game changer!',
        author: 'Emma Williams',
        role: 'Owner, Blossoms Boutique'
      },
      additionalOutcomes: [
        'Owner freed to focus on business growth instead of admin',
        'Identified most profitable sales channels',
        'Reduced VAT errors saving £3,000 in penalties',
        'Monthly management reports driving strategic decisions'
      ]
    },
    tags: ['Retail', 'E-commerce', 'Bookkeeping', 'Cloud Accounting'],
    publishedDate: '2024-08-22',
    readTime: '3 min'
  },
  {
    id: 'professional-services-profit',
    featured: true,
    title: 'Consulting Firm Increases Profitability by 25%',
    client: {
      name: 'A Mid-Size Consulting Partnership',
      industry: 'Professional Services',
      size: '40 employees',
      location: 'Birmingham, UK'
    },
    challenge: {
      headline: 'Unclear Project Profitability and Partner Allocation',
      description: 'The firm struggled to understand which projects were profitable and how to fairly allocate profits among partners.',
      painPoints: [
        'No visibility into project-level profitability',
        'Partner disputes over profit sharing',
        'Inefficient resource allocation',
        'Poor pricing decisions due to lack of data'
      ]
    },
    solution: {
      approach: 'Implemented sophisticated project accounting system with time tracking integration and developed transparent partner profit allocation model.',
      services: ['Management Accounting', 'Partnership Accounting', 'Business Advisory', 'Financial Systems'],
      timeline: '8 weeks setup with 3 months transition support',
      team: ['Management Accountant', 'Partnership Specialist', 'Business Advisor', 'Systems Consultant']
    },
    results: {
      headline: 'Dramatic Profitability Improvement and Partner Harmony',
      metrics: [
        { label: 'Profitability Increase', value: '25%', icon: TrendingUp },
        { label: 'Project Visibility', value: '100%', icon: Target },
        { label: 'Partner Satisfaction', value: '95%', icon: Users },
        { label: 'Pricing Accuracy', value: '+30%', icon: Award }
      ],
      testimonial: {
        quote: 'The partnership structure advice and project accounting systems OptMark implemented improved our profitability by 25%. They truly understand professional service firms.',
        author: 'David Patterson',
        role: 'Managing Partner, Patterson Consulting'
      },
      additionalOutcomes: [
        'Eliminated partner disputes through transparent profit allocation',
        'Identified and discontinued unprofitable service lines',
        'Improved project pricing based on actual cost data',
        'Better resource utilization across the firm'
      ]
    },
    tags: ['Professional Services', 'Management Accounting', 'Partnerships', 'Profitability'],
    publishedDate: '2024-07-10',
    readTime: '5 min'
  },
  {
    id: 'property-tax-planning',
    featured: false,
    title: 'Property Developer Saves £75K Through Strategic Tax Planning',
    client: {
      name: 'A Residential Property Developer',
      industry: 'Property & Real Estate',
      size: '12 employees',
      location: 'Leeds, UK'
    },
    challenge: {
      headline: 'High Tax Liability Eroding Development Returns',
      description: 'Significant tax burden on property developments was reducing returns and limiting ability to scale operations.',
      painPoints: [
        'No capital allowances claim strategy',
        'Inefficient company structure',
        'High stamp duty costs on acquisitions',
        'Poor cash flow due to tax timing'
      ]
    },
    solution: {
      approach: 'Comprehensive tax review identifying capital allowances opportunities, restructured holdings for tax efficiency, and implemented strategic SDLT planning.',
      services: ['Tax Planning', 'Capital Allowances', 'Company Secretarial', 'Cash Flow Management'],
      timeline: '12 weeks for full implementation',
      team: ['Property Tax Specialist', 'Capital Allowances Expert', 'Corporate Advisor']
    },
    results: {
      headline: 'Substantial Tax Savings and Improved Cash Flow',
      metrics: [
        { label: 'Tax Savings', value: '£75,000', icon: DollarSign },
        { label: 'Capital Allowances', value: '£120K', icon: TrendingUp },
        { label: 'Cash Flow Improvement', value: '40%', icon: Zap },
        { label: 'ROI on Advice', value: '12:1', icon: Award }
      ],
      testimonial: {
        quote: 'The capital allowances planning and stamp duty advice we received was exceptional. OptMark helped us structure our property portfolio tax-efficiently, resulting in significant savings.',
        author: 'Michael Chen',
        role: 'Founder, Chen Properties Ltd'
      },
      additionalOutcomes: [
        'Restructured holdings to optimize tax efficiency',
        'Established ongoing capital allowances claiming process',
        'Improved development ROI through better tax planning',
        'Enhanced cash flow enabling faster scaling'
      ]
    },
    tags: ['Property', 'Tax Planning', 'Capital Allowances', 'Development'],
    publishedDate: '2024-06-18',
    readTime: '4 min'
  },
  {
    id: 'healthcare-pension',
    featured: false,
    title: 'Medical Practice Optimizes NHS Pension and Saves £20K',
    client: {
      name: 'A GP Partnership Practice',
      industry: 'Healthcare & Medical',
      size: '5 GP partners',
      location: 'Bristol, UK'
    },
    challenge: {
      headline: 'Complex NHS Pension and Partnership Tax Issues',
      description: 'GP partners struggled with NHS pension annual allowance charges and partnership tax planning complexities.',
      painPoints: [
        'Unexpected NHS pension tax charges',
        'Complex partnership profit allocation',
        'Lack of retirement planning clarity',
        'Time-consuming tax compliance'
      ]
    },
    solution: {
      approach: 'Specialized medical practice accounting with NHS pension optimization, partnership tax planning, and proactive annual allowance management.',
      services: ['Medical Practice Accounting', 'Pension Planning', 'Partnership Tax', 'Tax Planning'],
      timeline: 'Ongoing annual engagement with quarterly reviews',
      team: ['Medical Practice Specialist', 'Pension Advisor', 'Partnership Accountant']
    },
    results: {
      headline: 'Optimized Pensions and Tax Savings with Peace of Mind',
      metrics: [
        { label: 'Annual Tax Savings', value: '£20,000', icon: DollarSign },
        { label: 'Pension Optimization', value: '100%', icon: Target },
        { label: 'Partner Satisfaction', value: '100%', icon: Users },
        { label: 'Admin Time Saved', value: '20 hrs/yr', icon: Clock }
      ],
      testimonial: {
        quote: 'As a busy GP, I needed accountants who understood NHS pension schemes and medical practice finances. OptMark delivers proactive advice and handles everything seamlessly.',
        author: 'Dr. Amelia Roberts',
        role: 'GP Partner'
      },
      additionalOutcomes: [
        'Proactive annual allowance charge management',
        'Clear retirement planning roadmap for each partner',
        'Optimized partnership profit allocation',
        'Reduced administrative burden on practice'
      ]
    },
    tags: ['Healthcare', 'NHS', 'Pensions', 'Partnerships'],
    publishedDate: '2024-05-25',
    readTime: '3 min'
  },
  {
    id: 'construction-cis',
    featured: false,
    title: 'Construction Firm Achieves 100% CIS Compliance',
    client: {
      name: 'A Building Contractor',
      industry: 'Construction & Trades',
      size: '35 employees',
      location: 'Glasgow, UK'
    },
    challenge: {
      headline: 'CIS Compliance Issues and Cash Flow Pressures',
      description: 'The contractor faced CIS verification problems, late payment penalties, and unpredictable cash flow affecting operations.',
      painPoints: [
        'CIS verification and reporting errors',
        'HMRC penalties for late submissions',
        'Poor cash flow forecasting',
        'Subcontractor payment management issues'
      ]
    },
    solution: {
      approach: 'Implemented automated CIS compliance system, developed 13-week cash flow forecasting model, and established rigorous payment processes.',
      services: ['CIS Compliance', 'Bookkeeping', 'Cash Flow Management', 'Payroll'],
      timeline: '6 weeks implementation with ongoing monthly support',
      team: ['Construction Accountant', 'CIS Specialist', 'Cash Flow Advisor']
    },
    results: {
      headline: 'Perfect Compliance and Predictable Cash Flow',
      metrics: [
        { label: 'CIS Compliance', value: '100%', icon: CheckCircle },
        { label: 'Penalty Savings', value: '£12,000', icon: DollarSign },
        { label: 'Cash Flow Visibility', value: '13 weeks', icon: TrendingUp },
        { label: 'Admin Time Saved', value: '10 hrs/wk', icon: Clock }
      ],
      testimonial: {
        quote: 'OptMark keeps us fully CIS compliant and provides invaluable cash flow forecasting. Their construction industry expertise gives us peace of mind to focus on building.',
        author: 'James Morrison',
        role: 'Director, BuildRight Construction'
      },
      additionalOutcomes: [
        'Eliminated HMRC penalties through automated compliance',
        'Improved relationships with subcontractors through timely payments',
        'Better project bidding based on accurate cash flow forecasts',
        'Freed management to focus on growing the business'
      ]
    },
    tags: ['Construction', 'CIS Compliance', 'Cash Flow', 'Bookkeeping'],
    publishedDate: '2024-04-30',
    readTime: '3 min'
  },
  {
    id: 'creative-agency-structure',
    featured: false,
    title: 'Creative Agency Saves £12K Annually Through Better Structure',
    client: {
      name: 'A Digital Creative Agency',
      industry: 'Creative & Media',
      size: '15 employees',
      location: 'London, UK'
    },
    challenge: {
      headline: 'Scaling from Freelance to Professional Agency',
      description: 'Growing agency needed to transition from freelance structure to limited company while optimizing tax efficiency.',
      painPoints: [
        'High personal tax burden as freelancer',
        'No clear business structure for growth',
        'IR35 concerns with contractor status',
        'Missing VAT and expenses optimization'
      ]
    },
    solution: {
      approach: 'Guided company formation, implemented tax-efficient director remuneration strategy, established professional accounting systems.',
      services: ['Company Formation', 'Tax Planning', 'Business Structure', 'Accounting Systems'],
      timeline: '4 weeks from formation to full operation',
      team: ['Business Advisor', 'Tax Planner', 'Company Secretary']
    },
    results: {
      headline: 'Professional Structure Enabling Growth and Tax Savings',
      metrics: [
        { label: 'Annual Tax Savings', value: '£12,000', icon: DollarSign },
        { label: 'IR35 Risk', value: 'Eliminated', icon: CheckCircle },
        { label: 'Growth Enabled', value: '3x', icon: TrendingUp },
        { label: 'Professional Setup', value: '4 weeks', icon: Clock }
      ],
      testimonial: {
        quote: 'OptMark made our transition from freelance to limited company seamless. The tax savings and professional structure have been transformative for our growth.',
        author: 'Alex Rodriguez',
        role: 'Founder, Rodriguez Creative'
      },
      additionalOutcomes: [
        'Tax-efficient profit extraction through dividends',
        'Professional business structure attracting larger clients',
        'Clear path for hiring employees and scaling',
        'Better separation of personal and business finances'
      ]
    },
    tags: ['Creative', 'Company Formation', 'Tax Planning', 'Business Growth'],
    publishedDate: '2024-03-15',
    readTime: '3 min'
  },
  {
    id: 'logistics-fleet',
    featured: false,
    title: 'Logistics Company Claims £30K in Fleet Capital Allowances',
    client: {
      name: 'A Regional Logistics Provider',
      industry: 'Transport & Logistics',
      size: '50 employees',
      location: 'Birmingham, UK'
    },
    challenge: {
      headline: 'Inefficient Fleet Accounting and Missed Tax Reliefs',
      description: 'Large fleet investment not being optimally managed from accounting and tax perspective, missing valuable capital allowances.',
      painPoints: [
        'No capital allowances claims on fleet',
        'Poor visibility of vehicle profitability',
        'Inefficient fleet replacement strategy',
        'Complex VAT on vehicle purchases'
      ]
    },
    solution: {
      approach: 'Comprehensive fleet accounting review, capital allowances claims on historical purchases, developed fleet replacement and tax planning model.',
      services: ['Fleet Accounting', 'Capital Allowances', 'Tax Planning', 'Management Accounting'],
      timeline: '8 weeks for initial claims and system setup',
      team: ['Transport Specialist', 'Capital Allowances Expert', 'Management Accountant']
    },
    results: {
      headline: 'Substantial Tax Relief and Better Fleet Management',
      metrics: [
        { label: 'Capital Allowances', value: '£30,000', icon: DollarSign },
        { label: 'Fleet ROI', value: '+18%', icon: TrendingUp },
        { label: 'Cost per Mile', value: '-12%', icon: Target },
        { label: 'Replacement Plan', value: 'Optimized', icon: CheckCircle }
      ],
      testimonial: {
        quote: 'OptMark identified £30K in capital allowances we were missing and helped us optimize our entire fleet management approach. The ROI has been outstanding.',
        author: 'Karen Foster',
        role: 'Operations Director, Foster Logistics'
      },
      additionalOutcomes: [
        'Ongoing capital allowances strategy for fleet renewals',
        'Data-driven fleet replacement decisions',
        'Better understanding of vehicle profitability',
        'Optimized VAT recovery on vehicle purchases'
      ]
    },
    tags: ['Logistics', 'Fleet', 'Capital Allowances', 'Management Accounting'],
    publishedDate: '2024-02-20',
    readTime: '4 min'
  }
];
