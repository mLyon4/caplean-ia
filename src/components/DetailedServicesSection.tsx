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
      title: "Pilotage de projets & structuration digitale PME BTP",
      features: [
        "Cadrage, planification et pilotage de vos projets ERP, CRM pour le BTP",
        "Interface entre métiers du bâtiment et éditeurs de solutions",
        "Transformation digitale adaptée aux processus du BTP"
      ],
      result: "vos projets de digitalisation avancent, vos équipes BTP restent alignées."
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Solutions Notion CRM personnalisées pour PME BTP",
      features: [
        "Création d'espaces Notion CRM spécialisés BTP : gestion chantiers, suivi clients, devis, facturation",
        "Automatisations métier adaptées aux processus du bâtiment",
        "Formation certifiée Qualiopi de vos équipes sur les outils Notion"
      ],
      result: "un CRM Notion qui s'adapte parfaitement aux spécificités du BTP, adopté par vos équipes."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Lean management & optimisation des processus BTP",
      features: [
        "Diagnostic approfondi des processus métier du BTP",
        "Refonte des flux opérationnels selon les principes Lean management",
        "Amélioration continue adaptée aux contraintes du secteur du bâtiment"
      ],
      result: "moins de gaspillage sur vos chantiers, plus d'efficacité opérationnelle, plus d'adhésion de vos équipes."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Automatisation & IA pour PME du BTP",
      features: [
        "Automatisation des tâches administratives répétitives du BTP",
        "IA générative intégrée à vos outils de gestion de chantiers",
        "Digitalisation intelligente des processus métier du bâtiment"
      ],
      result: "un gain de temps significatif sur vos projets BTP, des données de chantier fiabilisées, une prise de décision accélérée."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
            Services de Transformation Digitale pour PME BTP
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Solutions expertes d'optimisation des processus, Notion CRM et Lean management adaptées aux spécificités de votre entreprise du BTP.
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