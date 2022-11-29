import React from "react";
import { Link } from "react-router-dom";

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

const Card = ({ article }) => {
  const imageUrl = article.attributes.image.data.attributes.url;

  return (
    <Link to={`/article/${article.attributes.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-default">
        <div className="uk-card-body">
          <img
            className="uk-align-center"
            src={imageUrl}
            alt={article.attributes.image.url}
            height="100"
          />
          <p id="category" className="uk-text-uppercase">
            {article.attributes.category.data.attributes.name}
          </p>
          <p id="title" className="uk-text-large">
            {article.attributes.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Articles;
