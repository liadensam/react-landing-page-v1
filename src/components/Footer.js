import "./Footer.css"

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <p tabIndex={10}>© liadensam 2022</p>
        <a className="link--footer" href="https://www.buymeacoffee.com/liadensam" target="_blind" rel="noreferrer" tabIndex={11}>Buy me a coffee :-)</a>
    </div>
  );
};

export default Footer;
