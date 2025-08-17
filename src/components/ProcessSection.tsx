import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Target, 
  Settings, 
  Users 
} from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "1️⃣",
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Diagnostic complet",
      description: "Analyse des besoins, pratiques, outils existants et irritants."
    },
    {
      number: "2️⃣", 
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Préconisations sur-mesure",
      description: "Sélection des solutions adaptées à vos objectifs et à votre activité."
    },
    {
      number: "3️⃣",
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Mise en œuvre",
      description: "Paramétrage des outils, structuration des process et gestion de la transition."
    },
    {
      number: "4️⃣",
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Accompagnement", 
      description: "Formation des équipes, prise en main des outils, suivi et ajustements."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Notre Démarche de Transformation Digitale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Méthodologie éprouvée d'optimisation des processus et de structuration d'entreprise adaptée aux PME du BTP
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg relative">
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className="text-4xl mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {step.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-primary/30"></div>
                    <div className="absolute -right-1 -top-1 w-0 h-0 border-l-2 border-l-primary/30 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-6 bg-blue-light/20 rounded-2xl border border-primary/20">
            <p className="text-lg text-foreground">
              Une approche méthodique et personnalisée pour garantir le succès de votre transformation digitale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;