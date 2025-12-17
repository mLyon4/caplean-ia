import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import notionBadge from "@/assets/logos/notion-specialist-badge.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-16 md:pt-24">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Floating decorative orbs */}
      <div className="absolute top-20 left-[5%] w-80 h-80 bg-secondary/20 rounded-full blur-[100px] float-slow pointer-events-none" />
      <div className="absolute top-[50%] right-[10%] w-96 h-96 bg-primary/15 rounded-full blur-[80px] float-medium pointer-events-none" />
      <div className="absolute bottom-[10%] left-[30%] w-64 h-64 bg-secondary/10 rounded-full blur-[60px] float-fast pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-8 reveal-up" style={{ animationDelay: '0.1s' }}>
            <div className="glass-premium px-6 py-3 rounded-full flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">Transformation digitale & Lean Management</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.05] tracking-tight reveal-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Conseil et</span>
            <br />
            <span className="text-gradient-animated">accompagnement</span>
            <br />
            <span className="text-foreground">en transformation </span>
            <span className="relative inline-block">
              <span className="text-secondary">digitale</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 150 12" fill="none">
                <path d="M2 8C38 2 112 2 148 8" stroke="hsl(15, 79%, 57%)" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed reveal-up" style={{ animationDelay: '0.3s' }}>
            Pilotage de projets ERP/CRM, systèmes Notion sur mesure, automatisations IA et Lean BTP pour structurer et digitaliser votre entreprise.
          </p>

          {/* Notion Badge */}
          <div className="flex items-center justify-center gap-4 mb-10 reveal-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass px-4 py-2 rounded-full flex items-center gap-3 border border-primary/20">
              <img src={notionBadge} alt="Notion Certified" className="h-10 w-auto" />
              <span className="text-sm font-medium text-foreground/70">Consultante Notion certifiée</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 reveal-up" style={{ animationDelay: '0.5s' }}>
            <Button 
              asChild 
              className="btn-premium btn-shine text-lg px-10 py-6"
            >
              <a href="#contacts" className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              className="glass text-lg px-8 py-6 rounded-full border-2 border-primary/30 text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <a href="#services" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Découvrir nos services
              </a>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto reveal-up" style={{ animationDelay: '0.6s' }}>
            {[
              { value: "20+", label: "Années d'expérience" },
              { value: "10+", label: "Projets réalisés" },
              { value: "100%", label: "Clients satisfaits" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 reveal-up" style={{ animationDelay: '0.8s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;