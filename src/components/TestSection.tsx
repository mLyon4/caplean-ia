import TestimonialItem from "./TestimonialItem";

const TestSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <TestimonialItem
            content="Excellent travail sur l'automatisation de nos processus. L'équipe a su comprendre nos besoins et livrer une solution parfaitement adaptée."
            author="Jean Dupont"
            title="PDG"
            avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            rating={5}
            company="TechCorp"
            logo="https://via.placeholder.com/120x40/6366f1/white?text=TechCorp"
          />
        </div>
      </div>
    </section>
  );
};

export default TestSection;