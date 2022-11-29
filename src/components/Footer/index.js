import React from "react";

const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;

const Footer = () => (
  <div className="uk-aligh-container uk-align-center footer">
    © {yearTxt} Bite The Code, All rights reserved
  </div>
);

export default Footer;
