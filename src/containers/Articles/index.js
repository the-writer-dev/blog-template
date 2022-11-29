import React from "react";
import Articles from "../../components/Articles";
import Categories from "../../components/Categories";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import CATEGORIES_QUERY from "../../queries/category/categories";
import { motion } from "framer-motion";

const ArticlesContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <Query query={CATEGORIES_QUERY}>
            {({ data: { categories } }) => {
              return <Categories categories={categories.data} />;
            }}
          </Query>
        </div>
        <div className="uk-container uk-container-small">
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles.data} />;
            }}
          </Query>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticlesContainer;
