import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Target, 
  Zap, 
  Users, 
  TrendingUp,
  Settings,
  Search,
  Lightbulb
} from "lucide-react";

const ServicesSection = () => {
  const challenges = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Transformation digitale",
      description: "Comment piloter un projet majeur (ERP, CRM) tout en garantissant l'adhésion de vos équipes ?"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Efficacité opérationnelle", 
      description: "Vos processus internes sont-ils un moteur ou un frein à votre croissance ?"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Vision stratégique",
      description: "Votre stratégie et vos projets sont-ils clairement définis, partagés et suivis par tous ?"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance",
      description: "Comment améliorer la productivité tout en réduisant les coûts et les délais ?"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "L'information circule-t-elle efficacement et la collaboration est-elle fluide dans votre organisation ?"
    }
  ];

  const methodSteps = [
    {
      step: "O",
      title: "Observer",
      icon: <Eye className="h-8 w-8" />,
      description: "Un regard extérieur pour détecter ce qui fonctionne, ce qui freine, et ce qui peut être simplifié."
    },
    {
      step: "S",
      title: "Stratégie & Simplification", 
      icon: <Search className="h-8 w-8" />,
      description: "Une feuille de route claire et priorisée selon vos moyens. Évaluation des outils, intégration de solutions digitales et IA."
    },
    {
      step: "E",
      title: "Expérimenter ensemble pour plus d'Efficience",
      icon: <Lightbulb className="h-8 w-8" />,
      description: "Lancement de projets pilotes pour valider les solutions avant déploiement généralisé."
    },
    {
      step: "R",
      title: "Résultats & Accompagnement",
      icon: <Target className="h-8 w-8" />,
      description: "Suivi des résultats et accompagnement dans la durée pour garantir l'adoption et l'amélioration continue."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Challenges Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Vos enjeux, nos réponses
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Nos services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {challenges.map((challenge, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {challenge.icon}
                  </div>
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Method OSER */}
        <div className="bg-blue-light/20 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              cap lean IA
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Notre méthode OSER
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {methodSteps.map((step, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-primary">
                      {step.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">{step.title}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;