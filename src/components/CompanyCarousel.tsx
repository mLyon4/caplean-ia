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
    <div className="mt-12 w-full bg-white rounded-lg shadow-sm py-6 md:py-8 px-4 md:px-8 border">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-12">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={company.logo}
              alt={`Logo ${company.name}`}
              className="h-12 md:h-16 lg:h-20 w-auto object-contain max-w-[80px] md:max-w-[100px] lg:max-w-[120px]"
            />
            {(company.name === "Rosalog" || company.name === "#FeeCommTuVeux") && (
              <span className="text-xs md:text-sm font-semibold text-foreground mt-2">{company.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CompanyCarousel;