import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Building, FileText, Shield, Users, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const CompanySecretarial = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Building,
      title: 'Company Formation',
      description: 'Register your new company quickly and efficiently with Companies House.',
      details: ['Company name registration', 'Articles of Association', 'Share capital structure', 'First directors and shareholders', 'Registered office service']
    },
    {
      icon: FileText,
      title: 'Annual Returns & Filings',
      description: 'Ensure timely submission of all statutory filings to maintain compliance.',
      details: ['Confirmation statements (CS01)', 'Annual accounts filing', 'Change notifications', 'PSC register updates', 'Deadline management']
    },
    {
      icon: Shield,
      title: 'Corporate Governance',
      description: 'Maintain proper corporate records and governance standards.',
      details: ['Statutory books maintenance', 'Board meeting minutes', 'Shareholder resolutions', 'Register of charges', 'Compliance audits']
    },
    {
      icon: Users,
      title: 'Share Management',
      description: 'Manage share capital, transfers, and shareholder administration efficiently.',
      details: ['Share allotments and transfers', 'Share certificates', 'Shareholder agreements', 'Dividend administration', 'Rights issue management']
    },
    {
      icon: Calendar,
      title: 'Registered Office',
      description: 'Professional registered office address and mail handling service.',
      details: ['London business address', 'Mail forwarding service', 'Companies House correspondence', 'HMRC notifications', 'Professional image']
    }
  ];

  const compliance = [
    { deadline: 'Annual Confirmation Statement', period: 'Within 14 days of anniversary', consequence: 'Late filing penalties up to £5,000' },
    { deadline: 'Annual Accounts Filing', period: '9 months after year-end (private)', consequence: 'Automatic penalties from £150' },
    { deadline: 'Director/Secretary Changes', period: 'Within 14 days of change', consequence: 'Late filing penalties up to £5,000' },
    { deadline: 'PSC Register Updates', period: 'Within 14 days of change', consequence: 'Company and officers liable to penalties' },
    { deadline: 'Change of Registered Office', period: 'Within 14 days of change', consequence: 'Missed correspondence and penalties' }
  ];

  const process = [
    { step: 1, title: 'Setup', description: 'Initial company formation or onboarding of existing company' },
    { step: 2, title: 'Monitor', description: 'Track upcoming deadlines and statutory requirements' },
    { step: 3, title: 'File', description: 'Prepare and submit all necessary filings on time' },
    { step: 4, title: 'Advise', description: 'Provide guidance on corporate governance matters' },
    { step: 5, title: 'Update', description: 'Maintain accurate statutory records and registers' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-blue-900 to-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Company Secretarial Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Professional company secretarial support to ensure full compliance with Companies House and UK corporate law
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Stay Compliant, Stay Focused</h2>
            <p className="text-muted-foreground mb-4">
              Managing your company's statutory obligations can be complex and time-consuming. Our company secretarial services take care of all your compliance requirements, from formation to ongoing administration, allowing you to focus on running your business.
            </p>
            <p className="text-muted-foreground mb-4">
              We ensure your company meets all its legal obligations with Companies House, maintains accurate statutory records, and files all returns on time. With automatic deadline tracking and expert guidance, you'll never miss a critical filing date or risk penalties.
            </p>
            <p className="text-muted-foreground">
              Whether you're forming a new company, managing an existing business, or dealing with complex corporate changes, our experienced team provides reliable, efficient support tailored to your needs.
            </p>
          </div>
          <div className="bg-accent/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Why It Matters</h3>
            <ul className="space-y-3">
              {[
                'Avoid costly penalties and prosecution',
                'Maintain your good standing with Companies House',
                'Protect directors from personal liability',
                'Ensure proper corporate governance',
                'Maintain accurate ownership records',
                'Professional registered office address'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services Grid */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Secretarial Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Compliance Calendar */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Key Compliance Deadlines</h2>
        <div className="bg-muted p-8 rounded-xl mb-16">
          <div className="space-y-4">
            {compliance.map((item, idx) => (
              <div key={idx} className="bg-background p-6 rounded-lg border border-border">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.deadline}</h4>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="inline-block bg-destructive/10 text-destructive px-3 py-1 rounded text-sm font-medium">
                      {item.consequence}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 text-center">
            We monitor all your deadlines and ensure timely filing to avoid penalties
          </p>
        </div>

        {/* Process Timeline */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">How We Support You</h2>
        <div className="grid md:grid-cols-5 gap-4 mb-16">
          {process.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">{item.step}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mb-16">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do I need to appoint a company secretary?</AccordionTrigger>
            <AccordionContent>
              Since the Companies Act 2006, private limited companies are no longer required to appoint a company secretary. However, someone must still carry out the secretarial duties. Many companies choose to outsource these responsibilities to ensure compliance and free up time for business operations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is a PSC register and why is it important?</AccordionTrigger>
            <AccordionContent>
              A PSC (Person with Significant Control) register records individuals who own or control more than 25% of your company. It's a legal requirement under the Small Business, Enterprise and Employment Act 2015. Failure to maintain an accurate PSC register can result in penalties for both the company and its officers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What's included in a confirmation statement?</AccordionTrigger>
            <AccordionContent>
              A confirmation statement (previously annual return) confirms your company details are correct, including registered office, directors, secretary, shareholders, share capital, and PSCs. It must be filed at least once every 12 months, even if nothing has changed. The filing fee is £13 online or £40 by post.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can you provide a registered office address?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer a professional London registered office address service. This provides a business address for Companies House records, mail handling, and forwarding services. It's particularly useful if you work from home or want to maintain privacy for your residential address.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How quickly can you form a new company?</AccordionTrigger>
            <AccordionContent>
              Standard electronic incorporation with Companies House typically takes 24 hours. We can also arrange same-day incorporation if required urgently (additional fees apply). We'll handle all paperwork, including articles of association, share certificates, and statutory registers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>What happens if we miss a filing deadline?</AccordionTrigger>
            <AccordionContent>
              Missing deadlines results in automatic penalties: £150 for accounts up to 1 month late, rising to £1,500 for over 6 months. For confirmation statements, penalties range from £150 to £5,000. Directors may also face personal prosecution. We send multiple reminders to ensure you never miss a deadline.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-accent to-blue-600 p-8 md:p-12 rounded-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Let Us Handle Your Compliance</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Focus on growing your business whilst we ensure you stay fully compliant with all statutory requirements.
          </p>
          <Button size="lg" variant="secondary" className="group" onClick={() => { navigate('/book-consultation'); window.scrollTo(0, 0); }}>
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanySecretarial;