import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FileText, Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Calendar className="h-7 w-7" />,
      title: "Prendre Rendez-vous",
      description: "Calendly",
      link: "https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange",
      linkText: "Réserver un créneau"
    },
    {
      icon: <FileText className="h-7 w-7" />,
      title: "Formulaire de contact",
      description: "Demande personnalisée",
      link: "https://christelle-picault.notion.site/1fc3fc5cac5a80b8b9beca5d600d8e21?pvs=25",
      linkText: "Remplir le formulaire"
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: "Email direct",
      description: "contact@christelle-picault.fr",
      link: "mailto:contact@christelle-picault.fr",
      linkText: "Envoyer un email"
    }
  ];

  return (
    <section id="contacts" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-white/10 text-white rounded-full mb-6">
            Parlons de votre projet
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Discutons de vos besoins
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Profitez d'un <strong className="text-secondary">pré-diagnostic d'une heure offert</strong> et sans engagement.
            Discutons de vos besoins et objectifs pour trouver les meilleures solutions.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className="group bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/20 transition-all duration-300 hover-lift"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-5">
                  <div className="p-4 bg-secondary/20 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    {method.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-white">
                  {method.title}
                </h3>
                
                <p className="text-sm text-white/60 mb-5">
                  {method.description}
                </p>
                
                <Button 
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-xl transition-all duration-300 group/btn"
                  onClick={() => window.open(method.link, '_blank')}
                >
                  {method.linkText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;