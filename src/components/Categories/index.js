import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <div className="data-uk-grid">
        <div className="uk-align-center">
          <h2>Tags</h2>
          {categories.map((category) => {
            return (
              <Link
                to={`/category/${category.attributes.slug}`}
                className="uk-link-reset"
              >
                <div key={category.attributes.slug}>
                  <div>#{category.attributes.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
