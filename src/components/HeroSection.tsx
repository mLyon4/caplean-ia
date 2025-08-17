import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-[85vh] flex items-center justify-center" style={{background: 'hsl(var(--gradient-hero))'}}>
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur rounded-full px-8 py-3 mb-12 border border-primary/10 shadow-sm">
            <span className="text-sm font-medium text-primary">DIGITALISATION DES ENTREPRISES</span>
            <span className="text-primary/50">•</span>
            <span className="text-sm font-medium text-primary">AMÉLIORATION CONTINUE</span>
            <span className="text-primary/50">•</span>
            <span className="text-sm font-medium text-primary">GESTION DE PROJETS</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-foreground">
            Transformez votre entreprise pour retrouver{" "}
            <span className="text-accent">clarté</span>,{" "}
            <span className="text-accent">rentabilité</span> et{" "}
            <span className="text-accent">sérénité</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
            Solutions sur mesure de structuration, simplification & digitalisation avec Notion, ERP & IA pour optimiser votre productivité.
          </p>

          {/* Problem Statement */}
          

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="font-semibold px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-accent hover:bg-accent/90">
              <a href="#contacts">Prendre rendez-vous</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold px-10 py-6 text-lg rounded-xl border-2 border-primary/20 hover:border-primary/50 bg-white/80 backdrop-blur">
              <a href="#services">Découvrir les services</a>
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;