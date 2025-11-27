import { Calendar, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookingSection = () => {
  const navigate = useNavigate();
  
  const handleBooking = () => {
    navigate('/book-consultation');
    window.scrollTo(0, 0);
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Book a free consultation with our expert team and discover how we can help your business thrive
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center">
            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Schedule a Meeting</h3>
            <p className="text-slate-300">Pick a time that works for you</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center">
            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Speak to an Expert</h3>
            <p className="text-slate-300">Call us at 020 3576 0000</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center">
            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Send an Inquiry</h3>
            <p className="text-slate-300">We'll respond within 24 hours</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleBooking}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg"
          >
            Book Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
