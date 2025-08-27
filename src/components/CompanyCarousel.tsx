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
      logo: "/src/assets/logos/ac2r-logo.png",
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

  // Duplicate companies for infinite scroll effect
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="mt-12 bg-white rounded-lg shadow-sm p-6 overflow-hidden">
      <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Nos Références Clients</h3>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-right">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center justify-center mx-12 flex-shrink-0 min-w-[160px]"
            >
              <img
                src={company.logo}
                alt={`Logo ${company.name}`}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CompanyCarousel;