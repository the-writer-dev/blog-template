import React from "react";
import config from "./../../config.json";

const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;
const style = {
  background: "white",
};

const Footer = () => (
  <div className="uk-flex uk-flex-column">
    <div className="uk-align-container uk-align-center">
      <iframe
        src="https://bitethecode.substack.com/embed"
        width="480"
        height="320"
        style={style}
        frameborder="0"
        scrolling="no"
      >
      </iframe>
    </div>

    <div className="uk-align-container uk-align-center uk-text-center">
      © {yearTxt} {config.title}, All rights reserved
    </div>
  </div>
);

export default Footer;
