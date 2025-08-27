import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface Company {
  name: string;
  logo: string;
  director: string;
  website: string;
}
const CompanyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const companies: Company[] = [{
    name: "AC2R",
    logo: "/src/assets/logos/ac2r-logo.png",
    director: "Anne-Gaëlle Roux",
    website: "https://www.ac2r.com/"
  }, {
    name: "ZDEC",
    logo: "/src/assets/logos/zdec-logo.png",
    director: "Rami Bouchedda",
    website: "https://www.perica.fr/annuaires/zdec/"
  }, {
    name: "Up Neo",
    logo: "/src/assets/logos/up-neo-logo.png",
    director: "Céline Mansuy Ferreira",
    website: "https://up-neo.com/"
  }, {
    name: "Fireco",
    logo: "https://via.placeholder.com/120x40/f59e0b/white?text=Fireco",
    director: "Quentin Forgeot",
    website: "https://fireco.agency/"
  }, {
    name: "Rosalog",
    logo: "/src/assets/logos/rosalog-logo.png",
    director: "Samuel Robert",
    website: "https://rosalog.com/"
  }];
  const nextCompany = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % companies.length);
  };
  const prevCompany = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + companies.length) % companies.length);
  };
  return (
    <div className="mt-12 bg-white dark:bg-card rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Nos Partenaires</h3>
      
      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={prevCompany}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105"
          aria-label="Entreprise précédente"
        >
          <ChevronLeft className="h-4 w-4 text-foreground" />
        </button>
        
        <button
          onClick={nextCompany}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105"
          aria-label="Entreprise suivante"
        >
          <ChevronRight className="h-4 w-4 text-foreground" />
        </button>

        {/* Company display */}
        <div className="mx-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img
              src={companies[currentIndex].logo}
              alt={`Logo ${companies[currentIndex].name}`}
              className="h-12 w-auto object-contain"
            />
            <div className="text-left">
              <h4 className="font-semibold text-lg text-foreground">{companies[currentIndex].name}</h4>
              <p className="text-muted-foreground">{companies[currentIndex].director}</p>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {companies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? "bg-primary scale-110" 
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Aller à l'entreprise ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CompanyCarousel;