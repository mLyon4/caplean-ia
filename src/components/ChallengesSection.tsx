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
  return;
};
export default ChallengesSection;