import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
const Header = () => {
  return <header className="w-full bg-white/95 backdrop-blur-lg border-b border-border/30 sticky top-0 z-50 shadow-sm">
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
            <a href="#offres" className="text-foreground/80 hover:text-primary transition-colors cursor-pointer font-medium" onClick={e => {
            e.preventDefault();
            document.getElementById('offres')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              Offres
            </a>
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
    </header>;
};
export default Header;