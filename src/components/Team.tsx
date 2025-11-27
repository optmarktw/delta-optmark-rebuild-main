import { Linkedin, Mail } from "lucide-react";
import aminaHassan from "@/assets/team/amina-hassan.png";
import abubakarHussein from "@/assets/team/abubakar-hussein.png";
import jamesMitchell from "@/assets/team/james-mitchell.png";
import mellissaSilveira from "@/assets/team/mellissa-silveira.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Khatra Abdi",
      position: "Managing Partner",
      bio: "With over 15 years of experience, Amina leads our team with expertise in corporation tax and business advisory services.",
      specialties: ["Corporation Tax", "Business Strategy", "M&A Advisory"],
      image: aminaHassan,
    },
    {
      name: "Abubakar Hussein",
      position: "Senior Manager",
      bio: "Hussein specialises in complex tax planning and has helped clients save millions in tax liabilities through strategic planning.",
      specialties: ["Tax Planning", "HMRC Representation", "Estate Planning"],
      image: abubakarHussein,
    },
    {
      name: "James Sifflet",
      position: "Business Advisory Partner",
      bio: "James helps businesses optimise their financial performance through strategic planning and operational improvements.",
      specialties: ["Financial Planning", "Cash Flow", "Performance Analysis"],
      image: jamesMitchell,
    },
    {
      name: "Mellissa Silveira",
      position: "Senior Accountant",
      bio: "Mellissa brings expertise in management accounting and financial reporting, helping clients streamline their accounting processes.",
      specialties: ["Management Accounts", "Financial Reporting", "Process Improvement"],
      image: mellissaSilveira,
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Qualified professionals dedicated to your financial success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-accent font-semibold mb-4">{member.position}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-2 mb-4">
                  {member.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {specialty}
                    </div>
                  ))}
                </div>
                <div className="flex space-x-3 pt-4 border-t border-border">
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <Linkedin className="h-4 w-4 text-muted-foreground hover:text-accent" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <Mail className="h-4 w-4 text-muted-foreground hover:text-accent" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
