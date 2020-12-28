import React from "react";

function Footer(props) {
  const yearNow = new Date().getFullYear();

  return (
    <footer style={props.gameStart ? { height: "10%" } : { height: "50%" }}>
      <div>
        <p> From Bohdan with love</p>
        <p> Copyright © {yearNow} </p>
        <p className="footer-allrights">
          All rights for Fallout Universe reserved by Bethesda Game Studios
        </p>
      </div>
    </footer>
  );
}

export default Footer;
