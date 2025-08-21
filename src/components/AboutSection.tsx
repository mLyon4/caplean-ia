import { Card, CardContent } from "@/components/ui/card";
import { User, Award, Users, Zap } from "lucide-react";
import upNeoLogo from "@/assets/logos/up-neo-logo-clean.png";
import zdecLogo from "@/assets/logos/zdec-logo.png";
import ac2rLogo from "@/assets/logos/ac2r-logo.png";
import rosalogLogo from "@/assets/logos/rosalog-logo.png";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import satisfiedClient from "@/assets/satisfied-client.jpg";
const AboutSection = () => {
  const qualifications = [{
    icon: <User className="h-8 w-8 text-primary" />,
    text: "Plus de 20 ans d'expériences en pilotage de projets"
  }, {
    icon: <Award className="h-8 w-8 text-primary" />,
    text: "Certifications PMP (gestion de projets), Lean Six Sigma Green Belt, Notion, Activateur France Num"
  }, {
    icon: <Zap className="h-8 w-8 text-primary" />,
    text: "Spécialistes Notion, ERP, Lean management, automatisation IA"
  }, {
    icon: <Users className="h-8 w-8 text-primary" />,
    text: "Appartenance à un collectif d'experts"
  }];
  const clients = [{
    name: "Up Neo",
    logo: upNeoLogo,
    description: "Accompagnement en pilotage de rentabilité et développement d'entreprise"
  }, {
    name: "ZDEC",
    logo: zdecLogo,
    description: "Solutions d'électricité et maintenance industrielle"
  }, {
    name: "AC2R",
    logo: ac2rLogo,
    description: "Expert en construction et rénovation avec quatre cœurs de métier"
  }, {
    name: "RosaLog",
    logo: rosalogLogo,
    description: "Logiciel de planification et optimisation des ressources"
  }];
  return <section id="qui-sommes-nous" className="py-20 bg-gradient-to-br from-background via-secondary/5 to-primary/5 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Qui sommes nous ?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">Experts en transformation digitale et optimisation des processus, dédiés à votre réussite.</p>
        </div>

        {/* Profile Section - Modern Design */}
        <div className="relative mb-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-6xl mx-auto">
            
            {/* Image Section */}
            <div className="relative flex-shrink-0">
              <div className="relative group">
                {/* Animated background circles */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Main image */}
                <div className="relative w-80 h-80 mx-auto">
                  <img src="/lovable-uploads/462df1d0-8c1d-4756-b5c2-61440b78a905.png" alt="Christelle Picault - Experte en transformation digitale" className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white group-hover:scale-105 transition-all duration-500" />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm animate-bounce" style={{
                animationDelay: '0s'
              }}></div>
                <div className="absolute bottom-8 -left-6 w-6 h-6 bg-secondary/20 rounded-full blur-sm animate-bounce" style={{
                animationDelay: '1s'
              }}></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/30 rounded-full blur-sm animate-bounce" style={{
                animationDelay: '2s'
              }}></div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left lg:pt-8">
              <div className="mb-8">
                <h3 className="text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  Christelle Picault
                </h3>
                <p className="text-2xl font-semibold mb-6" style={{
                color: '#3f779d'
              }}>Consultante en Transformation Digitale & Lean Management</p>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto lg:mx-0 mb-6 rounded-full"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">Forte de plus de 25 ans d'expérience, j'accompagne les entreprises  dans leur transformation digitale avec une approche personnalisée et pragmatique.</p>
              </div>
              
              {/* Stats or highlights */}
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-4 border border-primary/10">
                  <div className="text-2xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {qualifications.map((qual, index) => <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    {qual.icon}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {qual.text}
                  </p>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Clients Section - Horizontal Scroll Design */}
        
      </div>
    </section>;
};
export default AboutSection;