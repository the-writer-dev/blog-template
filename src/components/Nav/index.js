import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import MENUS_QUERY from "../../queries/menu/menus";

const Nav = () => {
  return (
    <div>
      <Query query={MENUS_QUERY} id={null}>
        {({ data: { menus } }) => {
          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link to="/">Bite the Code</Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {menus.data.map((menu) => {
                      return (
                        <li key={menu.attributes.slug}>
                          <Link
                            to={`/${menu.attributes.slug}`}
                            className="uk-link-reset"
                          >
                            {menu.attributes.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;
