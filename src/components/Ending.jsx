import React, { useState } from "react";
import EndingScreen from "./EndingScreen.jsx";

function Ending(props) {
  const [lastScreen, setLastScreen] = useState(false);

  function approve(event) {
    event.preventDefault();
    setLastScreen(true);
  }

  function decline(event) {
    event.preventDefault();
    setLastScreen(true);
  }

  return (
    <div className="event-main">
      <div className="event-field">
        <img className="event-img" src={props.img} alt="main-event" />
        <span>{props.textfield}</span>
      </div>

      <div className="event-buttons">
        <button className="event-button" onClick={decline}>
          Decline
        </button>
        <button className="event-button" onClick={approve}>
          Approve
        </button>
      </div>
      {lastScreen ? (
        <EndingScreen
          setGameover={props.setGameover}
          count={props.count}
          setCount={props.setCount}
          setAllBars={props.setAllBars}
        />
      ) : null}
    </div>
  );
}

export default Ending;
