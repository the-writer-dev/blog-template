import React from "react";
import ReactMarkdown from "react-markdown";

const Testimonials = ({ testimonials }) => {
  return (
    <div>
      <div className="data-uk-grid">
        <div className="uk-align-center">
          {testimonials.map((testimonial) => {
            return (
              <>
                <TestimonialCard
                  testimonial={testimonial}
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

const style = {
  width: "50vh",
  backgroundColor: "rgba(24, 69, 89,0.3)",
  borderRadius: "10px",
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div style={style} className="uk-card-small">
      <div class="uk-card-header">
        <h3 class="uk-card-title">{testimonial.attributes.name}</h3>
        <p className="uk-text">{testimonial.attributes.title}</p>
      </div>
      <div className="uk-card-body">
        <ReactMarkdown children={testimonial.attributes.description} />
      </div>
    </div>
  );
};

export default Testimonials;
