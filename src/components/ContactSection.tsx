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
  return <section id="contacts" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discutons de vos besoins
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Profitez d'un pré-diagnostic d'une heure offert et sans engagement.
            Discutons de vos besoins et objectifs afin de déterminer ensemble les meilleures solutions pour la transformation de votre entreprise.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white/20 rounded-lg">
                    {method.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-primary-foreground">
                  {method.title}
                </h3>
                
                
                
                <Button variant="outline" className="border-white text-black dark:text-white hover:bg-white hover:text-primary dark:hover:text-blue-500 w-full" onClick={() => window.open(method.link, '_blank')}>
                  {method.linkText}
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* CTA */}
        
      </div>
    </section>;
};
export default ContactSection;