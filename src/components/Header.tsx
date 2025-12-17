import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-lg border-b border-border/30 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Sparkles className="h-8 w-8 text-accent" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors cursor-pointer font-medium" onClick={e => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({
                behavior: 'smooth'
              });
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
                      document.getElementById('offres')?.scrollIntoView({
                        behavior: 'smooth'
                      });
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
              document.getElementById('qui-sommes-nous')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
              Expertise
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors cursor-pointer font-medium" onClick={e => {
              e.preventDefault();
              document.getElementById('testimonials')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
              Références
            </a>
            <a href="#contacts" className="text-foreground/80 hover:text-primary transition-colors cursor-pointer font-medium" onClick={e => {
              e.preventDefault();
              document.getElementById('contacts')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild className="text-white font-semibold px-6 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:opacity-90" style={{backgroundColor: '#3f779d'}}>
              <a href="#contacts" onClick={e => {
                e.preventDefault();
                document.getElementById('contacts')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }} aria-label="Prendre rendez-vous - Aller à la section Contacts">
                Prendre rendez-vous
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;