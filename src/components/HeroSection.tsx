import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-blue-deep/90" />
      
      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden">
        <Sparkles className="absolute top-20 left-20 h-8 w-8 text-accent animate-pulse" />
        <Star className="absolute top-32 right-32 h-6 w-6 text-accent/60 animate-pulse" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-40 left-1/4 h-10 w-10 text-accent/80 animate-pulse" style={{ animationDelay: '2s' }} />
        <Star className="absolute bottom-20 right-20 h-8 w-8 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
            <span className="text-sm font-medium">DIGITALISATION DES ENTREPRISES</span>
            <span className="text-accent">•</span>
            <span className="text-sm font-medium">AMÉLIORATION CONTINUE</span>
            <span className="text-accent">•</span>
            <span className="text-sm font-medium">GESTION DE PROJETS</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transformez votre organisation pour retrouver{" "}
            <span className="text-accent">sérénité</span>,{" "}
            <span className="text-accent">clarté</span> et{" "}
            <span className="text-accent">rentabilité</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Structuration, simplification & digitalisation sur-mesure avec Notion, ERP & IA.
          </p>

          {/* Problem Statement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h3 className="text-lg font-semibold mb-4">Vous êtes dirigeant de TPE, PME ou start-up ?</h3>
            <p className="text-white/90">
              L'impression que tout repose sur vous ? Les urgences s'enchaînent, 
              les informations sont dispersées et vos marges restent floues ?
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-4 text-lg">
              Prendre RDV
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg">
              Nos services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;