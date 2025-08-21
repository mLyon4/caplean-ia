import { Button } from "@/components/ui/button";
import heroProfessional from "@/assets/hero-professional.jpg";

const HeroSection = () => {
  return <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden" style={{background: 'hsl(var(--gradient-hero))'}}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroProfessional} 
          alt="Professional business consultant" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
      </div>

      {/* Geometric Shapes - Inspired by ValSociety */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md rounded-full px-8 py-3 mb-12 border border-primary/20 shadow-lg">
            <span className="text-sm font-medium text-primary">TRANSFORMATION DIGITALE</span>
            <span className="text-secondary">•</span>
            <span className="text-sm font-medium text-secondary">OPTIMISATION DES PROCESSUS</span>
            <span className="text-primary">•</span>
            <span className="text-sm font-medium text-primary">LEAN MANAGEMENT BTP</span>
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
            Structuration d'entreprise, pilotage de projets ERP/CRM, systèmes Notion personnalisés et Lean management BTP.
          </p>

          {/* Problem Statement */}
          

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="font-semibold px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-secondary hover:bg-secondary/90 text-white">
              <a href="#contacts">Prendre rendez-vous</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold px-10 py-6 text-lg rounded-xl border-2 border-primary/30 hover:border-primary/60 bg-white/90 backdrop-blur-md text-primary hover:bg-primary/5">
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