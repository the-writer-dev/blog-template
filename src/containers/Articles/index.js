import React, { useState } from "react";
import Articles from "../../components/Articles";
import Categories from "../../components/Categories";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import CATEGORIES_QUERY from "../../queries/category/categories";

const ArticlesContainer = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <Query query={CATEGORIES_QUERY}>
            {({ data: { categories } }) => {
              return (
                <>
                  <Categories categories={categories.data} />
                </>
              );
            }}
          </Query>
        </div>

        <div className="uk-container uk-container-small">
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return (
                <>
                  <input
                    type="text"
                    placeholder="Search Articles.."
                    onChange={handleChange}
                    value={searchText}
                  />
                  <Articles searchText={searchText} articles={articles.data} />
                </>
              );
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default ArticlesContainer;
