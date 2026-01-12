import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { trackCTAClick } from "@/lib/analytics";
import capleanLogo from "@/assets/logos/caplean-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="w-full glass-premium sticky top-0 z-50 border-b border-border/20">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={capleanLogo} 
              alt="CapLean" 
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { label: "Services", id: "services" },
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300 font-medium"
                onClick={e => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300 font-medium flex items-center gap-1">
                Offres
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-premium border border-border/30 shadow-elegant-lg rounded-xl p-2">
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <a 
                    href="#offres"
                    onClick={e => {
                      e.preventDefault();
                      scrollToSection('offres');
                    }}
                  >
                    Toutes les offres
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link to="/consultante-notion-certifiee-notion-service-specialist-lyon-structuration-pilotage-pme">
                    Consultante Notion Entreprise
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {[
              { label: "Expertise", id: "qui-sommes-nous" },
              { label: "Références", id: "testimonials" },
              { label: "Contact", id: "contacts" },
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300 font-medium"
                onClick={e => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            
            {/* Desktop CTA */}
            <Button 
              asChild 
              className="hidden md:inline-flex bg-secondary hover:bg-secondary-dark text-white btn-shine rounded-full px-6 py-2"
            >
              <a 
                href="#contacts" 
                onClick={e => {
                  e.preventDefault();
                  trackCTAClick('Rendez-vous', 'header_desktop', '#contacts');
                  scrollToSection('contacts');
                }}
                className="flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4" />
                Rendez-vous
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] glass-premium border-l border-border/20">
                <nav className="flex flex-col space-y-2 mt-8">
                  {[
                    { label: "Services", id: "services" },
                    { label: "Offres", id: "offres" },
                    { label: "Expertise", id: "qui-sommes-nous" },
                    { label: "Références", id: "testimonials" },
                    { label: "Contact", id: "contacts" },
                  ].map((item) => (
                    <a 
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all"
                      onClick={e => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                  <Link 
                    to="/consultante-notion-certifiee-notion-service-specialist-lyon-structuration-pilotage-pme"
                    className="font-medium text-secondary hover:text-secondary-dark px-4 py-3 rounded-xl hover:bg-secondary/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    → Consultante Notion
                  </Link>
                  <Button 
                    className="bg-secondary hover:bg-secondary-dark text-white btn-shine w-full mt-4 rounded-full" 
                    onClick={() => {
                      trackCTAClick('Prendre rendez-vous', 'header_mobile', '#contacts');
                      scrollToSection('contacts');
                    }}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Prendre rendez-vous
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;