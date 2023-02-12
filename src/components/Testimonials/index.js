import React from "react";
import ReactMarkdown from "react-markdown";
import Collapsible from "react-collapsible";

const Testimonials = ({ testimonials }) => {
  return (
    <div>
      <div className="uk-flex uk-flex-between">
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
  );
};

const style = {
  width: "50vh",
  backgroundColor: "rgba(181, 186, 199,0.3)",
  borderRadius: "10px",
};

const TestimonialCard = ({ testimonial }) => {
  console.log(testimonial);
  return (
    <div style={style} className="uk-card-small">
      <div class="uk-card-header">
        <h3 class="uk-card-title">{testimonial.attributes.name}</h3>
        <p className="uk-text">{testimonial.attributes.title}</p>
      </div>
      <div class="uk-card-body">
        <ReactMarkdown children={testimonial.attributes.preview} />
        <Collapsible trigger="Read More..." triggerWhenOpen="Read Less...">
          <br />
          <ReactMarkdown children={testimonial.attributes.description} />
        </Collapsible>
      </div>
    </div>
  );
};

export default Testimonials;
