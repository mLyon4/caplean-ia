import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-foreground">Christelle Picault</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#qui-sommes-nous" className="text-foreground hover:text-primary transition-colors">
              Qui sommes-nous
            </a>
            <a href="#references" className="text-foreground hover:text-primary transition-colors">
              Références
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
              Contacts
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Prendre RDV
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;