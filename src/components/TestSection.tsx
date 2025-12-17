import LinkedInReviewsCarousel from "./LinkedInReviewsCarousel";

const TestSection = () => {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* LinkedIn Reviews carousel */}
          <LinkedInReviewsCarousel />
        </div>
      </div>
    </section>
  );
};

export default TestSection;