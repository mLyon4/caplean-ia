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
              © 2026 Christelle Picault
            </p>
            <p className="text-sm text-background/50">
              Tous droits réservés
            </p>
          </div>
          
          {/* Quick Info */}
          <div className="text-center">
            <p className="text-background/70 font-medium mb-2">
              Transformation Digitale, Systèmes Notion sur mesure, automatisations IA
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
              href="https://share.google/PDVdr4RjwOz1j1bRF" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-secondary text-background/70 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
                <path fill="currentColor" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
              </svg>
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