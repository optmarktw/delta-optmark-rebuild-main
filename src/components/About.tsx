import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const handleLearnMore = () => {
    const element = document.querySelector('#team');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of professional excellence in all our services.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, transparency, and mutual success.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Count on us for timely, accurate, and consistent service delivery every time.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'We focus on delivering measurable results that drive your business forward.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Optmark Accountants
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, Optmark Accountants has been the trusted financial partner
              for businesses and individuals across Hounslow, London, and the wider UK. Our team of qualified professionals
              combines deep technical expertise with a personal, client-focused approach.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We don't just prepare your accounts – we help you understand your numbers, plan for growth,
              and navigate complex financial decisions with confidence. From startups to established enterprises,
              we provide the strategic guidance and hands-on support you need to succeed.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence, combined with our investment in the latest accounting technology,
              ensures you receive accurate, timely, and insightful financial services that add real value to your business.
            </p>
            <button
              onClick={handleLearnMore}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              Meet Our Team
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
