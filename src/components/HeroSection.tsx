import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import notionBadge from "@/assets/logos/notion-specialist-badge.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-background pt-16 md:pt-24">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="text-[#154962]">Conseil et accompagnement</span>
            <br />
            <span className="text-[#154962]">en </span><span className="text-secondary">transformation digitale</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-semibold text-foreground/80 mb-4">
            Pilotage de projets ERP/CRM, systèmes Notion sur mesure, automatisations IA et Lean BTP.
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            De la structuration des équipes à l'automatisation des process, nous mettons en place des systèmes digitaux qui facilitent le pilotage et améliorent la performance.
          </p>

          {/* Notion Badge */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src={notionBadge} alt="Notion Certified" className="h-8 w-auto" />
            <span className="text-sm font-medium text-muted-foreground">Consultante Notion certifiée</span>
          </div>

          {/* CTA Button */}
          <Button 
            asChild 
            variant="outline"
            size="lg" 
            className="group font-semibold px-8 py-6 text-base rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <a href="#contacts" className="flex items-center gap-2">
              Prendre rendez-vous
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
