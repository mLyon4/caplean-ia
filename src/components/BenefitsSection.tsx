import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Lightbulb, 
  Target, 
  Smile,
  TrendingUp,
  Users
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Simplifier la gestion de votre entreprise"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Clarifier vos priorités et vos process"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Piloter efficacement vos projets"
    },
    {
      icon: <Smile className="h-8 w-8 text-primary" />,
      title: "Gagner en clarté, en efficacité et en sérénité"
    }
  ];

  const approaches = [
    {
      icon: <TrendingUp className="h-8 w-8 text-secondary" />,
      title: "Stratégique",
      description: "co-construction d'une feuille de route, pilotage des solutions"
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Humaine", 
      description: "accompagnement des équipes pour une adoption fluide"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/10 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-primary/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Benefits */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Les bénéfices pour vous
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Découvrez comment notre approche personnalisée transforme votre entreprise et améliore votre quotidien professionnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
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

        {/* Double Approach */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Notre double approche
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Une méthodologie éprouvée alliant stratégie et dimension humaine pour garantir votre succès.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {approaches.map((approach, index) => (
            <Card key={index} className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl group bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors duration-300">
                    {approach.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  {approach.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {approach.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;