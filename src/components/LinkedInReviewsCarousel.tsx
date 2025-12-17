import { Linkedin, Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface LinkedInReview {
  id: string;
  author: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  date: string;
}

const LinkedInReviewsCarousel = () => {
  const linkedInReviews: LinkedInReview[] = [
    {
      id: "1",
      author: "Anne-Gaëlle de Kinkelin- Roux",
      title: "DG et Responsable du développement commercial",
      company: "AC2R",
      content: "Christelle nous a accompagné dans notre transition numérique chez AC2R; Nous savions qu'il fallait que l'on opère des changements organisationnels, fonctionnels, et d'outils. Christelle, grâce à son travail de compréhension de notre mode de fonctionnement, à son analyse très précise, et à son état des lieux sans équivoque, nous a permis de changer de logiciel de gestion (après 17 ans avec un prestataire), et de mettre en place de nouveaux outils. C'est notre magicienne :) Merci",
      rating: 5,
      date: "Septembre 2025"
    },
    {
      id: "2",
      author: "Céline Mansuy Ferreira", 
      title: "Consultante Free-lance",
      company: "Up Neo",
      content: "Mise en place d'un système Notion sur mesure. Une vraie pro 🤩 J'ai fait appel aux services de Christelle pour la création de mon espace Notion. Après quelques mois d'activité en tant que free-lance, je commençais à avoir des informations un peu partout, sous différents formats, et j'avais besoin de structurer! Christelle a pris le temps d'écouter mes besoins et s'y est très facilement adaptée, avec un grand sens pédagogique, de sorte que je suis devenue autonome avec « mon » Notion hyper rapidement! Je recommande les yeux fermés 🚀",
      rating: 5,
      date: "Juillet 2025"
    },
    {
      id: "3",
      author: "Quentin Forgeot",
      title: "CEO",
      company: "Fireco | Agence Meta Ads, Google Ads & Créa",
      content: "J'ai eu l'occasion de travailler avec Christelle sur la refonte complète de mon espace Notion, avec pour objectif de le rendre utilisable à la fois en interne et en externe (clients). Son travail a été remarquable : elle a su structurer l'ensemble de manière claire et fluide, tout en gardant une logique d'utilisation simple et intuitive. Résultat : un outil bien plus efficace, adapté à mes besoins et prêt à évoluer. Je recommande vivement son accompagnement.",
      rating: 5,
      date: "Août 2025"
    },
    {
      id: "4",
      author: "Coralie Moiny",
      title: "Directrice Marketing",
      company: "#FeeCommTuVeux",
      content: "En tant que directrice marketing externalisée, je pilote plusieurs projets par client chaque mois. J'ai testé pas mal d'outils : trop chers, trop rigides. Rien ne collait. Christelle a changé la donne. Elle a écouté mes besoins réels et conçu MON outil. Celui qui me fait gagner du temps. Aujourd'hui, mon assistante et moi collaborons sur une plateforme fluide, fiable, sans superflu. Christelle digitalise intelligemment, sans usine à gaz. Pour digitaliser avec pragmatisme : foncez !",
      rating: 5,
      date: "Décembre 2025"
    }
  ];

  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Témoignages clients</h3>
        <div className="flex items-center justify-center gap-2">
          <Linkedin className="h-6 w-6 text-blue-600" />
          <a 
            href="https://www.linkedin.com/services/page/99439232a0ba4b836b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            Voir tous les avis LinkedIn
          </a>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {linkedInReviews.map((review) => (
          <Card key={review.id} className="border-border/50 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-primary/10">
              <Quote className="h-12 w-12" />
            </div>
            <CardContent className="pt-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 relative z-10">{review.content}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.title} • {review.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LinkedInReviewsCarousel;
