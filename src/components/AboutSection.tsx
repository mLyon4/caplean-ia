import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  Award, 
  Users, 
  Zap 
} from "lucide-react";

const AboutSection = () => {
  const qualifications = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      text: "Plus de 20 ans d'expériences en pilotage de projets"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      text: "Certifications PMP (gestion de projets), Lean Six Sigma Green Belt, Notion"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      text: "Spécialistes Notion, ERP, Lean management, automatisation IA"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      text: "Appartenance à un collectif d'experts"
    }
  ];

  const clients = ["Up Neo", "ZDEC", "AC2R"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* About Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="text-4xl">👩‍💻</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Qui sommes nous ?
            </h2>
          </div>
        </div>

        {/* Qualifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {qualifications.map((qual, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
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
          ))}
        </div>

        {/* Special Recognition */}
        <div className="text-center mb-16">
          <Card className="max-w-3xl mx-auto border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Activateur FranceNum
              </h3>
              <p className="text-muted-foreground">
                pour la transformation numérique des TPE/PME
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Clients */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Ils nous font confiance
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-sm rounded-lg px-6 py-3 border border-border/30">
                <span className="text-lg font-semibold text-foreground">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;