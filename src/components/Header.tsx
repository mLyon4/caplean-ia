import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
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
  SheetClose,
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
    <header className="w-full bg-white/95 backdrop-blur-lg border-b border-border/30 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Sparkles className="h-7 w-7 md:h-8 md:w-8 text-accent" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors cursor-pointer font-medium" onClick={e => {
              e.preventDefault();
              scrollToSection('services');
            }}>
              Services
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground/80 hover:text-primary transition-colors cursor-pointer font-medium flex items-center gap-1">
                Offres
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <a 
                    href="#offres" 
                    className="cursor-pointer"
                    onClick={e => {
                      e.preventDefault();
                      scrollToSection('offres');
                    }}
                  >
                    Toutes les offres
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/consultante-notion-entreprise" className="cursor-pointer">
                    Consultante Notion Entreprise
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#qui-sommes-nous" className="text-foreground/80 hover:text-primary transition-colors cursor-pointer font-medium" onClick={e => {
              e.preventDefault();
              scrollToSection('qui-sommes-nous');
            }}>
              Expertise
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors cursor-pointer font-medium" onClick={e => {
              e.preventDefault();
              scrollToSection('testimonials');
            }}>
              Références
            </a>
            <a href="#contacts" className="text-foreground/80 hover:text-primary transition-colors cursor-pointer font-medium" onClick={e => {
              e.preventDefault();
              scrollToSection('contacts');
            }}>
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <ThemeToggle />
            
            {/* Desktop CTA */}
            <Button asChild className="hidden md:inline-flex text-white font-semibold px-6 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:opacity-90" style={{backgroundColor: '#3f779d'}}>
              <a href="#contacts" onClick={e => {
                e.preventDefault();
                scrollToSection('contacts');
              }} aria-label="Prendre rendez-vous - Aller à la section Contacts">
                Prendre rendez-vous
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <nav className="flex flex-col space-y-6 mt-8">
                  <a 
                    href="#services" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                  >
                    Services
                  </a>
                  <a 
                    href="#offres" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      scrollToSection('offres');
                    }}
                  >
                    Offres
                  </a>
                  <Link 
                    to="/consultante-notion-entreprise" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors pl-4 text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    → Consultante Notion
                  </Link>
                  <a 
                    href="#qui-sommes-nous" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      scrollToSection('qui-sommes-nous');
                    }}
                  >
                    Expertise
                  </a>
                  <a 
                    href="#testimonials" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      scrollToSection('testimonials');
                    }}
                  >
                    Références
                  </a>
                  <a 
                    href="#contacts" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      scrollToSection('contacts');
                    }}
                  >
                    Contact
                  </a>
                  <Button 
                    className="w-full text-white font-semibold py-3 rounded-xl mt-4" 
                    style={{backgroundColor: '#3f779d'}}
                    onClick={() => scrollToSection('contacts')}
                  >
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