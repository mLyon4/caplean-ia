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
  return;
};
export default CompanyCarousel;