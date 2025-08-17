import { Card, CardContent } from "@/components/ui/card";
import { Eye, Map, Beaker, Trophy } from "lucide-react";
const MethodSection = () => {
  const steps = [{
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Observer",
    description: "Un regard expert pour analyser vos processus BTP : ce qui fonctionne, ce qui freine, et ce qui peut être optimisé par la digitalisation."
  }, {
    icon: <Map className="h-8 w-8 text-primary" />,
    title: "Stratégie & Simplification",
    description: "Stratégie de transformation digitale claire et priorisée selon vos moyens. Évaluation des outils BTP, intégration de solutions Notion CRM et IA adaptées au secteur."
  }, {
    icon: <Beaker className="h-8 w-8 text-primary" />,
    title: "Expérimenter ensemble pour plus d'Efficience",
    description: "Mise en œuvre progressive de la digitalisation, accompagnement du changement adapté aux équipes BTP, formation et transfert de compétences."
  }, {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Résultats",
    description: "En 3 mois, une PME BTP structurée et digitalisée, une charge mentale allégée, une rentabilité des chantiers plus lisible, une entreprise qui avance de façon autonome."
  }];
  return <section id="methode" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Notre Méthode de Transformation Digitale : OSER
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Approche structurée d'optimisation des processus et de digitalisation spécialement adaptée aux PME du BTP
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