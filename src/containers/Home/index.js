import React from "react";
import ReactMarkdown from "react-markdown";
import Query from "../../components/Query";
import HOME_QUERY from "../../queries/home/home";
import Footer from "../../components/Footer/";
import Lottie from "lottie-react";
import shipAnimation from "./ship.json";
import { motion } from "framer-motion";

const lottieStyle = {
  height: 300,
};

const HomeContainer = () => {
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
          <Query query={HOME_QUERY}>
            {({ data: { homes } }) => {
              return (
                <ReactMarkdown
                  children={homes.data[0].attributes.intro}
                />
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
