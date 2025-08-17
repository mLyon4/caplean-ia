import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-[85vh] flex items-center justify-center" style={{background: 'hsl(var(--gradient-hero))'}}>
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur rounded-full px-8 py-3 mb-12 border border-primary/10 shadow-sm">
            <span className="text-sm font-medium text-primary">TRANSFORMATION DIGITALE PME</span>
            <span className="text-primary/50">•</span>
            <span className="text-sm font-medium text-primary">OPTIMISATION PROCESSUS</span>
            <span className="text-primary/50">•</span>
            <span className="text-sm font-medium text-primary">LEAN MANAGEMENT BTP</span>
          </div>

          {/* Main Title - H1 optimisé SEO */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-foreground">
            Expert en transformation digitale pour PME : retrouvez{" "}
            <span className="text-accent">clarté</span>,{" "}
            <span className="text-accent">rentabilité</span> et{" "}
            <span className="text-accent">sérénité</span>
          </h1>

          {/* Subtitle optimisée avec mots-clés */}
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
            Solutions Notion sur mesure, CRM adapté, structuration d'entreprise et digitalisation pour PME du BTP. 
            Optimisez vos processus avec un expert en Lean Management et transformation digitale.
          </p>

          {/* Problem Statement */}
          

          {/* CTA Buttons optimisés conversion */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="font-semibold px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-accent hover:bg-accent/90">
              <a href="#contacts" aria-label="Prendre rendez-vous pour votre transformation digitale">
                🚀 Diagnostic gratuit - Prenez rendez-vous
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold px-10 py-6 text-lg rounded-xl border-2 border-primary/20 hover:border-primary/50 bg-white/80 backdrop-blur">
              <a href="#services" aria-label="Découvrir nos services de transformation digitale">
                📋 Découvrir nos solutions
              </a>
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