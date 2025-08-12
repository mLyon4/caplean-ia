import { Card, CardContent } from "@/components/ui/card";
import { Zap, TrendingUp, Target, BarChart, Users } from "lucide-react";
const ChallengesSection = () => {
  const challenges = [{
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Transformation digitale",
    description: "Comment piloter un projet majeur (ERP, CRM) tout en garantissant l'adhésion de vos équipes ?"
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
  }, {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Collaboration",
    description: "L'information circule-t-elle efficacement et la collaboration est-elle fluide dans votre organisation ?"
  }];
  return (
    <section id="challenges" aria-labelledby="challenges-heading" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="mb-10 text-center">
          <h2 id="challenges-heading" className="text-3xl md:text-4xl font-bold tracking-tight">
            Vos défis majeurs
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Identifions ensemble les obstacles qui freinent votre performance.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((item, idx) => (
            <Card key={idx} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ChallengesSection;