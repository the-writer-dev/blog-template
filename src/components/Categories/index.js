import React from "react";
import { Link } from "react-router-dom";

const style = {
  padding: "5px",
  margin: "2px",
  backgroundColor: "#FFDAD2",
  textDecoration: "none",
  borderRadius: "5px",
  display: "inline-block",
};
const Categories = ({ categories }) => {
  return (
    <div>
      <div className="data-uk-grid">
        <h2>Tags</h2>
        <div className="uk-flex uk-flex-center uk-flex-column uk-flex-item-auto">
          {categories.map((category) => {
            return (
              <Link
                to={`/category/${category.attributes.slug}`}
                className="uk-link-reset"
              >
                <div style={style} key={category.attributes.slug}>
                  #{category.attributes.name}
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
