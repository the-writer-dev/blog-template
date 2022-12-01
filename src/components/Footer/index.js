import React from "react";
import config from "./../../config.json";

const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;

const Footer = () => (
  <div className="uk-aligh-container uk-align-center uk-text-center">
    © {yearTxt} {config.title}, All rights reserved
  </div>
);

export default Footer;
