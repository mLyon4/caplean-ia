import { Card, CardContent } from "@/components/ui/card";
import { Zap, TrendingUp, Target, BarChart, Users } from "lucide-react";

const ChallengesSection = () => {
  const challenges = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Transformation digitale",
      description:
        "Comment piloter un projet majeur (ERP, CRM) tout en garantissant l'adhésion de vos équipes ?",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Efficacité opérationnelle",
      description:
        "Vos processus internes sont-ils un moteur ou un frein à votre croissance ?",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Vision stratégique",
      description:
        "Votre stratégie et vos projets sont-ils clairement définis, partagés et suivis par tous ?",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Performance",
      description:
        "Comment améliorer la productivité tout en réduisant les coûts et les délais ?",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description:
        "L'information circule-t-elle efficacement et la collaboration est-elle fluide dans votre organisation ?",
    },
  ];

  return (
    <section aria-labelledby="challenges-title" className="py-16">
      <div className="container mx-auto px-4">
        <header className="mb-10 text-center">
          <h2
            id="challenges-title"
            className="text-3xl font-bold tracking-tight text-foreground"
          >
            Vos défis clés
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {challenges.slice(0, 3).map((item) => (
            <Card key={item.title} className="h-full border-border bg-card">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div>{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}

          {/* Placeholder to push last two cards to columns 2 and 3 on md+ */}
          <div className="hidden md:block" aria-hidden="true" />

          {challenges.slice(3).map((item) => (
            <Card key={item.title} className="h-full border-border bg-card">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div>{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
