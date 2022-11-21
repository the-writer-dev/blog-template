import React from "react";
import Card from "../Card";

const Articles = ({ articles }) => {
  return (
    <div>
      <div className="data-uk-grid">
        <div className="uk-align-center">
          {articles.map((article) => {
            return (
              <>
                <Card
                  article={article}
                  key={`article__${article.attributes.slug}`}
                />
                <hr className="uk-divider-icon" />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
