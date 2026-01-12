import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import notionLogo from "@/assets/logos/notion-service-specialist.png";
import osezIaLogo from "@/assets/logos/osez-ia-logo.png";
import franceNumLogo from "@/assets/logos/france-num-logo.jpg";
import { trackCTAClick } from "@/lib/analytics";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-16 md:pt-24">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Subtle decorative backgrounds */}
      <div className="absolute top-20 left-[5%] w-80 h-80 bg-muted/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[50%] right-[10%] w-96 h-96 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[30%] w-64 h-64 bg-muted/40 rounded-full blur-[60px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.05] tracking-tight">
            <span className="text-foreground">Conseil et</span>
            <br />
            <span className="text-primary">accompagnement</span>
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

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 reveal-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              asChild 
              className="bg-secondary hover:bg-secondary-dark text-white btn-shine text-lg px-10 py-6 rounded-full shadow-md"
            >
              <a 
                href="#contacts" 
                className="flex items-center gap-2"
                onClick={() => trackCTAClick('Prendre rendez-vous', 'hero', '#contacts')}
              >
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
              <a 
                href="#services" 
                className="flex items-center gap-2"
                onClick={() => trackCTAClick('Découvrir nos services', 'hero', '#services')}
              >
                <Play className="h-4 w-4" />
                Découvrir nos services
              </a>
            </Button>
          </div>

          {/* Certification Logos */}
          <div className="flex items-center justify-center gap-8 reveal-up" style={{ animationDelay: '0.5s' }}>
            <a href="https://www.notion.so/@christellepicault" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl p-3 shadow-md border border-border/30 group-hover:scale-110 transition-transform duration-300">
                <img src={notionLogo} alt="Notion Certified" className="w-full h-full object-contain" />
              </div>
            </a>
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl p-3 shadow-md border border-border/30 hover:scale-110 transition-transform duration-300">
              <img src={osezIaLogo} alt="Osez l'IA" className="w-full h-full object-contain" />
            </div>
            <a href="https://www.francenum.gouv.fr/activateurs/christelle-picault" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl p-3 shadow-md border border-border/30 group-hover:scale-110 transition-transform duration-300">
                <img src={franceNumLogo} alt="France Num Activatrice" className="w-full h-full object-contain" />
              </div>
            </a>
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