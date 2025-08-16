import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface/50 border-t border-primary/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="p-2 gradient-primary rounded-xl">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-foreground font-semibold text-lg">© 2025 Tous droits réservés</span>
          </div>
          <div className="text-muted-foreground">
            Transformez votre entreprise avec passion ✨
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;