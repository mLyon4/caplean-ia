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
  return <section id="qui-sommes-nous" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* About Header SEO optimisé */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="text-4xl">👩‍💻</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Expert Certifié en Transformation Digitale
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Christelle Picault, consultante spécialisée en digitalisation PME avec plus de 20 ans d'expérience. 
            Certifications PMP, Lean Six Sigma, Notion et Activateur France Num pour accompagner votre transformation.
          </p>
        </div>

        {/* Qualifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {qualifications.map((qual, index) => <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
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
            </Card>)}
        </div>

        {/* Special Recognition */}
        <div className="text-center mb-16">
          
        </div>

        {/* Clients */}
        
      </div>
    </section>;
};
export default AboutSection;