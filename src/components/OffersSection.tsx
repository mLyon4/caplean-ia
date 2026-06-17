import { Button } from "@/components/ui/button";
import { Database, Puzzle, Compass, ArrowRight, Sparkles, LifeBuoy, Search, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const OffersSection = () => {
  const offers = [
    {
      icon: Compass,
      title: "Diagnostic Cap Digital 360°",
      description: "Un diagnostic stratégique de vos outils ERP/CRM, facturation, Notion et de votre organisation.\nUne feuille de route claire avant d'investir dans une transformation digitale.",
      link: "/le-cap-digital",
      color: "secondary"
    },
    {
      icon: Zap,
      title: "Diagnostic Cap Digital Flash",
      description: "Diagnostic 360° de vos 4 fonctions critiques à distance.\nMatrice ERP/CRM vs Notion, feuille de route à 90 jours — livré sous 2 semaines.",
      link: "/cap-digital-flash",
      color: "secondary"
    },
    {
      icon: Search,
      title: "Audit Stratégique Notion",
      description: "Votre Notion ne vous fait plus gagner de temps et bloque votre développement.\nDiagnostic complet de votre espace en moins de 2 semaines. Plan d'actions en 3 niveaux, score de maturité, et proposition d'accompagnement chiffrée.",
      link: "/audit-strategique-notion",
      color: "secondary"
    },
    {
      icon: Database,
      title: "Accélérez la croissance de votre entreprise avec Notion",
      description: "Un Espace Notion sur-mesure qui devient le quartier général digital de votre entreprise — adopté par vos équipes, piloté par vos KPI, prêt à grandir avec vous.",
      link: "/consultante-notion-certifiee-notion-service-specialist-lyon-structuration-pilotage-pme",
      badge: "Formations Qualiopi",
      color: "secondary"
    },
    {
      icon: Puzzle,
      title: "Externalisez votre Direction Transformation Digitale — en temps partagé",
      description: "Une directrice Transformation digitale expérimentée de 1 à 3 jours par semaine, pour piloter votre ERP, structurer votre Notion et faire passer un cap à votre PME en moins de 6 mois.",
      link: "/direction-transformation-digitale-temps-partage-pme-erp-notion-ia",
      highlight: "Intervention possible d'un collectif d'experts.",
      color: "primary"
    },
    {
      icon: LifeBuoy,
      title: "Faites vivre votre transformation digitale",
      description: "Votre transformation digitale mérite mieux qu'un projet « one shot ». Faites-la vivre, à votre rythme — avec un partenaire fixe au mois, ou par sprints ciblés.",
      link: "/accompagnement-coaching-notion-digital-pme-suivi-mensuel-carnet-heures",
      color: "secondary"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            
            return (
              <div 
                key={index} 
                className="group glass-premium rounded-[2rem] p-8 card-premium relative flex flex-col h-full border border-secondary/10 hover:border-secondary/40 transition-all duration-300"
              >
                <div className="flex flex-col h-full text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-secondary/25 to-secondary/5 ring-1 ring-secondary/20 group-hover:ring-secondary/40 transition-all">
                    <Icon className="h-8 w-8 text-secondary" strokeWidth={1.75} />
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
                    <p className="text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                      {offer.description}
                    </p>
                  )}
                  
                  {/* Features */}
                  {'features' in offer && Array.isArray(offer.features) && offer.features.length > 0 && (
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
                      className="mt-auto inline-flex items-center justify-center gap-2 text-secondary hover:text-secondary-dark font-semibold transition-colors group/link"
                    >
                      En savoir plus 
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
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