import { Heart } from "lucide-react";

interface Company {
  name: string;
  logo: string;
  director: string;
  website: string;
}

const CompanyCarousel = () => {
  const companies: Company[] = [
    {
      name: "AC2R",
      logo: "/lovable-uploads/39196d8c-0542-406b-b7ad-51e771eae56a.png",
      director: "Anne-Gaëlle Roux",
      website: "https://www.ac2r.com/"
    },
    {
      name: "ZDEC",
      logo: "/lovable-uploads/abec6c71-f519-4115-a580-545944c988d5.png",
      director: "Rami Bouchedda",
      website: "https://www.perica.fr/annuaires/zdec/"
    },
    {
      name: "Up Neo",
      logo: "/lovable-uploads/46aedefe-2d5e-46ce-b22d-3a151da26b60.png",
      director: "Céline Mansuy Ferreira",
      website: "https://up-neo.com/"
    },
    {
      name: "Fireco",
      logo: "/lovable-uploads/fe2cff57-abcf-43b0-b42c-910b0cb4f724.png",
      director: "Quentin Forgeot",
      website: "https://fireco.agency/"
    },
    {
      name: "Rosalog",
      logo: "/lovable-uploads/dac45283-edcc-4cc4-a4f0-94ddaa97836f.png",
      director: "Samuel Robert",
      website: "https://rosalog.com/"
    },
    {
      name: "#FeeCommTuVeux",
      logo: "/lovable-uploads/feecommtuveux-logo.jpg",
      director: "Coralie Moiny",
      website: "https://feecommtuveux.fr/"
    }
  ];

  return (
    <section className="py-12 bg-secondary rounded-3xl mx-4 md:mx-8 lg:mx-16 -mt-8 relative z-10 shadow-glow-secondary">
      {/* Title */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <Heart className="w-6 h-6 text-white fill-white" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Ils me font confiance
        </h2>
        <Heart className="w-6 h-6 text-white fill-white" />
      </div>
      
      {/* Logos */}
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center group transition-transform duration-300 hover:scale-110"
            >
              <div className="bg-white/95 rounded-xl p-3 shadow-md">
                <img
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain max-w-[70px] md:max-w-[90px] lg:max-w-[100px]"
                />
              </div>
              {(company.name === "Rosalog" || company.name === "#FeeCommTuVeux" || company.name === "Up Neo") && (
                <span className="text-xs font-medium text-white/90 mt-2">
                  {company.name === "Up Neo" ? "Up Néo" : company.name}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCarousel;