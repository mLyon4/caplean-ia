import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-8 border border-primary/20">
            <span className="text-sm font-medium text-primary">DIGITALISATION DES ENTREPRISES</span>
            <span className="text-primary">•</span>
            <span className="text-sm font-medium text-primary">AMÉLIORATION CONTINUE</span>
            <span className="text-primary">•</span>
            <span className="text-sm font-medium text-primary">GESTION DE PROJETS</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            Transformez votre organisation pour retrouver{" "}
            <span className="text-primary">sérénité</span>,{" "}
            <span className="text-primary">clarté</span> et{" "}
            <span className="text-primary">rentabilité</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-light">
            Structuration, simplification & digitalisation sur-mesure avec Notion, ERP & IA.
          </p>

          {/* Problem Statement */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Vous êtes dirigeant de TPE, PME ou start-up ?</h3>
            <p className="text-muted-foreground">
              L'impression que tout repose sur vous ? Les urgences s'enchaînent, 
              les informations sont dispersées et vos marges restent floues ?
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-semibold px-8 py-4 text-lg">
              Prendre RDV
            </Button>
            <Button size="lg" variant="outline" className="font-semibold px-8 py-4 text-lg">
              Nos services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;