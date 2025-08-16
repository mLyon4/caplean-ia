import { Card, CardContent } from "@/components/ui/card";
import { User, Award, Users, Zap } from "lucide-react";
import upNeoLogo from "@/assets/logos/up-neo-logo-clean.png";
import zdecLogo from "@/assets/logos/zdec-logo.png";
import ac2rLogo from "@/assets/logos/ac2r-logo.png";
import rosalogLogo from "@/assets/logos/rosalog-logo.png";
const AboutSection = () => {
  const qualifications = [{
    icon: <User className="h-8 w-8 text-primary" />,
    text: "Plus de 20 ans d'expériences en pilotage de projets"
  }, {
    icon: <Award className="h-8 w-8 text-primary" />,
    text: "Certifications PMP (gestion de projets), Lean Six Sigma Green Belt, Notion, Activateur France Num"
  }, {
    icon: <Zap className="h-8 w-8 text-primary" />,
    text: "Spécialistes Notion, ERP, Lean management, automatisation IA"
  }, {
    icon: <Users className="h-8 w-8 text-primary" />,
    text: "Appartenance à un collectif d'experts"
  }];
  const clients = [{
    name: "Up Neo",
    logo: upNeoLogo,
    description: "Accompagnement en pilotage de rentabilité et développement d'entreprise"
  }, {
    name: "ZDEC",
    logo: zdecLogo,
    description: "Solutions d'électricité et maintenance industrielle"
  }, {
    name: "AC2R",
    logo: ac2rLogo,
    description: "Expert en construction et rénovation avec quatre cœurs de métier"
  }, {
    name: "RosaLog",
    logo: rosalogLogo,
    description: "Logiciel de planification et optimisation des ressources"
  }];
  return (
    <section id="qui-sommes-nous" className="section-premium bg-background">
      <div className="container mx-auto px-6">
        {/* About Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Qui sommes-nous</span>
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="text-6xl">👩‍💻</div>
            <h2 className="heading-premium gradient-primary bg-clip-text text-transparent">
              Qui sommes nous ?
            </h2>
          </div>
          <p className="subheading-premium max-w-3xl mx-auto">
            Des experts passionnés au service de votre transformation digitale
          </p>
        </div>

        {/* Qualifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {qualifications.map((qual, index) => (
            <div key={index} className="group animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="card-premium p-8 h-full group-hover:scale-[1.02] transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {qual.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground leading-relaxed text-lg">
                      {qual.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="text-center animate-fade-up">
          <div className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Nos références</span>
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
          </div>
          <h3 className="text-4xl font-bold text-foreground mb-16">
            Ils nous font confiance
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div key={index} className="group animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="card-premium p-8 text-center h-full group-hover:scale-[1.05] transition-all duration-500">
                  <div className="space-y-6">
                    <div className="w-16 h-16 mx-auto overflow-hidden rounded-xl bg-surface flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        {client.name}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {client.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;