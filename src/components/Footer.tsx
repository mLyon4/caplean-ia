import { Linkedin, Mail, ArrowUp } from "lucide-react";
import capleanLogo from "@/assets/logos/caplean-logo-full.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 bg-mesh opacity-5" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Copyright */}
          <div>
            <div className="mb-4">
              <img src={capleanLogo} alt="CapLean" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-background/50">
              © 2025 Christelle Picault
            </p>
            <p className="text-sm text-background/50">
              Tous droits réservés
            </p>
          </div>
          
          {/* Quick Info */}
          <div className="text-center">
            <p className="text-background/70 font-medium mb-2">
              Transformation Digitale & Lean Management
            </p>
            <p className="text-sm text-background/50">
              Lyon • France entière
            </p>
          </div>
          
          {/* Social Links & Back to top */}
          <div className="flex items-center justify-end gap-4">
            <a 
              href="https://www.linkedin.com/in/christelle-picault/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-secondary text-background/70 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@christelle-picault.fr"
              className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-secondary text-background/70 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center hover:bg-secondary text-secondary hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;