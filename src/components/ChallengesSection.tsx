import { Card, CardContent } from "@/components/ui/card";
import { Zap, TrendingUp, Target, BarChart, Users } from "lucide-react";
const ChallengesSection = () => {
  const challenges = [{
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Transformation digitale",
    description: "Comment piloter un projet majeur (ERP, CRM) tout en garantissant l'adhésion de vos équipes ?"
  }, {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Collaboration",
    description: "L'information circule-t-elle efficacement et la collaboration est-elle fluide dans votre organisation ?"
  }, {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Efficacité opérationnelle",
    description: "Vos processus internes sont-ils un moteur ou un frein à votre croissance ?"
  }, {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Vision stratégique",
    description: "Votre stratégie et vos projets sont-ils clairement définis, partagés et suivis par tous ?"
  }, {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Performance",
    description: "Comment améliorer la productivité tout en réduisant les coûts et les délais ?"
  }];
  return <section className="py-20 bg-blue-light/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vos enjeux, nos réponses
          </h2>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {challenges.map((challenge, index) => <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    {challenge.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-center text-foreground">
                  {challenge.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-center leading-relaxed">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Bottom highlight */}
        <div className="text-center">
          
        </div>
      </div>
    </section>;
};
export default ChallengesSection;