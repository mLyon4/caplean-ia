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
  return <section id="methode" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header SEO optimisé */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Méthode OSER : Transformation Digitale PME
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre approche structurée pour accompagner la digitalisation de votre entreprise : 
            Observer, Stratégifier, Expérimenter, obtenir des Résultats concrets et mesurables.
          </p>
        </div>

        {/* Method Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                {/* Icon */}
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                
                {/* Description */}
                <blockquote className="border-l-4 border-primary pl-6 text-muted-foreground italic leading-relaxed">
                  {step.description}
                </blockquote>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default MethodSection;