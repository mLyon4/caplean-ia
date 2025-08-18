import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Lightbulb, 
  Target, 
  Smile 
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Simplifier la gestion de votre entreprise BTP"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Optimiser vos processus métier BTP"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Piloter efficacement vos chantiers et projets BTP"
    },
    {
      icon: <Smile className="h-8 w-8 text-primary" />,
      title: "Gagner en clarté, en efficacité et en sérénité"
    }
  ];

  const approaches = [
    {
      title: "Stratégique",
      description: "co-construction d'une feuille de route de transformation digitale, pilotage des solutions d'optimisation"
    },
    {
      title: "Humaine", 
      description: "accompagnement des équipes BTP pour une adoption fluide de la digitalisation"
    }
  ];

  return (
    <section className="py-20 bg-blue-light/20">
      <div className="container mx-auto px-6">
        {/* Benefits */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Bénéfices de la Transformation Digitale pour votre PME BTP
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Impact concret de l'optimisation des processus et de la digitalisation sur la performance de votre entreprise du bâtiment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {benefit.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Double Approach */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            Notre Double Approche de Transformation Digitale
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {approaches.map((approach, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;