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
      logo: "/lovable-uploads/fe2cff57-abcf-43b0-b42c-910b0cb4f724.png",
      director: "Quentin Forgeot",
      website: "https://fireco.agency/"
    },
    {
      name: "Rosalog",
      logo: "/lovable-uploads/dac45283-edcc-4cc4-a4f0-94ddaa97836f.png",
      director: "Samuel Robert",
      website: "https://rosalog.com/"
    }
  ];

  // Duplicate companies for infinite scroll effect
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="mt-12 bg-white rounded-lg shadow-sm p-6 overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-right">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center justify-center mx-12 flex-shrink-0 min-w-[160px]"
            >
              <div className="flex items-center gap-3">
                <img
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  className="h-16 w-auto object-contain"
                />
                {company.name === "Rosalog" && (
                  <span className="text-lg font-semibold text-gray-700">Rosalog</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CompanyCarousel;