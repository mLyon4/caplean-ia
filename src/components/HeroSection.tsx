import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const badges = [
    "TRANSFORMATION DIGITALE",
    "OPTIMISATION DES PROCESSUS", 
    "LEAN MANAGEMENT BTP",
    "NOTION",
    "AUTOMATISATIONS & IA"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Elegant background elements */}
      <div className="absolute inset-0 z-0">
        {/* Primary gradient orb */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-float" />
        {/* Secondary accent orb */}
        <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[80px] animate-float" style={{ animationDelay: '-3s' }} />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Expertise badges - Elegant pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {badges.map((badge, index) => (
              <span 
                key={badge}
                className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wide rounded-full border transition-all duration-300 hover:shadow-elegant"
                style={{
                  backgroundColor: index % 2 === 0 ? 'hsl(var(--primary) / 0.08)' : 'hsl(var(--secondary) / 0.08)',
                  borderColor: index % 2 === 0 ? 'hsl(var(--primary) / 0.2)' : 'hsl(var(--secondary) / 0.2)',
                  color: index % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--secondary))'
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Conseil & accompagnement en</span>
            <br />
            <span className="text-gradient-primary">transformation digitale</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-medium text-foreground/90 mb-4 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Pilotage de projets ERP/CRM, systèmes Notion sur mesure, automatisations IA et Lean BTP.
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
            De la structuration des équipes à l'automatisation des process, je mets en place des systèmes digitaux qui facilitent le pilotage et améliorent la performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Button 
              asChild 
              size="lg" 
              className="group font-semibold px-8 py-6 text-base rounded-xl bg-secondary hover:bg-secondary-dark text-white shadow-lg hover:shadow-glow-secondary transition-all duration-300"
            >
              <a href="#contacts" className="flex items-center gap-2">
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="font-semibold px-8 py-6 text-base rounded-xl border-2 border-primary/30 bg-white/80 backdrop-blur-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <a href="#services">Découvrir les services</a>
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="mt-16 flex items-center justify-center gap-2 text-muted-foreground animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">+20 ans d'expérience terrain</span>
            <span className="mx-2 text-border">|</span>
            <span className="text-sm font-medium">Certifiée Notion</span>
            <span className="mx-2 text-border">|</span>
            <span className="text-sm font-medium">Formation Qualiopi</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary/40 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;