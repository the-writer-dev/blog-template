import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import ARTICLE_QUERY from "../../queries/article/article";
import { motion } from "framer-motion";

const ArticleContainer = () => {
  let { slug } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Query query={ARTICLE_QUERY} slug={slug}>
        {({ data: { articles } }) => {
          if (articles.data.length) {
            return (
              <div>
                <div className="uk-section">
                  <div className="uk-container uk-container-small">
                    <ReactMarkdown
                      children={articles.data[0].attributes.content}
                    />
                    <p>
                      <Moment format="MMM Do YYYY">
                        {articles.data[0].attributes.published_at}
                      </Moment>
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </Query>
    </motion.div>
  );
};

export default ArticleContainer;
