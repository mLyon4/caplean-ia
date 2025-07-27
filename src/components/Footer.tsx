import { Sparkles } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold">Cap Lean IA</span>
            </div>
            <p className="text-primary-foreground/80">
              Transformation digitale et optimisation des processus pour TPE, PME et start-ups.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#qui-sommes-nous" className="hover:text-accent transition-colors">Qui sommes-nous</a></li>
              <li><a href="#references" className="hover:text-accent transition-colors">Références</a></li>
              <li><a href="#contacts" className="hover:text-accent transition-colors">Contacts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-primary-foreground/80 space-y-2">
              <p>Email: contact@christellepicault.fr</p>
              <p>Téléphone: +33 X XX XX XX XX</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Christelle Picault. Tous droits réservés.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;