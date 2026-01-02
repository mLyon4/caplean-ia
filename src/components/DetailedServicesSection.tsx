import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Settings, 
  Database, 
  TrendingUp, 
  Zap,
  ArrowRight
} from "lucide-react";

const DetailedServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Pilotage de projets & structuration digitale",
      features: [
        "Cadrage, planification et pilotage de vos projets ERP, CRM, etc.",
        "Interface entre métiers et éditeurs"
      ],
      result: "vos projets avancent, vos équipes restent alignées.",
      color: "primary"
    },
    {
      icon: Database,
      title: "Systèmes Notion personnalisés & formations",
      features: [
        "Création d'espaces Notion sur mesure : CRM, RH, projets, pilotage, communication interne…",
        "Automatisations",
        "Formation des équipes (Qualiopi)"
      ],
      result: "un système qui vous ressemble, intuitif, opérationnel et adopté.",
      link: "/consultante-notion-certifiee-notion-service-specialist-lyon-structuration-pilotage-pme",
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Conduite du changement & optimisation",
      features: [
        "Diagnostic, refonte des flux, approche Lean & amélioration continue"
      ],
      result: "moins de perte de temps, plus d'efficacité, plus d'adhésion.",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Automatisation & IA",
      features: [
        "Automatisation des tâches répétitives",
        "IA générative intégrée à vos outils métiers"
      ],
      result: "gain de temps, données fiabilisées, décisions accélérées.",
      color: "secondary"
    }
  ];

  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">Nos expertises</span>
          </div>
          
          <h2 className="section-title text-foreground mb-6">
            Services de <span className="text-gradient-secondary">Transformation</span>
          </h2>
          
          <p className="section-subtitle">
            Solutions personnalisées d'optimisation de processus, structuration d'entreprise et digitalisation.
          </p>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isPrimary = service.color === 'primary';
            
            return (
              <div 
                key={index} 
                className="glass-premium rounded-[2rem] p-10 card-premium group"
              >
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-5">
                    <div 
                      className={`icon-container flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isPrimary 
                          ? 'bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary group-hover:to-primary-dark' 
                          : 'bg-gradient-to-br from-secondary/20 to-secondary/5 group-hover:from-secondary group-hover:to-secondary-dark'
                      }`}
                    >
                      <Icon className={`h-8 w-8 transition-colors duration-500 ${
                        isPrimary 
                          ? 'text-primary group-hover:text-white' 
                          : 'text-secondary group-hover:text-white'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground leading-tight pt-2">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 pl-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className={`font-bold mt-1 text-lg ${isPrimary ? 'text-primary' : 'text-secondary'}`}>✓</span>
                        <span className="text-muted-foreground leading-relaxed text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Result */}
                  <div className={`p-6 rounded-2xl border-l-4 ${
                    isPrimary 
                      ? 'bg-primary/5 border-primary' 
                      : 'bg-secondary/5 border-secondary'
                  }`}>
                    <div className="flex items-start gap-3">
                      <span className={`font-bold text-xl ${isPrimary ? 'text-primary' : 'text-secondary'}`}>→</span>
                      <div>
                        <span className={`font-semibold ${isPrimary ? 'text-primary' : 'text-secondary'}`}>Résultat : </span>
                        <span className="text-foreground/80 text-lg">{service.result}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Link Button */}
                  {service.link && (
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full py-6 text-lg rounded-xl border-2 border-secondary/30 text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 btn-shine"
                    >
                      <Link to={service.link} className="flex items-center justify-center gap-2">
                        Découvrir l'offre Notion
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;