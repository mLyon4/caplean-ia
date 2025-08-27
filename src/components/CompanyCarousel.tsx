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

  const companies: Company[] = [
    {
      name: "AC2R",
      logo: "/src/assets/logos/ac2r-logo.png",
      director: "Anne-Gaëlle Roux",
      website: "https://www.ac2r.com/"
    },
    {
      name: "ZDEC",
      logo: "/src/assets/logos/zdec-logo.png",
      director: "Rami Bouchedda",
      website: "https://www.perica.fr/annuaires/zdec/"
    },
    {
      name: "Up Neo",
      logo: "/src/assets/logos/up-neo-logo.png",
      director: "Céline Mansuy Ferreira",
      website: "https://up-neo.com/"
    },
    {
      name: "Fireco",
      logo: "https://via.placeholder.com/120x40/f59e0b/white?text=Fireco",
      director: "Quentin Forgeot",
      website: "https://fireco.agency/"
    },
    {
      name: "Rosalog",
      logo: "/src/assets/logos/rosalog-logo.png",
      director: "Samuel Robert",
      website: "https://rosalog.com/"
    }
  ];

  const nextCompany = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
  };

  const prevCompany = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + companies.length) % companies.length);
  };

  return (
    <div className="py-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevCompany}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105"
            aria-label="Société précédente"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          
          <button
            onClick={nextCompany}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105"
            aria-label="Société suivante"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Company container */}
          <div className="bg-white dark:bg-card rounded-lg shadow-md mx-8 p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-20 flex items-center justify-center bg-white rounded-lg p-3">
                <img
                  src={companies[currentIndex].logo}
                  alt={companies[currentIndex].name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {companies[currentIndex].name}
              </h3>
              <p className="text-lg text-muted-foreground">
                {companies[currentIndex].director}
              </p>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? "bg-primary scale-110" 
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Aller à ${companies[index].name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;