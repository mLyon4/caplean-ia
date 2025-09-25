import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Linkedin } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

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
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % linkedInReviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + linkedInReviews.length) % linkedInReviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="mt-12 bg-white dark:bg-card rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-center mb-6">
        <Linkedin className="h-6 w-6 text-blue-600 mr-2" />
        <a 
          href="https://www.linkedin.com/services/page/99439232a0ba4b836b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-200"
        >
          Avis LinkedIn Services
        </a>
      </div>
      
      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={prevReview}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105"
          aria-label="Avis précédent"
        >
          <ChevronLeft className="h-4 w-4 text-foreground" />
        </button>
        
        <button
          onClick={nextReview}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105"
          aria-label="Avis suivant"
        >
          <ChevronRight className="h-4 w-4 text-foreground" />
        </button>

        {/* Review content */}
        <div className="mx-8">
          <div className="text-center space-y-4">
            {/* Rating */}
            <div className="flex justify-center space-x-1">
              {renderStars(linkedInReviews[currentIndex].rating)}
            </div>
            
            {/* Content */}
            <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
              "{linkedInReviews[currentIndex].content}"
            </blockquote>
            
            {/* Author info */}
            <div className="border-t pt-4 mt-4">
              <p className="font-semibold text-foreground">
                {linkedInReviews[currentIndex].author}
              </p>
              <p className="text-sm text-muted-foreground">
                {linkedInReviews[currentIndex].title} • {linkedInReviews[currentIndex].company}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {linkedInReviews[currentIndex].date}
              </p>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {linkedInReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? "bg-primary scale-110" 
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Aller à l'avis ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkedInReviewsCarousel;