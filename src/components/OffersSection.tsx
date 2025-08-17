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
  return <section id="offres" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Header SEO optimisé */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Pin className="h-6 w-6 text-muted-foreground" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Offres de Transformation Digitale sur Mesure
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos solutions expertes adaptées aux PME : Lean Management BTP, Notion personnalisé, 
            et accompagnement complet en digitalisation d'entreprise.
          </p>
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

                {offer.features.length > 0 && <ul className="space-y-3 mb-6">
                    {offer.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start space-x-2">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>}

                {offer.price && <div className="text-center mb-6">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-lg px-4 py-2">
                      {offer.price}
                    </Badge>
                  </div>}

                {offer.highlight && <div className="p-4 rounded-lg border-l-4 bg-accent/10 border-accent">
                    <p className="font-semibold" style={{ color: 'hsl(var(--custom-blue))' }}>
                      {offer.highlight}
                    </p>
                  </div>}

                {offer.isSpecial && <div className="mt-6 text-center">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                      Demander un pré-diagnostic
                    </Button>
                  </div>}
              </CardContent>
            </Card>)}
        </div>

        {/* Call to Action optimisé conversion */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contacts" aria-label="Contactez notre expert en transformation digitale">
              💬 Échangeons sur votre projet de transformation
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default OffersSection;