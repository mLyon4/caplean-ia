import { Card, CardContent } from "@/components/ui/card";
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
      icon: <Settings className="h-8 w-8" />,
      title: "Pilotage de projets & structuration digitale",
      features: [
        "Cadrage, planification et pilotage de vos projets ERP, CRM, etc.",
        "Interface entre métiers et éditeurs"
      ],
      result: "vos projets avancent, vos équipes restent alignées.",
      color: "primary"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Systèmes Notion personnalisés & formations",
      features: [
        "Création d'espaces Notion sur mesure : CRM, RH, projets, pilotage, communication interne, espaces clients…",
        "Automatisations",
        "Formation des équipes (Qualiopi)"
      ],
      result: "un système qui vous ressemble, intuitif, opérationnel et adopté par vos équipes.",
      link: "/consultante-notion",
      color: "secondary"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Conduite du changement & optimisation des processus",
      features: [
        "Diagnostic, refonte des flux, approche Lean & amélioration continue"
      ],
      result: "moins de perte de temps, plus d'efficacité, plus d'adhésion.",
      color: "primary"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automatisation & IA au service de la performance",
      features: [
        "Automatisation des tâches répétitives",
        "IA générative intégrée à vos outils métiers"
      ],
      result: "un gain de temps significatif, des données fiabilisées, une prise de décision accélérée.",
      color: "secondary"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-secondary bg-secondary/10 rounded-full mb-6">
            Nos expertises
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Services de{" "}
            <span className="text-gradient-primary">Transformation Digitale</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Solutions personnalisées d'optimisation de processus, structuration d'entreprise et digitalisation avec Notion, CRM et Lean management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border border-border/50 shadow-elegant hover:shadow-elegant-lg transition-all duration-500 rounded-2xl bg-card overflow-hidden hover-lift"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4">
                    <div 
                      className={`flex-shrink-0 p-3 rounded-xl transition-colors duration-300 ${
                        service.color === 'primary' 
                          ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' 
                          : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white'
                      }`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground leading-tight pt-1">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className={`font-bold mt-0.5 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>✓</span>
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Result */}
                  <div className={`p-5 rounded-xl ${
                    service.color === 'primary' 
                      ? 'bg-primary/5 border-l-4 border-primary' 
                      : 'bg-secondary/5 border-l-4 border-secondary'
                  }`}>
                    <div className="flex items-start gap-3">
                      <span className={`font-bold text-lg ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>→</span>
                      <div>
                        <span className={`font-semibold ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>Résultat : </span>
                        <span className="text-foreground/80">{service.result}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Link Button */}
                  {service.link && (
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-secondary/30 text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300"
                    >
                      <Link to={service.link} className="flex items-center justify-center gap-2">
                        Découvrir l'offre Notion
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;