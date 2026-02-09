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

      <div className="flex flex-col items-center gap-2 mt-12">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-6 w-6">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
            <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
          </svg>
          <span className="text-foreground font-semibold text-lg">12 avis</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <a 
          href="https://share.google/PDVdr4RjwOz1j1bRF"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4285F4] hover:underline font-medium"
        >
          Retrouver tous les avis sur Google
        </a>
      </div>
    </div>
  );
};

export default LinkedInReviewsCarousel;