import { Award, Users, Zap } from "lucide-react";
import notionLogo from "@/assets/logos/notion-service-specialist.png";

const AboutSection = () => {
  const certifications = [
    {
      name: "PMP",
      title: "Project Management Professional",
      description: "Gestion de projets certifiée",
      icon: Award,
    },
    {
      name: "Lean Six Sigma",
      title: "Green Belt",
      description: "Optimisation des processus",
      icon: Zap,
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
      icon: Users,
      link: "https://www.francenum.gouv.fr/activateurs/christelle-picault",
    }
  ];

  const expertises = [
    "Plus de 20 ans d'expérience en pilotage de projets",
    "Spécialiste Notion, ERP, Lean management, automatisation IA",
    "Appartenance à un collectif d'experts"
  ];

  return (
    <section id="qui-sommes-nous" className="py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="section-title text-foreground mb-6">
            Qui <span className="text-gradient-secondary">sommes-nous</span> ?
          </h2>
          <p className="section-subtitle">
            Experts en transformation digitale et optimisation des processus.
          </p>
        </div>

        {/* Main Profile Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-[2rem] transform -rotate-3 blur-sm" />
              
              <div className="relative rounded-[2rem] overflow-hidden shadow-elegant-lg border-2 border-white/50">
                <img 
                  src="/lovable-uploads/462df1d0-8c1d-4756-b5c2-61440b78a905.png" 
                  alt="Christelle Picault - Experte en transformation digitale" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 glass-premium rounded-2xl p-6 shadow-elegant-lg">
                <div className="text-4xl font-bold text-gradient-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              <span className="text-gradient-secondary">Christelle Picault</span>
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-8">
              Consultante en Transformation Digitale & Lean Management
            </h3>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              J'accompagne les entreprises à 
              <strong className="text-foreground"> sortir du chaos opérationnel</strong> et à structurer 
              leur business pour une croissance sereine.
            </p>
            
            {/* Expertise points */}
            <div className="space-y-4">
              {expertises.map((expertise, index) => (
                <div key={index} className="flex items-center gap-4 glass p-4 rounded-xl">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-bold">✓</span>
                  </span>
                  <span className="text-foreground font-medium">{expertise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="glass-premium rounded-[2.5rem] p-10 md:p-14">
          <h3 className="text-2xl font-bold text-foreground mb-10 text-center">
            Certifications & Accréditations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              
              const content = (
                <div className="bento-card h-full text-center group">
                  <div className="mb-6 flex justify-center">
                    {cert.logo ? (
                      <div className="w-16 h-16 bg-white rounded-2xl p-3 shadow-sm border border-border/30 group-hover:scale-110 transition-transform duration-500">
                        <img src={cert.logo} alt={cert.name} className="w-full h-full object-contain" />
                      </div>
                    ) : Icon ? (
                      <div className="icon-container w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    ) : null}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                    {cert.title}
                  </div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
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