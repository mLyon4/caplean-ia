import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-bold">Caplean</span>
              <span className="text-xl font-light text-secondary">IA</span>
            </div>
            <p className="text-sm text-background/60">
              © 2025 Christelle Picault - Tous droits réservés
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <p className="text-sm text-background/60">
              Consultante en Transformation Digitale & Lean Management
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-end gap-4">
            <a 
              href="https://www.linkedin.com/in/christelle-picault/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@christelle-picault.fr"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;