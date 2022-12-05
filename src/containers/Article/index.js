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
                      components={{
                        h2: ({ node, ...props }) => (
                          <h2 id={generateSlug(props.children[0])} {...props}>
                          </h2>
                        ),
                      }}
                      children={articles.data[0].attributes.content}
                    />
                    <p>
                      <Moment format="MMM Do YYYY">
                        {articles.data[0].attributes.published}
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

const generateSlug = (string) => {
  let str = string.replace(/^\s+|\s+$/g, "");
  str = str.toLowerCase();
  str = str
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return str;
};

export default ArticleContainer;
