import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Lightbulb, 
  Target, 
  Smile 
} from "lucide-react";
import btpMeeting from "@/assets/btp-meeting.jpg";
import satisfiedClient from "@/assets/satisfied-client.jpg";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Simplifier la gestion de votre entreprise"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Clarifier vos priorités et vos process"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Piloter efficacement vos projets"
    },
    {
      icon: <Smile className="h-8 w-8 text-primary" />,
      title: "Gagner en clarté, en efficacité et en sérénité"
    }
  ];

  const approaches = [
    {
      title: "Stratégique",
      description: "co-construction d'une feuille de route, pilotage des solutions"
    },
    {
      title: "Humaine", 
      description: "accompagnement des équipes pour une adoption fluide"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/10 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-primary/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Benefits */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Les bénéfices pour vous
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Découvrez comment notre approche personnalisée transforme votre entreprise et améliore votre quotidien professionnel.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src={satisfiedClient} 
                  alt="Client satisfait dans son bureau" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {benefit.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Double Approach */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src={btpMeeting} 
                alt="Réunion professionnelle BTP avec équipe" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center lg:text-left">
              Notre double approche
            </h2>
            <div className="space-y-6">
              {approaches.map((approach, index) => (
                <Card key={index} className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {approach.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {approach.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;