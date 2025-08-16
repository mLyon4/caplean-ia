import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-foreground font-medium">© 2024 Tous droits réservés</span>
          </div>
          <div className="text-muted-foreground text-sm">
            Fait avec passion
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;