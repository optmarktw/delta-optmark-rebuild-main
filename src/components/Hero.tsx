import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import taxPlanningImg from '@/assets/services/tax-planning.jpg';
import bookkeepingImg from '@/assets/services/bookkeeping.jpg';
import businessAdvisoryImg from '@/assets/services/business-advisory.jpg';
import companySecretarialImg from '@/assets/services/company-secretarial.jpg';
import managementAccountingImg from '@/assets/services/management-accounting.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  
  const handleGetStarted = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookConsultation = () => {
    navigate('/book-consultation');
  };

  const services = [
    {
      title: 'Tax Preparation & Planning',
      description: 'Comprehensive tax services including preparation, planning, and compliance for individuals and businesses.',
      image: taxPlanningImg,
      link: '/services/tax-preparation-planning'
    },
    {
      title: 'Bookkeeping & Payroll',
      description: 'Complete bookkeeping and payroll management services to keep your finances organized and compliant.',
      image: bookkeepingImg,
      link: '/services/bookkeeping-payroll'
    },
    {
      title: 'Business Advisory',
      description: 'Expert guidance on business strategy, growth planning, and financial optimization for sustainable success.',
      image: businessAdvisoryImg,
      link: '/services/business-advisory'
    },
    {
      title: 'Company Secretarial',
      description: 'Professional company secretarial services to ensure your corporate compliance and governance requirements.',
      image: companySecretarialImg,
      link: '/services/company-secretarial'
    },
    {
      title: 'Management Accounting',
      description: 'Strategic financial analysis and reporting to support informed business decisions and drive performance.',
      image: managementAccountingImg,
      link: '/services/management-accounting'
    }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Accounting
              <span className="block text-accent">Solutions</span>
              for Your Business
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Maximise your financial potential with our comprehensive accounting services.
              From tax planning to business advisory, we're your trusted financial partners in Hounslow and across London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleGetStarted}
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-all font-semibold flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleBookConsultation}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-semibold border border-white/20"
              >
                Book Free Consultation
              </button>
            </div>
          </div>

          <div className="relative">
            <Carousel 
              className="w-full" 
              opts={{ loop: true }} 
              plugins={[
                Autoplay({
                  delay: 5000,
                })
              ]}
              setApi={setApi}
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index}>
                    <div 
                      className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden cursor-pointer hover:bg-white/15 transition-all group"
                      onClick={() => {
                        navigate(service.link);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                        <p className="text-slate-300 mb-4">{service.description}</p>
                        <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-2 sm:left-4 bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30 h-8 w-8 sm:h-10 sm:w-10" />
              <CarouselNext className="-right-2 sm:right-4 bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30 h-8 w-8 sm:h-10 sm:w-10" />
            </Carousel>
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    current === index 
                      ? 'w-8 bg-accent' 
                      : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
