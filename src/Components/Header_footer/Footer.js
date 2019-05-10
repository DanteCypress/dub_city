import React from "react";
import { GSWLogo1 } from "../UI/icons";
const Footer = () => {
  return (
    <footer
      className="bck_blue"
      style={{
        borderTop: "2px solid #26282A"
      }}
    >
      <div className="footer_logo">
        <GSWLogo1 linkTo="/" link={true} width="100px" height="100px" />
      </div>
      <div className="footer_discl">LOREM ISPSUM</div>
    </footer>
  );
};

export default Footer;
