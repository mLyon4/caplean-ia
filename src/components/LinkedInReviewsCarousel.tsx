import { Linkedin, Star, Quote } from "lucide-react";

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
      author: "Anne-Gaëlle de Kinkelin-Roux",
      title: "DG et Responsable du développement commercial",
      company: "AC2R",
      content: "Christelle nous a accompagné dans notre transition numérique. Grâce à son analyse très précise et à son état des lieux sans équivoque, nous avons pu changer de logiciel de gestion après 17 ans. C'est notre magicienne :)",
      rating: 5,
      date: "Septembre 2025"
    },
    {
      id: "2",
      author: "Céline Mansuy Ferreira", 
      title: "Consultante Free-lance",
      company: "Up Neo",
      content: "Une vraie pro 🤩 Christelle a pris le temps d'écouter mes besoins et s'y est très facilement adaptée, avec un grand sens pédagogique. Je suis devenue autonome avec « mon » Notion hyper rapidement! Je recommande les yeux fermés 🚀",
      rating: 5,
      date: "Juillet 2025"
    },
    {
      id: "3",
      author: "Quentin Forgeot",
      title: "CEO",
      company: "Fireco | Agence Meta Ads",
      content: "Son travail a été remarquable : elle a su structurer l'ensemble de manière claire et fluide, tout en gardant une logique d'utilisation simple et intuitive. Résultat : un outil bien plus efficace, adapté à mes besoins.",
      rating: 5,
      date: "Août 2025"
    },
    {
      id: "4",
      author: "Coralie Moiny",
      title: "Directrice Marketing",
      company: "#FeeCommTuVeux",
      content: "Christelle a changé la donne. Elle a écouté mes besoins réels et conçu MON outil. Aujourd'hui, mon assistante et moi collaborons sur une plateforme fluide, fiable, sans superflu. Pour digitaliser avec pragmatisme : foncez !",
      rating: 5,
      date: "Décembre 2025"
    }
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="section-title text-foreground mb-6">
          Témoignages <span className="text-gradient-secondary">clients</span>
        </h2>
        <div className="flex items-center justify-center gap-3">
          <Linkedin className="h-6 w-6 text-[#0077b5]" />
          <a 
            href="https://www.linkedin.com/services/page/99439232a0ba4b836b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077b5] hover:underline font-medium"
          >
            Voir tous les avis LinkedIn
          </a>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {linkedInReviews.map((review) => (
          <div 
            key={review.id} 
            className="glass-premium rounded-[2rem] p-8 relative overflow-hidden card-premium"
          >
            <div className="absolute top-6 right-6 text-secondary/10">
              <Quote className="h-20 w-20" />
            </div>
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-foreground mb-8 leading-relaxed text-lg">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.title}</p>
                  <p className="text-sm text-secondary font-medium">{review.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedInReviewsCarousel;