import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap, Sparkles } from "lucide-react";
import notionLogo from "@/assets/logos/notion-service-specialist.png";

const AboutSection = () => {
  const certifications = [
    {
      name: "PMP",
      title: "Project Management Professional",
      description: "Gestion de projets certifiée",
      icon: <Award className="h-8 w-8" />,
    },
    {
      name: "Lean Six Sigma",
      title: "Green Belt",
      description: "Optimisation des processus",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      name: "Notion Certified",
      title: "Service Specialist",
      description: "Expert Notion certifié",
      logo: notionLogo,
      link: "https://www.notion.so/@christellepicault",
    },
    {
      name: "France Num",
      title: "Activateur",
      description: "Conseiller transformation digitale",
      icon: <Users className="h-8 w-8" />,
      link: "https://www.francenum.gouv.fr/activateurs/christelle-picault",
    }
  ];

  const expertises = [
    "Plus de 20 ans d'expérience en pilotage de projets",
    "Spécialiste Notion, ERP, Lean management, automatisation IA",
    "Appartenance à un collectif d'experts"
  ];

  return (
    <section id="qui-sommes-nous" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Profile Section - Baccoffice style */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-secondary/10 rounded-3xl transform -rotate-3" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-elegant-lg">
                <img 
                  src="/lovable-uploads/462df1d0-8c1d-4756-b5c2-61440b78a905.png" 
                  alt="Christelle Picault - Experte en transformation digitale" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-elegant-lg p-5 border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">COO freelance & consultante</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Hello, moi c'est{" "}
              <span className="text-secondary">Christelle !</span>
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">
              Consultante en Transformation Digitale & Lean Management
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Mon dada à moi, c'est l'organisation, la productivité et l'efficacité. 
              Tout ce qu'en général, les entrepreneurs n'aiment pas entendre.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              J'accompagne les entreprises, agences et entrepreneurs visionnaires à 
              <strong className="text-foreground"> sortir du chaos opérationnel</strong> et à structurer 
              leur business pour une croissance sereine.
            </p>
            
            {/* Expertise points */}
            <div className="space-y-3">
              {expertises.map((expertise, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-secondary font-bold text-sm">✓</span>
                  </span>
                  <span className="text-foreground">{expertise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Certifications & Accréditations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {certifications.map((cert, index) => {
              const content = (
                <Card className="group h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant hover-lift bg-card">
                  <CardContent className="p-5 text-center">
                    <div className="mb-4 flex justify-center">
                      {cert.logo ? (
                        <div className="w-14 h-14 bg-white rounded-xl p-2 shadow-sm border border-border/30">
                          <img src={cert.logo} alt={cert.name} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          {cert.icon}
                        </div>
                      )}
                    </div>
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      {cert.title}
                    </div>
                    <h4 className="font-bold text-foreground mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              );

              return cert.link ? (
                <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;