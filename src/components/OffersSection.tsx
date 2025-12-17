import { Button } from "@/components/ui/button";
import { HardHat, Database, Puzzle, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const OffersSection = () => {
  const offers = [
    {
      icon: HardHat,
      title: "Lean Management spécialisé BTP",
      features: [
        "Jusqu'à 30 % de temps administratif en moins",
        "Pilotage en temps réel de la rentabilité",
        "Décisions plus rapides et plus sereines"
      ],
      highlight: "🎯 Pré-diagnostic offert – Financement OPCO possible",
      color: "primary"
    },
    {
      icon: Database,
      title: "Systèmes Notion personnalisés",
      description: "Création d'espaces Notion sur mesure : gestion de projets, suivi commercial, tableaux de bord, automatisations, SIRH…",
      link: "/consultante-notion-entreprise",
      badge: "Formations Qualiopi",
      color: "secondary"
    },
    {
      icon: Puzzle,
      title: "Transformation Digitale",
      description: "Diagnostic, pilotage de projets ERP/CRM, digitalisation des processus (automatisation, IA). Accompagnement personnalisé.",
      highlight: "Intervention possible d'un collectif d'experts.",
      color: "primary"
    }
  ];

  return (
    <section id="offres" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-foreground/80">Offres sur mesure</span>
          </div>
          
          <h2 className="section-title text-foreground mb-6">
            Des solutions <span className="text-gradient-secondary">adaptées</span>
          </h2>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            const isPrimary = offer.color === 'primary';
            
            return (
              <div 
                key={index} 
                className="glass-premium rounded-[2rem] p-8 card-premium relative"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className={`icon-container w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                    isPrimary 
                      ? 'bg-gradient-to-br from-primary/20 to-primary/5' 
                      : 'bg-gradient-to-br from-secondary/20 to-secondary/5'
                  }`}>
                    <Icon className={`h-10 w-10 ${isPrimary ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {offer.title}
                  </h3>
                  
                  {/* Badge */}
                  {offer.badge && (
                    <div className="mb-4">
                      <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
                        {offer.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Description */}
                  {offer.description && (
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {offer.description}
                    </p>
                  )}
                  
                  {/* Features */}
                  {offer.features && offer.features.length > 0 && (
                    <ul className="space-y-3 mb-6 text-left">
                      {offer.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <span className="text-secondary font-bold mt-0.5">✓</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Link */}
                  {offer.link && (
                    <Link 
                      to={offer.link} 
                      className="inline-flex items-center gap-2 text-secondary hover:text-secondary-dark font-semibold transition-colors group"
                    >
                      En savoir plus 
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                  
                  {/* Highlight */}
                  {offer.highlight && (
                    <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <p className="text-primary font-semibold text-sm">
                        {offer.highlight}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            asChild 
            className="btn-premium btn-shine text-lg px-10 py-6"
          >
            <a href="#contacts" className="flex items-center gap-2">
              Discutons de votre projet
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;