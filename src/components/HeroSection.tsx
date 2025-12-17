import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import notionBadge from "@/assets/logos/notion-specialist-badge.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Notion Badge */}
            <div className="flex items-center gap-3 mb-8">
              <img src={notionBadge} alt="Notion Certified" className="h-12 w-auto" />
              <span className="text-sm font-medium text-muted-foreground">Consultante Notion certifiée</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-foreground">
              Structurez et accélérez votre{" "}
              <span className="text-secondary">transformation digitale</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl font-semibold text-foreground/80 mb-4">
              Pilotage ERP/CRM, Notion sur mesure, automatisations IA & Lean BTP : c'est mon truc
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ne laissez pas le chaos s'installer. Adoptez une consultante experte pour reprendre le contrôle sur vos process et booster votre performance.
            </p>

            {/* CTA Button */}
            <Button 
              asChild 
              variant="outline"
              size="lg" 
              className="group font-semibold px-8 py-6 text-base rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
            >
              <a href="#contacts" className="flex items-center gap-2">
                Oui, je structure mon business !
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            {/* Main Image Container */}
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -top-8 -right-8 w-full h-full bg-primary/5 rounded-3xl transform rotate-3" />
              
              {/* Real photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-elegant-lg">
                <img 
                  src="/lovable-uploads/462df1d0-8c1d-4756-b5c2-61440b78a905.png" 
                  alt="Christelle Picault - Consultante en transformation digitale"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-elegant-lg p-4 border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-secondary font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Formation Qualiopi</p>
                    <p className="text-xs text-muted-foreground">Certifiée qualité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;