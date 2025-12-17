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
      icon: CheckCircle,
      title: "Simplifier la gestion de votre entreprise"
    },
    {
      icon: Lightbulb,
      title: "Clarifier vos priorités et vos process"
    },
    {
      icon: Target,
      title: "Piloter efficacement vos projets"
    },
    {
      icon: Smile,
      title: "Gagner en clarté, efficacité et sérénité"
    }
  ];

  const approaches = [
    {
      icon: TrendingUp,
      title: "Stratégique",
      description: "Co-construction d'une feuille de route, pilotage des solutions"
    },
    {
      icon: Users,
      title: "Humaine", 
      description: "Accompagnement des équipes pour une adoption fluide"
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] float-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px] float-medium" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Benefits */}
        <div className="text-center mb-20">
          <h2 className="section-title text-foreground mb-6">
            Les <span className="text-gradient-secondary">bénéfices</span> pour vous
          </h2>
          <p className="section-subtitle">
            Découvrez comment notre approche personnalisée transforme votre entreprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="bento-card text-center group"
              >
                <div className="icon-container w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Double Approach */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-6">
            Notre <span className="text-gradient-secondary">double</span> approche
          </h2>
          <p className="section-subtitle">
            Une méthodologie éprouvée alliant stratégie et dimension humaine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <div 
                key={index} 
                className="glass-premium rounded-[2rem] p-10 text-center card-premium"
              >
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="icon-container w-24 h-24 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mx-auto">
                    <Icon className="h-12 w-12 text-secondary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-secondary mb-4">
                  {approach.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {approach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;