import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter } from 'lucide-react';
import optmarkLogo from '@/assets/optmark-logo-footer.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const services = [{
    name: 'Self Assessment',
    href: '/services/tax-preparation-planning'
  }, {
    name: 'Corporation Tax',
    href: '/services/tax-preparation-planning'
  }, {
    name: 'VAT Returns',
    href: '/services/tax-preparation-planning'
  }, {
    name: 'Bookkeeping',
    href: '/services/bookkeeping-payroll'
  }, {
    name: 'Business Advisory',
    href: '/services/business-advisory'
  }, {
    name: 'Company Secretarial',
    href: '/services/company-secretarial'
  }, {
    name: 'Financial Planning',
    href: '/services/management-accounting'
  }];
  const quickLinks = [{
    name: 'About Us',
    href: '#about'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Team',
    href: '#team'
  }, {
    name: 'Contact',
    href: '#contact'
  }, {
    name: 'Industries',
    href: '/industries',
    isRoute: true
  }, {
    name: 'Book Consultation',
    href: '#booking'
  }];
  const handleNavLinkClick = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      navigate(href);
      window.scrollTo(0, 0);
    } else if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }
  };
  return <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img src={optmarkLogo} alt="Optmark Accountants" className="h-20 w-auto" />
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your trusted accounting partner in Hounslow and across London. Professional financial services for over 15 years.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service, index) => <li key={index}>
                  <button onClick={() => {
                navigate(service.href);
                window.scrollTo(0, 0);
              }} className="text-slate-300 hover:text-accent transition-colors text-left">
                    {service.name}
                  </button>
                </li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <button onClick={() => handleNavLinkClick(link.href, link.isRoute)} className="text-slate-300 hover:text-accent transition-colors text-left">
                    {link.name}
                  </button>
                </li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-accent" />
                <span className="text-slate-300">
                  Unit 5 Red Lion Court<br />
                  Alexandra Road<br />
                  Hounslow, Middlesex<br />
                  TW3 1JS
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-accent" />
                <a href="tel:02035816781" className="text-slate-300 hover:text-accent transition-colors">020 8696 7090</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-accent" />
                <a href="mailto:info@optmark.co.uk" className="text-slate-300 hover:text-accent transition-colors">
                  info@optmark.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-300 text-sm text-center md:text-left">
              © {currentYear} Optmark Accountants. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-6 text-sm">
              <button onClick={() => {
              navigate('/privacy-policy');
              window.scrollTo(0, 0);
            }} className="text-slate-300 hover:text-accent transition-colors px-2 py-1 min-h-[44px] flex items-center">
                Privacy Policy
              </button>
              <span className="hidden sm:flex items-center text-slate-600">|</span>
              <button onClick={() => {
              navigate('/terms-of-service');
              window.scrollTo(0, 0);
            }} className="text-slate-300 hover:text-accent transition-colors px-2 py-1 min-h-[44px] flex items-center">
                Terms of Service
              </button>
              <span className="hidden sm:flex items-center text-slate-600">|</span>
              <button onClick={() => {
              navigate('/cookie-policy');
              window.scrollTo(0, 0);
            }} className="text-slate-300 hover:text-accent transition-colors px-2 py-1 min-h-[44px] flex items-center">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;