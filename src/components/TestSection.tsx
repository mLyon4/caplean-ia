import { useState } from "react";
import LinkedInReviewsCarousel from "./LinkedInReviewsCarousel";

const TestSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Ils nous font confiance
          </h2>
          
          {/* LinkedIn Reviews carousel */}
          <LinkedInReviewsCarousel />
        </div>
      </div>
    </section>
  );
};

export default TestSection;
