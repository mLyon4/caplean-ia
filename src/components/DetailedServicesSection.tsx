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
      title: "Pilotage de projets de transformation digitale",
      features: [
        "Cadrage et pilotage de vos projets ERP, CRM et solutions digitales",
        "Interface experte entre vos équipes métiers et les éditeurs de logiciels",
        "Structuration digitale adaptée aux PME du BTP"
      ],
      result: "vos projets de digitalisation avancent efficacement, vos équipes restent alignées sur les objectifs."
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Solutions Notion sur mesure pour PME",
      features: [
        "Création d'espaces Notion personnalisés : CRM intégré, gestion RH, pilotage de projets BTP",
        "Automatisations intelligentes pour optimiser vos processus métiers",
        "Formation certifiée Qualiopi de vos équipes à l'utilisation de Notion",
        "Structuration de la communication interne et espaces clients dédiés"
      ],
      result: "un système de gestion complet qui vous ressemble, intuitif et parfaitement adopté par vos équipes."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Lean Management & optimisation processus BTP",
      features: [
        "Diagnostic complet de votre organisation et processus métiers",
        "Refonte des flux opérationnels selon les principes du Lean Management",
        "Conduite du changement adaptée aux spécificités du secteur BTP",
        "Mise en place d'une démarche d'amélioration continue durable"
      ],
      result: "réduction significative des pertes de temps, efficacité accrue et adhésion renforcée de vos équipes."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Automatisation intelligente & IA pour PME",
      features: [
        "Automatisation des tâches répétitives et chronophages",
        "Intégration d'IA générative dans vos outils métiers existants",
        "Développement de workflows optimisés pour le secteur BTP",
        "Formation à l'utilisation des outils d'automatisation"
      ],
      result: "gain de temps considérable, données fiabilisées en temps réel et prise de décision stratégique accélérée."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header SEO optimisé */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
            Services de Transformation Digitale pour PME
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Solutions expertes en digitalisation d'entreprise : Notion sur mesure, optimisation processus, 
            CRM adapté et Lean Management. Accompagnement personnalisé pour PME et secteur BTP.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1.5 text-sm">✓</span>
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-6 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl border-l-4 border-accent">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent font-bold text-lg">→</span>
                      <div>
                        <span className="font-semibold text-accent">Résultat : </span>
                        <span className="text-accent/90">{service.result}</span>
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