import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const FAQ = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = {
    'All': [
      {
        question: "What accounting services do you offer?",
        answer: "We offer comprehensive accounting services including bookkeeping, tax preparation and planning, payroll management, management accounting, business advisory, audit and assurance, company secretarial services, and cloud accounting solutions. Our services are tailored to meet the specific needs of businesses across various industries."
      },
      {
        question: "How much do your services cost?",
        answer: "Our pricing varies based on the complexity of your needs, business size, and industry. We offer transparent fixed monthly fees for most services, starting from £150/month for basic bookkeeping. We provide customized quotes after a free initial consultation where we assess your requirements. No hidden fees, ever."
      },
      {
        question: "Which industries do you specialize in?",
        answer: "We specialize in 8 key industries: Technology & Startups, Property & Real Estate, Healthcare & Medical, Construction & Trades, Retail & E-commerce, Professional Services, Creative & Media, and Transport & Logistics. Our team has deep expertise in the unique challenges and opportunities each industry presents."
      },
      {
        question: "Do you work with startups and small businesses?",
        answer: "Absolutely! We work with businesses of all sizes, from solo entrepreneurs and startups to established SMEs. We understand the unique challenges of growing businesses and offer scalable solutions that grow with you. Many of our clients started as freelancers or small startups."
      },
      {
        question: "What cloud accounting software do you use?",
        answer: "We're certified partners with Xero and QuickBooks, the leading cloud accounting platforms. We also work with Sage, FreeAgent, and other solutions depending on your specific needs. We'll recommend the best platform for your business and help with implementation and training."
      },
      {
        question: "How quickly can you onboard my business?",
        answer: "Most businesses are fully onboarded within 2-4 weeks. This includes initial consultation, system setup, data migration, and training. For urgent situations, we can expedite the process. We'll provide a clear onboarding timeline during your initial consultation."
      },
      {
        question: "Do you offer R&D tax credit services?",
        answer: "Yes! R&D tax credits are one of our specialties, particularly for technology and innovation-driven businesses. We help identify qualifying activities, prepare detailed technical documentation, and submit claims. Our clients have successfully claimed millions in R&D tax relief."
      },
      {
        question: "Can you help with Making Tax Digital (MTD) compliance?",
        answer: "Absolutely. We're MTD experts and help businesses comply with HMRC's digital requirements. We'll set up MTD-compatible software, ensure proper record-keeping, and handle all digital submissions. If you're not yet MTD-ready, we'll guide you through the transition."
      },
      {
        question: "What makes OptMark different from other accountants?",
        answer: "We combine industry specialization, proactive advisory, modern cloud technology, and transparent pricing. We're not just number-crunchers—we're strategic partners who help you grow. Our clients appreciate our responsiveness, expertise, and the tangible results we deliver."
      },
      {
        question: "Do you handle personal tax returns as well as business taxes?",
        answer: "Yes, we handle both personal and business tax matters. For business owners and directors, we provide integrated tax planning that optimizes both personal and corporate tax positions. We also assist with self-assessment, capital gains tax, inheritance tax planning, and more."
      },
      {
        question: "How do you communicate with clients?",
        answer: "We're flexible! We communicate via email, phone, video calls, or in-person meetings—whatever works best for you. Most clients prefer a mix of methods. We provide regular updates, and you'll have direct access to your dedicated accountant. We typically respond within 24 hours during business days."
      },
      {
        question: "What happens during the free consultation?",
        answer: "During your free 30-minute consultation, we'll discuss your business, current accounting setup, challenges, and goals. We'll explain how we can help, recommend services, and provide a clear quote. There's no obligation—it's simply an opportunity for us to understand your needs and for you to get to know us."
      }
    ],
    'Services': [
      {
        question: "What accounting services do you offer?",
        answer: "We offer comprehensive accounting services including bookkeeping, tax preparation and planning, payroll management, management accounting, business advisory, audit and assurance, company secretarial services, and cloud accounting solutions. Our services are tailored to meet the specific needs of businesses across various industries."
      },
      {
        question: "Do you offer R&D tax credit services?",
        answer: "Yes! R&D tax credits are one of our specialties, particularly for technology and innovation-driven businesses. We help identify qualifying activities, prepare detailed technical documentation, and submit claims. Our clients have successfully claimed millions in R&D tax relief."
      },
      {
        question: "Can you help with Making Tax Digital (MTD) compliance?",
        answer: "Absolutely. We're MTD experts and help businesses comply with HMRC's digital requirements. We'll set up MTD-compatible software, ensure proper record-keeping, and handle all digital submissions. If you're not yet MTD-ready, we'll guide you through the transition."
      },
      {
        question: "Do you handle personal tax returns as well as business taxes?",
        answer: "Yes, we handle both personal and business tax matters. For business owners and directors, we provide integrated tax planning that optimizes both personal and corporate tax positions. We also assist with self-assessment, capital gains tax, inheritance tax planning, and more."
      }
    ],
    'Pricing': [
      {
        question: "How much do your services cost?",
        answer: "Our pricing varies based on the complexity of your needs, business size, and industry. We offer transparent fixed monthly fees for most services, starting from £150/month for basic bookkeeping. We provide customized quotes after a free initial consultation where we assess your requirements. No hidden fees, ever."
      },
      {
        question: "What happens during the free consultation?",
        answer: "During your free 30-minute consultation, we'll discuss your business, current accounting setup, challenges, and goals. We'll explain how we can help, recommend services, and provide a clear quote. There's no obligation—it's simply an opportunity for us to understand your needs and for you to get to know us."
      }
    ],
    'Industries': [
      {
        question: "Which industries do you specialize in?",
        answer: "We specialize in 8 key industries: Technology & Startups, Property & Real Estate, Healthcare & Medical, Construction & Trades, Retail & E-commerce, Professional Services, Creative & Media, and Transport & Logistics. Our team has deep expertise in the unique challenges and opportunities each industry presents."
      },
      {
        question: "Do you work with startups and small businesses?",
        answer: "Absolutely! We work with businesses of all sizes, from solo entrepreneurs and startups to established SMEs. We understand the unique challenges of growing businesses and offer scalable solutions that grow with you. Many of our clients started as freelancers or small startups."
      }
    ],
    'Technology': [
      {
        question: "What cloud accounting software do you use?",
        answer: "We're certified partners with Xero and QuickBooks, the leading cloud accounting platforms. We also work with Sage, FreeAgent, and other solutions depending on your specific needs. We'll recommend the best platform for your business and help with implementation and training."
      },
      {
        question: "How quickly can you onboard my business?",
        answer: "Most businesses are fully onboarded within 2-4 weeks. This includes initial consultation, system setup, data migration, and training. For urgent situations, we can expedite the process. We'll provide a clear onboarding timeline during your initial consultation."
      }
    ],
    'About Us': [
      {
        question: "What makes OptMark different from other accountants?",
        answer: "We combine industry specialization, proactive advisory, modern cloud technology, and transparent pricing. We're not just number-crunchers—we're strategic partners who help you grow. Our clients appreciate our responsiveness, expertise, and the tangible results we deliver."
      },
      {
        question: "How do you communicate with clients?",
        answer: "We're flexible! We communicate via email, phone, video calls, or in-person meetings—whatever works best for you. Most clients prefer a mix of methods. We provide regular updates, and you'll have direct access to your dedicated accountant. We typically respond within 24 hours during business days."
      }
    ]
  };

  const allFaqs = faqCategories['All'];

  // Filter FAQs based on search term
  const filterFaqs = (faqs: typeof allFaqs) => {
    if (!searchTerm) return faqs;
    return faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to common questions about our services, pricing, and how we work
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-8 h-auto gap-1">
              <TabsTrigger value="All" className="text-xs sm:text-sm py-2">All</TabsTrigger>
              <TabsTrigger value="Services" className="text-xs sm:text-sm py-2">Services</TabsTrigger>
              <TabsTrigger value="Pricing" className="text-xs sm:text-sm py-2">Pricing</TabsTrigger>
              <TabsTrigger value="Industries" className="text-xs sm:text-sm py-2">Industries</TabsTrigger>
              <TabsTrigger value="Technology" className="text-xs sm:text-sm py-2">Technology</TabsTrigger>
              <TabsTrigger value="About Us" className="text-xs sm:text-sm py-2">About</TabsTrigger>
            </TabsList>

            {Object.entries(faqCategories).map(([category, faqs]) => (
              <TabsContent key={category} value={category}>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {filterFaqs(faqs).map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category}-item-${index}`}
                      className="border border-border rounded-lg px-6 bg-card hover:border-accent/50 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                {filterFaqs(faqs).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No FAQs found matching "{searchTerm}"</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            We're here to help. Book a free consultation to discuss your specific needs and how we can support your business.
          </p>
          <Button 
            size="lg" 
            onClick={() => {
              navigate('/book-consultation');
              window.scrollTo(0, 0);
            }}
            className="bg-accent hover:bg-accent/90"
          >
            Book Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
