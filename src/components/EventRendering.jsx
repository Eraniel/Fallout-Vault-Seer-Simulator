import React, { useState } from "react";
import Event from "./Event.jsx";
import Ending from "./Ending.jsx";
import eventList from "../eventlist.js";
import endingList from "../endingList.js";

function EventRendering(props) {
  const [randomEvent, setRandomEvent] = useState();

  ///

  function shuffle(eventList) {
    for (let i = eventList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [eventList[i], eventList[j]] = [eventList[j], eventList[i]];
    }
  }

  ///
  function nextEvent() {
    setRandomEvent(eventList[Math.floor(Math.random() * eventList.length)]); //shuffle maybe
  }

  function hideButton() {
    props.setGameStart(true);
    nextEvent();
  }
  ////
  function createEvent(newevent, index) {
    return (
      <Event
        key={index}
        index={index}
        nextEvent={nextEvent}
        img={newevent.img}
        textfield={newevent.textfield}
        effectOnDecline={newevent.effectOnDecline}
        effectOnApprove={newevent.effectOnApprove}
        count={props.count}
        setCount={props.setCount}
        allBars={props.allBars}
        setAllBars={props.setAllBars}
        setEnding={props.setEnding}
        setGameover={props.setGameover}
      />
    );
  }
  ////
  function createEnding(ending, index) {
    return (
      <Ending
        key={index}
        index={index}
        img={ending.img}
        textfield={ending.textfield}
        ending={props.ending}
        setGameover={props.setGameover}
        setRestart={props.setRestart}
        count={props.count}
        setCount={props.setCount}
        setAllBars={props.setAllBars}
      />
    );
  }
  //
  //
  return props.gameover ? (
    <div>
      {endingList
        .filter(
          (ending) =>
            ending.name === props.ending.name &&
            ending.value === props.ending.value
        )
        .map((ending, index) => createEnding(ending, index))}
    </div>
  ) : (
    <div>
      <button
        className="start-button"
        style={
          props.gameStart ? { display: "none" } : { display: "inline-block" }
        }
        onClick={hideButton}
      >
        Press to Start
      </button>
      {eventList
        .filter((newevent) => newevent === randomEvent)
        .map((newevent, index) => createEvent(newevent, index))}
    </div>
  );
}

export default EventRendering;
