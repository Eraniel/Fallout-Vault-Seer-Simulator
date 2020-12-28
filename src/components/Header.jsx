import React from "react";

function Header(props) {
  return (
    <header style={props.gameStart ? { height: "10%" } : { height: "50%" }}>
      <img src="img/logo2.png" alt="fallout vault-seer sim" />
      <div
        style={
          props.gameStart ? { display: "none" } : { display: "inline-block" }
        }
      >
        <h3>Greetings!</h3>
        <p>
          You was chosen as a new Vault-Seer. Try to be more successful then the
          one who was before you.
        </p>
      </div>
    </header>
  );
}

export default Header;
