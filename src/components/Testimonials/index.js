import React from "react";

const Testimonials = ({ testimonials }) => {
  return (
    <div>
      <div className="data-uk-grid">
        <div className="uk-align-center">
          {testimonials.map((testimonial) => {
            return (
              <>
                <TestimonialCard
                  article={testimonial}
                  key={`testimonial_${testimonial.attributes.name}`}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="uk-card uk-card-default">
      <div className="uk-card-body">
        <p className="uk-text-uppercase">{testimonial.attributes.name}</p>
        <p className="uk-text-large">{testimonial.attributes.title}</p>
        <p>{testimonial.attributes.description}</p>
      </div>
    </div>
  );
};
