import React from "react";

const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;
//
// const style = {
//   position: "fixed",
//   padding: "8px",
//   left: 0,
//   botton: 0,
//   right: 0,
//   width: "100vw",
//   textAlign: "center",
// };

const Footer = () => (
  <div className="uk-aligh-container uk-align-center footer">
    © {yearTxt} Bite The Code, All rights reserved
  </div>
);

export default Footer;
