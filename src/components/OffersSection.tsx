import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HardHat, Database, Puzzle, Pin } from "lucide-react";
import { Link } from "react-router-dom";
const OffersSection = () => {
  const offers = [{
    icon: <HardHat className="h-8 w-8 text-primary" />,
    emoji: "🛠️",
    title: "Lean Management spécialisé BTP",
    features: ["Jusqu'à 30 % de temps administratif en moins", "Pilotage en temps réel de la rentabilité", "Décisions plus rapides et plus sereines"],
    highlight: "🎯 Pré-diagnostic offert – Financement OPCO possible",
    isSpecial: true
  }, {
    icon: <Database className="h-8 w-8 text-primary" />,
    emoji: "💼",
    title: "Systèmes Notion personnalisés",
    description: "Création d'espaces Notion sur mesure : gestion de projets, suivi commercial, tableaux de bord, automatisations, SIRH…",
    link: "/consultante-notion-entreprise",
    features: []
  }, {
    icon: <Puzzle className="h-8 w-8 text-primary" />,
    emoji: "🧩",
    title: "Transformation Digitale",
    description: "Diagnostic, pilotage de projets ERP/CRM, digitalisation des processus (automatisation, IA). Accompagnement personnalisé selon vos besoins.",
    highlight: "Intervention possible d'un collectif d'experts.",
    features: []
  }];
  return <section id="offres" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Pin className="h-6 w-6 text-muted-foreground" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Offres sur mesure
            </h2>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => <Card key={index} className={`border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${offer.isSpecial ? 'ring-2 ring-accent/20' : ''}`}>
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {offer.icon}
                  </div>
                  
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {offer.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                {offer.description && <p className="text-muted-foreground mb-6 leading-relaxed">
                    {offer.description}
                  </p>}

                {offer.link && <div className="text-center mb-6">
                    <Link to={offer.link} className="text-primary hover:underline font-semibold">
                      En savoir plus →
                    </Link>
                  </div>}

                {offer.title === "Systèmes Notion personnalisés" && <div className="text-center mb-6">
                    <p className="text-lg font-bold text-primary">
                      Formations Notion (Qualiopi)
                    </p>
                  </div>}

                {offer.features.length > 0 && <ul className="space-y-3 mb-6">
                    {offer.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start space-x-2">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>}

                {offer.highlight && <div className="p-4 rounded-lg border-l-4 bg-accent/10 border-accent">
                    <p className="font-semibold" style={{ color: 'hsl(var(--custom-blue))' }}>
                      {offer.highlight}
                    </p>
                  </div>}

                {offer.isSpecial && <div className="mt-6 text-center">
                    <Button className="text-white hover:opacity-90 w-full" style={{backgroundColor: '#3f779d'}}>
                      Demander un pré-diagnostic
                    </Button>
                  </div>}
              </CardContent>
            </Card>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="text-white hover:opacity-90" style={{backgroundColor: '#3f779d'}}>
            <a href="#contacts">Discutons de votre projet</a>
          </Button>
        </div>
      </div>
    </section>;
};
export default OffersSection;