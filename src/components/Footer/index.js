import React from "react";
import config from "./../../config.json";

const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;
const style = {
  backgroundColor: "#fff",
  borderRadius: "10px",
};

const Footer = () => (
  <div className="uk-flex uk-flex-column">
    <iframe
      allowtransparency="true"
      style={style}
      src="https://bitethecode.substack.com/embed"
      frameborder="0"
      height="300"
      width="100%"
    >
    </iframe>

    <div className="uk-align-container uk-align-center uk-text-center">
      © {yearTxt} {config.title}, All rights reserved
    </div>
  </div>
);

export default Footer;
