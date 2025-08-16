import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FileText, Mail } from "lucide-react";
const ContactSection = () => {
  const contactMethods = [{
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Prendre Rendez-vous",
    description: "Calendly",
    link: "https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange",
    linkText: "Réserver un créneau"
  }, {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Formulaire de contact",
    description: "Demande personnalisée",
    link: "https://christelle-picault.notion.site/1fc3fc5cac5a80b8b9beca5d600d8e21?pvs=25",
    linkText: "Remplir le formulaire"
  }, {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: "Email direct",
    description: "contact@christelle-picault.fr",
    link: "mailto:contact@christelle-picault.fr",
    linkText: "Envoyer un email"
  }];
  return (
    <section id="contacts" className="section-premium gradient-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary opacity-95"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform skew-x-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
            <span className="text-white/80 font-semibold tracking-wide uppercase text-sm">Contact</span>
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            Discutons de vos besoins
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Profitez d'un pré-diagnostic d'une heure offert et sans engagement.
            Discutons de vos besoins et objectifs afin de déterminer ensemble les meilleures solutions pour la transformation de votre entreprise.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <div key={index} className="group animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center h-full hover:bg-white/20 hover:scale-[1.05] transition-all duration-500 group-hover:shadow-2xl">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 bg-white/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {method.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {method.title}
                  </h3>
                  
                  <p className="text-white/80 text-lg leading-relaxed">
                    {method.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-primary w-full text-lg py-6 font-semibold transition-all duration-300" 
                    onClick={() => window.open(method.link, '_blank')}
                  >
                    {method.linkText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Message */}
        <div className="text-center animate-fade-up">
          <div className="max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl">
            <p className="text-xl text-white/90 leading-relaxed">
              💡 <strong>Première consultation offerte</strong> - Commençons par échanger sur vos enjeux
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;