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
      title: "Stratégique",
      description: "co-construction d'une feuille de route, pilotage des solutions"
    },
    {
      title: "Humaine", 
      description: "accompagnement des équipes pour une adoption fluide"
    }
  ];

  return (
    <section className="section-premium bg-surface/30">
      <div className="container mx-auto px-6">
        {/* Benefits */}
        <div className="mb-24">
          <div className="text-center mb-20 animate-fade-up">
            <div className="inline-flex items-center space-x-2 mb-8">
              <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">Bénéfices</span>
              <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
            </div>
            <h2 className="heading-premium gradient-primary bg-clip-text text-transparent mb-8">
              Les bénéfices pour vous
            </h2>
            <p className="subheading-premium max-w-3xl mx-auto">
              Transformez votre entreprise avec des résultats concrets et mesurables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="group animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="card-premium p-8 text-center h-full group-hover:scale-[1.05] transition-all duration-500">
                  <div className="space-y-6">
                    <div className="flex justify-center">
                      <div className="p-4 gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {benefit.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Double Approach */}
        <div className="text-center animate-fade-up">
          <div className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Approche</span>
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16">
            Notre double approche
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {approaches.map((approach, index) => (
              <div key={index} className="group animate-scale-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="card-premium p-10 text-center h-full group-hover:scale-[1.05] transition-all duration-500">
                  <div className="space-y-6">
                    <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">{approach.title.charAt(0)}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-4">
                      {approach.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {approach.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;