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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Nos services pour transformer durablement votre entreprise
          </h2>
          <p className="text-lg text-muted-foreground">
            Des accompagnements et solutions sur mesure qui s'adaptent parfaitement aux besoins spécifiques de votre entreprise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-start space-x-2 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                      <span className="text-accent font-bold">→</span>
                      <div>
                        <span className="font-semibold text-accent-foreground">Résultat : </span>
                        <span className="text-accent-foreground">{service.result}</span>
                      </div>
                    </div>
                  </div>
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