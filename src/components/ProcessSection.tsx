import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Target, 
  Settings, 
  Users,
  Sparkles,
  CheckCircle2,
  Compass
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
            La démarche
          </h2>
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

        {/* Bottom Message — visual highlight */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 bg-gradient-to-br from-primary via-primary to-[#2a3260] text-primary-foreground shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.5)]">
            {/* Decorative blurs */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-secondary/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
            {/* Subtle dotted texture */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative z-10 grid md:grid-cols-[auto_1fr_auto] items-center gap-8">
              {/* Left icon */}
              <div className="flex justify-center md:justify-start">
                <div className="w-20 h-20 rounded-2xl bg-secondary/25 ring-1 ring-secondary/40 flex items-center justify-center backdrop-blur-sm">
                  <Compass className="h-10 w-10 text-secondary" strokeWidth={1.75} />
                </div>
              </div>

              {/* Message */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 ring-1 ring-secondary/30 text-xs font-semibold tracking-wide uppercase mb-4">
                  <Sparkles className="h-3.5 w-3.5 text-secondary" />
                  <span className="text-secondary">Notre promesse</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold leading-tight">
                  Une approche <span className="text-secondary">méthodique</span> et <span className="text-secondary">personnalisée</span>
                </p>
                <p className="mt-3 text-base md:text-lg text-primary-foreground/80">
                  pour garantir le succès de votre transformation digitale.
                </p>
              </div>

              {/* Right pillars */}
              <div className="flex md:flex-col gap-3 justify-center">
                {["Méthode", "Sur-mesure", "Résultats"].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 ring-1 ring-primary-foreground/20 backdrop-blur-sm text-sm font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;