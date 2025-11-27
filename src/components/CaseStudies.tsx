import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building, Users, MapPin, Filter } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  
  const industries = ['All', ...new Set(caseStudies.map(cs => cs.client.industry))];
  
  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.client.industry === selectedIndustry);
  
  const featuredCase = caseStudies.find(cs => cs.featured);

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses. See how we've helped clients save money, improve efficiency, and achieve their goals.
          </p>
        </div>

        {/* Featured Case Study */}
        {featuredCase && (
          <Card className="mb-12 overflow-hidden border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-8">
              <Badge className="mb-4 bg-accent text-accent-foreground">Featured Success Story</Badge>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {featuredCase.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  {featuredCase.client.industry}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {featuredCase.client.size}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {featuredCase.client.location}
                </div>
              </div>
            </div>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mr-3 text-sm font-bold">1</span>
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground mb-3">{featuredCase.challenge.description}</p>
                  <ul className="space-y-2">
                    {featuredCase.challenge.painPoints.slice(0, 3).map((point, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-destructive mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center mr-3 text-sm font-bold">2</span>
                    The Solution
                  </h4>
                  <p className="text-muted-foreground mb-3">{featuredCase.solution.approach}</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredCase.solution.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Metrics */}
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center mr-3 text-sm font-bold">3</span>
                  The Results
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {featuredCase.results.metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div key={idx} className="text-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 mb-2">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 border-l-4 border-accent">
                <p className="text-muted-foreground italic mb-3">"{featuredCase.results.testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground text-sm">{featuredCase.results.testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{featuredCase.results.testimonial.role}</p>
                  </div>
                  <Button onClick={() => navigate('/book-consultation')} className="bg-accent hover:bg-accent/90">
                    Get Similar Results
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filter */}
        <div className="mb-8 flex items-center justify-center gap-2 flex-wrap">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Filter by industry:</span>
          {industries.map((industry) => (
            <Button
              key={industry}
              variant={selectedIndustry === industry ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedIndustry(industry)}
              className="text-xs"
            >
              {industry}
            </Button>
          ))}
        </div>

        {/* Other Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies
            .filter(cs => !cs.featured)
            .map((caseStudy) => (
              <Card key={caseStudy.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="text-xs">
                      {caseStudy.client.industry}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{caseStudy.readTime} read</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {caseStudy.challenge.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {caseStudy.results.metrics.slice(0, 2).map((metric, idx) => {
                      const Icon = metric.icon;
                      return (
                        <div key={idx} className="bg-muted/30 rounded p-3">
                          <Icon className="h-4 w-4 text-accent mb-1" />
                          <div className="text-lg font-bold text-foreground">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {caseStudy.solution.services.slice(0, 2).map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full group">
                      Read Full Story
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their finances and achieved remarkable results with OptMark.
          </p>
          <Button onClick={() => navigate('/book-consultation')} size="lg" className="bg-accent hover:bg-accent/90">
            Book Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
