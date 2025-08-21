import { Card, CardContent } from "@/components/ui/card";
import { User, Award, Users, Zap } from "lucide-react";
import upNeoLogo from "@/assets/logos/up-neo-logo-clean.png";
import zdecLogo from "@/assets/logos/zdec-logo.png";
import ac2rLogo from "@/assets/logos/ac2r-logo.png";
import rosalogLogo from "@/assets/logos/rosalog-logo.png";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import satisfiedClient from "@/assets/satisfied-client.jpg";
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
  return <section id="qui-sommes-nous" className="py-20 bg-gradient-to-br from-background via-secondary/5 to-primary/5 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Qui sommes nous ?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Des experts passionnés par la transformation digitale et l'optimisation des processus, dédiés à votre réussite.
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto">
              <img 
                src="/lovable-uploads/462df1d0-8c1d-4756-b5c2-61440b78a905.png" 
                alt="Christelle Picault - Experte en transformation digitale" 
                className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="text-center max-w-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Christelle Picault
            </h3>
            <p className="text-xl" style={{color: '#3f779d'}}>
              Experte en Transformation Digitale & Lean Management
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Forte de plus de 20 ans d'expérience, je accompagne les entreprises du BTP et les PME dans leur transformation digitale avec une approche personnalisée et pragmatique.
            </p>
          </div>
        </div>

        {/* Qualifications */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {qualifications.map((qual, index) => 
            <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    {qual.icon}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {qual.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Clients Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Ils nous font confiance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300">
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`} 
                  className="h-16 w-auto object-contain mb-3 opacity-70 hover:opacity-100 transition-opacity"
                />
                <p className="text-sm text-muted-foreground text-center">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;