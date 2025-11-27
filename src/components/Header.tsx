import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import optmarkLogo from '@/assets/optmark-logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Industries',
    href: '/industries',
    isRoute: true
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Team',
    href: '#team'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const handleNavLinkClick = (href: string, isRoute?: boolean) => {
    setIsMenuOpen(false);
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
  const handleBookConsultation = () => {
    setIsMenuOpen(false);
    navigate('/book-consultation');
    window.scrollTo(0, 0);
  };
  return <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:02035760000" className="flex items-center hover:text-accent transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                <span>020 8696 7090</span>
              </a>
              <a href="mailto:info@optmarkaccountants.co.uk" className="hidden sm:flex items-center hover:text-accent transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@optmark.co.uk</span>
              </a>
            </div>
            <div className="text-xs hidden md:block">Mon - Fri: 9:30 AM - 5:30 PM</div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <button onClick={() => {
          navigate('/');
          window.scrollTo(0, 0);
        }} className="flex items-center space-x-3 cursor-pointer">
            <img src={optmarkLogo} alt="Optmark Accountants" className="h-24 w-auto" />
            
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.name} onClick={() => handleNavLinkClick(item.href, item.isRoute)} className="text-foreground hover:text-accent font-medium transition-colors">
                {item.name}
              </button>)}
            <button onClick={handleBookConsultation} className="bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors font-medium">
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <button key={item.name} onClick={() => handleNavLinkClick(item.href, item.isRoute)} className="text-foreground hover:text-accent font-medium transition-colors text-left px-4 py-2">
                  {item.name}
                </button>)}
              <button onClick={handleBookConsultation} className="bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors font-medium mx-4">
                Book Consultation
              </button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;