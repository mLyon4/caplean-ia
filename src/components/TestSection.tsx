import LinkedInReviewsCarousel from "./LinkedInReviewsCarousel";

const TestSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* LinkedIn Reviews carousel */}
          <LinkedInReviewsCarousel />
        </div>
      </div>
    </section>
  );
};

export default TestSection;
