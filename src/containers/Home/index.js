import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Query from "../../components/Query";
import HOME_QUERY from "../../queries/home/home";
import Footer from "../../components/Footer/";
import Testimonials from "../../components/Testimonials/";
import Lottie from "lottie-react";
import shipAnimation from "./ship.json";
import { motion } from "framer-motion";
import config from "./../../config.json";
import TESTIMONIALS_QUERY from "../../queries/testimonial/testimonials.js";

const lottieStyle = {
  height: 300,
};

const HomeContainer = () => {
  const [skip, setSkip] = useState(false);
  useEffect(() => {
    console.log(config);
    if (config.description != "" && config.contact) {
      setSkip(true);
    }
  }, []);

  // Stitch info to display as markdown
  const markdown = `
  ## Who I am 
  ${config.description}
  ## Where you can find me?
  ${config.contact}
  `;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Lottie
            animationData={shipAnimation}
            style={lottieStyle}
          />
          {skip
            ? (
              <ReactMarkdown
                children={markdown}
              />
            )
            : (
              <Query query={HOME_QUERY}>
                {({ data: { homes } }) => {
                  return (
                    <ReactMarkdown
                      children={homes.data[0].attributes.intro}
                    />
                  );
                }}
              </Query>
            )}
          <h2>People say I am ..</h2>
          <Query query={TESTIMONIALS_QUERY}>
            {({ data: { testimonials } }) => {
              return (
                <>
                  <Testimonials testimonials={testimonials.data} />
                </>
              );
            }}
          </Query>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default HomeContainer;
