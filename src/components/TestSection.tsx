import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const TestSection = () => {
  const [padding, setPadding] = useState([40]);

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Ce Que Disent Nos Clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  JS
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-card-foreground">Jean Dupont</h3>
                  <p className="text-sm text-muted-foreground">PDG, TechCorp</p>
                </div>
              </div>
              <p className="text-card-foreground italic">
                "Excellent travail sur l'automatisation de nos processus. L'équipe a su comprendre nos besoins et livrer une solution parfaitement adaptée."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  ML
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-card-foreground">Marie Laurent</h3>
                  <p className="text-sm text-muted-foreground">Directrice, InnovCorp</p>
                </div>
              </div>
              <p className="text-card-foreground italic">
                "La mise en place de notre ERP avec Christelle a été un véritable succès. Professionnalisme et expertise au rendez-vous."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  PM
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-card-foreground">Pierre Martin</h3>
                  <p className="text-sm text-muted-foreground">Manager, StartupXYZ</p>
                </div>
              </div>
              <p className="text-card-foreground italic">
                "Grâce à l'implémentation Notion et aux automatisations, notre productivité a augmenté de 40%. Merci pour ce travail exceptionnel."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSection;