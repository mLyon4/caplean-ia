import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const TestSection = () => {
  const [padding, setPadding] = useState([40]);

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Section Test</h2>
          
          <div className="mb-8">
            <label className="block text-sm font-medium text-muted-foreground mb-4">
              Padding: {padding[0]}px
            </label>
            <div className="max-w-md mx-auto">
              <Slider
                value={padding}
                onValueChange={setPadding}
                min={0}
                max={200}
                step={5}
                className="w-full"
              />
            </div>
          </div>

          <div 
            className="bg-card border rounded-lg shadow-sm transition-all duration-300"
            style={{ padding: `${padding[0]}px` }}
          >
            <p className="text-card-foreground">
              Contenu de test avec padding ajustable. 
              Utilisez le slider ci-dessus pour modifier le padding de cette zone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSection;