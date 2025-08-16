import { Card, CardContent } from "@/components/ui/card";
import { Eye, Map, Beaker, Trophy } from "lucide-react";
const MethodSection = () => {
  const steps = [{
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Observer",
    description: "Un regard extérieur pour détecter ce qui fonctionne, ce qui freine, et ce qui peut être simplifié."
  }, {
    icon: <Map className="h-8 w-8 text-primary" />,
    title: "Stratégie & Simplification",
    description: "Une feuille de route claire et priorisée selon vos moyens. Évaluation des outils, intégration de solutions digitales et IA."
  }, {
    icon: <Beaker className="h-8 w-8 text-primary" />,
    title: "Expérimenter ensemble pour plus d'Efficience",
    description: "Lancement d'actions, accompagnement du changement, implication des équipes, transfert de compétences."
  }, {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Résultats",
    description: "En 3 mois, une organisation structurée, une charge mentale allégée, des marges plus lisibles, une entreprise qui avance sans vous solliciter à chaque instant."
  }];
  return (
    <section id="methode" className="section-premium bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Méthode</span>
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
          </div>
          <h2 className="heading-premium gradient-primary bg-clip-text text-transparent mb-8">
            Notre méthode : OSER
          </h2>
          <p className="subheading-premium max-w-3xl mx-auto">
            Une approche éprouvée en 4 étapes pour transformer durablement votre organisation
          </p>
        </div>

        {/* Method Steps */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="group animate-scale-up" style={{animationDelay: `${index * 0.15}s`}}>
              <div className="card-premium p-8 h-full group-hover:scale-[1.02] transition-all duration-500">
                <div className="space-y-6">
                  {/* Header with Icon */}
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0 p-4 gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary rounded-full"></div>
                    <p className="text-muted-foreground leading-relaxed text-lg italic">
                      {step.description}
                    </p>
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
export default MethodSection;