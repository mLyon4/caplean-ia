import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HardHat, Database, Puzzle, Pin } from "lucide-react";
const OffersSection = () => {
  const offers = [{
    icon: <HardHat className="h-8 w-8 text-primary" />,
    emoji: "🛠️",
    title: "Offre Lean Management BTP",
    features: ["Jusqu'à 30 % de temps administratif en moins", "Pilotage en temps réel de la rentabilité", "Décisions plus rapides et plus sereines"],
    highlight: "🎯 Pré-diagnostic offert – Financement OPCO possible",
    isSpecial: true
  }, {
    icon: <Database className="h-8 w-8 text-primary" />,
    emoji: "💼",
    title: "Notion sur mesure",
    description: "Structuration de l'organisation, productivité, communication interne & externe.",
    price: "À partir de 850 €",
    features: []
  }, {
    icon: <Puzzle className="h-8 w-8 text-primary" />,
    emoji: "🧩",
    title: "Offre Personnalisée",
    description: "Diagnostic, digitalisation des processus (IA, CRM/ERP, automatisation). Durée et rythme à définir ensemble.",
    highlight: "Intervention possible d'un collectif d'experts.",
    features: []
  }];
  return (
    <section id="offres" className="section-premium bg-surface/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Offres</span>
            <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
          </div>
          <h2 className="heading-premium gradient-primary bg-clip-text text-transparent mb-8">
            Nos offres sur mesure
          </h2>
          <p className="subheading-premium max-w-3xl mx-auto">
            Des solutions adaptées à vos besoins et votre budget pour une transformation réussie
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {offers.map((offer, index) => (
            <div key={index} className="group animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className={`card-premium p-8 h-full group-hover:scale-[1.02] transition-all duration-500 ${offer.isSpecial ? 'ring-2 ring-primary/30 shadow-premium-xl' : ''}`}>
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <div className="p-4 gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {offer.icon}
                        </div>
                      </div>
                      <div className="text-4xl">{offer.emoji}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {offer.title}
                    </h3>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-6">
                    {offer.description && (
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {offer.description}
                      </p>
                    )}

                    {offer.features.length > 0 && (
                      <ul className="space-y-4">
                        {offer.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-6 h-6 gradient-primary rounded-full flex items-center justify-center mt-0.5">
                              <span className="text-white font-bold text-xs">✓</span>
                            </div>
                            <span className="text-muted-foreground leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {offer.price && (
                      <div className="text-center">
                        <div className="inline-flex items-center px-6 py-3 gradient-primary text-white rounded-full font-bold text-lg">
                          {offer.price}
                        </div>
                      </div>
                    )}

                    {offer.highlight && (
                      <div className="relative p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                        <div className="absolute top-3 left-3">
                          <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">!</span>
                          </div>
                        </div>
                        <p className="pl-8 font-semibold text-primary leading-relaxed">
                          {offer.highlight}
                        </p>
                      </div>
                    )}

                    {offer.isSpecial && (
                      <div className="text-center pt-4">
                        <Button className="gradient-primary hover:opacity-90 w-full text-lg py-6 font-semibold transition-all duration-300">
                          Demander un pré-diagnostic
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-up">
          <Button asChild size="lg" className="gradient-primary hover:opacity-90 text-xl py-8 px-12 font-semibold transition-all duration-300">
            <a href="#contacts">Discutons de votre projet</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default OffersSection;