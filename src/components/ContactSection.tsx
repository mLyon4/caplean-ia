import { Button } from "@/components/ui/button";
import { Calendar, FileText, Mail, ArrowRight, Sparkles } from "lucide-react";
import { trackContactMethod } from "@/lib/analytics";
const ContactSection = () => {
  const contactMethods = [
    {
      icon: Calendar,
      title: "Prendre Rendez-vous",
      description: "Calendly",
      link: "https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange",
      linkText: "Réserver un créneau"
    },
    {
      icon: FileText,
      title: "Formulaire de contact",
      description: "Demande personnalisée",
      link: "https://christelle-picault.notion.site/1fc3fc5cac5a80b8b9beca5d600d8e21?pvs=25",
      linkText: "Remplir le formulaire"
    },
    {
      icon: Mail,
      title: "Email direct",
      description: "contact@christelle-picault.fr",
      link: "mailto:contact@christelle-picault.fr",
      linkText: "Envoyer un email"
    }
  ];

  return (
    <section id="contacts" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
      <div className="absolute inset-0 bg-mesh opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-[80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-white/20">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-white/90">30 minutes, gratuit</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Prêt à structurer votre entreprise ?
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Discutons de vos besoins lors d'un appel découverte gratuit.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div 
                key={index} 
                className="group backdrop-blur-xl rounded-[2rem] p-8 border border-white/20 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2"
                style={{ background: 'rgba(255, 255, 255, 0.08)' }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-10 w-10 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {method.title}
                  </h3>
                  
                  <p className="text-sm text-white/60 mb-8">
                    {method.description}
                  </p>
                  
                  <Button 
                    className="w-full bg-secondary hover:bg-secondary-dark text-white btn-shine py-6 rounded-full"
                    onClick={() => {
                      trackContactMethod(method.title);
                      window.open(method.link, '_blank');
                    }}
                  >
                    {method.linkText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;