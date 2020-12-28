import React from "react";

function Event(props) {
  const a = props.allBars.Armory + props.effectOnDecline.Armory;
  const t = props.allBars.Trust + props.effectOnDecline.Trust;
  const f = props.allBars.Food + props.effectOnDecline.Food;
  const h = props.allBars.Health + props.effectOnDecline.Health;
  let changedAllBars = { Armory: a, Trust: t, Food: f, Health: h };

  const a1 = props.allBars.Armory + props.effectOnApprove.Armory;
  const t1 = props.allBars.Trust + props.effectOnApprove.Trust;
  const f1 = props.allBars.Food + props.effectOnApprove.Food;
  const h1 = props.allBars.Health + props.effectOnApprove.Health;
  let changedAllBars1 = { Armory: a1, Trust: t1, Food: f1, Health: h1 };

  // function sum() {
  //   let sum = {};
  //   Object.keys(props.allBars).forEach((key) => {
  //     if (props.effectOnApprove.hasOwnProperty(key)) {
  //       sum[key] = props.allBars[key] + props.effectOnApprove[key];
  //     }
  //   });
  //   return sum;
  // }

  // function sum1() {
  //   let sum1 = {};
  //   Object.keys(props.allBars).forEach((key) => {
  //     if (props.effectOnDecline.hasOwnProperty(key)) {
  //       sum[key] = props.allBars[key] + props.effectOnDecline[key];
  //     }
  //   });
  //   return sum1;
  // }

  Object.keys(props.allBars).forEach(function (key) {
    if (props.allBars[key] >= 100) {
      props.setEnding({ name: key, value: 100 });
      props.setGameover(true);
    } else if (props.allBars[key] <= 5) {
      props.setEnding({ name: key, value: 0 });
      props.setGameover(true);
    } else {
    }
  });

  function decline(event) {
    event.preventDefault();
    props.setAllBars(changedAllBars);
    props.nextEvent();
    props.setCount(props.count + 1);
  }
  function approve(event) {
    event.preventDefault();
    props.setAllBars(changedAllBars1);
    props.nextEvent();
    props.setCount(props.count + 1);
  }

  return (
    <div className="event-main">
      <div className="event-field">
        <img className="event-img" src={props.img} alt="main-event" />
        <span className="event-text">{props.textfield}</span>
      </div>
      <div className="event-buttons">
        <button className="event-button" onClick={decline}>
          Decline
        </button>
        <button className="event-button" onClick={approve}>
          Approve
        </button>
      </div>
    </div>
  );
}

export default Event;
