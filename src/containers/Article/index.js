import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import ARTICLE_QUERY from "../../queries/article/article";

const Article = () => {
  let { slug } = useParams();

  return (
    <Query query={ARTICLE_QUERY} slug={slug}>
      {({ data: { articles } }) => {
        if (articles.data.length) {
          const imageUrl = process.env.NODE_ENV !== "development"
            ? articles.data[0].attributes.image.data.attributes.url
            : process.env.REACT_APP_BACKEND_URL +
              articles.data[0].attributes.image.data.attributes.url;

          return (
            <div>
              <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
              >
                <h1>{articles.data[0].attributes.title}</h1>
              </div>

              <div className="uk-section">
                <div className="uk-container uk-container-small">
                  <ReactMarkdown source={articles.data[0].attributes.content} />
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
  );
};

export default Article;
