import React from "react";
import Card from "../Card";

const Articles = ({ articles }) => {
  return (
    <div>
      <div data-uk-grid>
        <div class="uk-align-center">
          {articles.map((article) => {
            return (
              <div>
                <Card
                  article={article}
                  key={`article__${article.attributes.slug}`}
                />
                <hr class="uk-divider-icon"/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
