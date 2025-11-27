import { Award, Shield, CheckCircle, Star } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Award,
      title: 'ACCA Certified',
      description: 'Chartered Certified Accountants'
    },
    {
      icon: Shield,
      title: 'ICAEW Member',
      description: 'Institute of Chartered Accountants'
    },
    {
      icon: CheckCircle,
      title: 'Xero Partner',
      description: 'Certified Cloud Accounting'
    },
    {
      icon: Star,
      title: 'QuickBooks ProAdvisor',
      description: 'Advanced Certification'
    }
  ];

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
        Trusted Professional Certifications
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-sm text-foreground mb-1">
                {badge.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {badge.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustBadges;
