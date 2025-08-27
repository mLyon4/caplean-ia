import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialItem from "./TestimonialItem";
import CompanyCarousel from "./CompanyCarousel";
import LinkedInReviewsCarousel from "./LinkedInReviewsCarousel";
const TestSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    content: "Accompagnement au changement d'ERP pour gagner en productivité et mise en place d'un système sur Notion pour gérer nos données RH et Services généraux.",
    author: "Anne-Gaëlle Roux",
    title: "Dirigeante",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    company: "AC2R",
    logo: "/src/assets/logos/ac2r-logo.png"
  }, {
    content: "Accompagnement au changement d'ERP pour gagner en productivité et mise en place d'un système sur Notion pour gérer nos données RH et Services généraux.",
    author: "Rami Bouchedda",
    title: "Dirigeant",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    company: "ZDEC",
    logo: "/src/assets/logos/zdec-logo.png"
  }, {
    content: "Mise en place d'un système Notion sur mesure. Une vraie pro 🤩 J'ai fait appel aux services de Christelle pour la création de mon espace Notion. Après quelques mois d'activité en tant que free-lance, je commençais à avoir des informations un peu partout, sous différents formats, et j'avais besoin de structurer! Christelle a pris le temps d'écouter mes besoins et s'y est très facilement adaptée, avec un grand sens pédagogique, de sorte que je suis devenue autonome avec « mon » Notion hyper rapidement! Je recommande les yeux fermés 🚀",
    author: "Céline Mansuy Ferreira",
    title: "Free-lance",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    company: "Up Neo",
    logo: "/src/assets/logos/up-neo-logo.png"
  }, {
    content: "Mise en place d'un système Notion sur mesure pour gérer le croissance de son entreprise.",
    author: "Quentin Forgeot",
    title: "Dirigeant",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    company: "Fireco",
    logo: "https://via.placeholder.com/120x40/f59e0b/white?text=Fireco"
  }, {
    content: "Gestion de projet et accompagnement au changement pour la montée de version de Rosalog chez des clients historiques ayant des spécificités fonctionnelles.",
    author: "Samuel Robert",
    title: "Dirigeant",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    company: "Rosalog",
    logo: "/src/assets/logos/rosalog-logo.png"
  }];
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  return <section id="testimonials" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Ils nous font confiance</h2>
          
          
          
          {/* Company carousel */}
          <CompanyCarousel />
          
          {/* LinkedIn Reviews carousel */}
          <LinkedInReviewsCarousel />
        </div>
      </div>
    </section>;
};
export default TestSection;