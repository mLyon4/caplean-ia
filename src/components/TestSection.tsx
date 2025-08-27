import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialItem from "./TestimonialItem";

const TestSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      content: "Excellent travail sur l'automatisation de nos processus. L'équipe a su comprendre nos besoins et livrer une solution parfaitement adaptée.",
      author: "Jean Dupont",
      title: "PDG",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
      company: "TechCorp",
      logo: "https://via.placeholder.com/120x40/6366f1/white?text=TechCorp"
    },
    {
      content: "La mise en place de notre ERP avec Christelle a été un véritable succès. Professionnalisme et expertise au rendez-vous.",
      author: "Marie Laurent",
      title: "Directrice",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
      company: "InnovCorp",
      logo: "https://via.placeholder.com/120x40/10b981/white?text=InnovCorp"
    },
    {
      content: "Grâce à l'implémentation Notion et aux automatisations, notre productivité a augmenté de 40%. Merci pour ce travail exceptionnel.",
      author: "Pierre Martin",
      title: "Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
      company: "StartupXYZ",
      logo: "https://via.placeholder.com/120x40/f59e0b/white?text=StartupXYZ"
    },
    {
      content: "L'accompagnement personnalisé et la formation de l'équipe ont été parfaits. Nous recommandons vivement leurs services.",
      author: "Sophie Dubois",
      title: "Responsable IT",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
      company: "DigitalFlow",
      logo: "https://via.placeholder.com/120x40/8b5cf6/white?text=DigitalFlow"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Ce Que Disent Nos Clients</h2>
          
          <div className="relative">
            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-105"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-105"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>

            {/* Testimonial container */}
            <div className="bg-white dark:bg-card rounded-lg shadow-lg mx-8">
              <TestimonialItem
                {...testimonials[currentIndex]}
              />
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? "bg-primary scale-110" 
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSection;