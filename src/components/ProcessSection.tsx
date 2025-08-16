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
    <section className="section-premium bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Démarche</span>
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
          </div>
          <h2 className="heading-premium gradient-primary bg-clip-text text-transparent mb-8">
            La démarche
          </h2>
          <p className="subheading-premium max-w-3xl mx-auto">
            Un processus structuré en 4 étapes pour assurer le succès de votre transformation
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="group animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="card-premium p-8 text-center h-full group-hover:scale-[1.05] transition-all duration-500 relative">
                {/* Step Number */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-1 bg-gradient-primary rounded-full"></div>
                    <div className="absolute -right-1 -top-1.5 w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center animate-fade-up">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-surface to-secondary/20 rounded-2xl border border-primary/10">
            <p className="text-xl text-foreground leading-relaxed">
              ✨ <strong>Une approche méthodique et personnalisée</strong> pour garantir le succès de votre transformation digitale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;