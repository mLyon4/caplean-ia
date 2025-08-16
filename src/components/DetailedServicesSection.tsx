import { Card, CardContent } from "@/components/ui/card";
import { 
  Settings, 
  Database, 
  TrendingUp, 
  Zap 
} from "lucide-react";

const DetailedServicesSection = () => {
  const services = [
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Pilotage de projets & structuration digitale",
      features: [
        "Cadrage, planification et pilotage de vos projets ERP, CRM, etc.",
        "Interface entre métiers et éditeurs"
      ],
      result: "vos projets avancent, vos équipes restent alignées."
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Systèmes Notion personnalisés & formations",
      features: [
        "Création d'espaces Notion sur mesure : CRM, RH, projets, pilotage, communication interne, espaces clients…",
        "Automatisations",
        "Formation des équipes (Qualiopi)"
      ],
      result: "un système qui vous ressemble, intuitif, opérationnel et adopté par vos équipes."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Conduite du changement & optimisation des processus",
      features: [
        "Diagnostic, refonte des flux, approche Lean & amélioration continue"
      ],
      result: "moins de perte de temps, plus d'efficacité, plus d'adhésion."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Automatisation & IA au service de la performance",
      features: [
        "Automatisation des tâches répétitives",
        "IA générative intégrée à vos outils métiers"
      ],
      result: "un gain de temps significatif, des données fiabilisées, une prise de décision accélérée."
    }
  ];

  return (
    <section id="services" className="section-premium bg-surface/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Services</span>
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
          </div>
          <h2 className="heading-premium gradient-primary bg-clip-text text-transparent mb-8">
            Nos Services
          </h2>
          <p className="subheading-premium max-w-3xl mx-auto">
            Des solutions sur mesure qui s'adaptent parfaitement aux besoins spécifiques de votre entreprise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="card-premium p-8 h-full hover:scale-[1.02] transition-all duration-500">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 p-4 gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground leading-tight mb-3">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-6 h-6 gradient-primary rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-white font-bold text-xs">✓</span>
                        </div>
                        <span className="text-muted-foreground leading-relaxed text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Result */}
                  <div className="relative p-6 bg-gradient-to-br from-surface to-secondary/20 rounded-2xl border border-primary/10">
                    <div className="absolute top-4 left-4">
                      <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">→</span>
                      </div>
                    </div>
                    <div className="pl-12">
                      <span className="font-bold text-primary text-lg">Résultat : </span>
                      <span className="text-foreground/90 text-lg leading-relaxed">{service.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;