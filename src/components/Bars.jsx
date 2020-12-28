import React from "react";
import Bar from "./Bar.jsx";

function Bars(props) {
  return (
    <div className="progress-bars-main">
      <Bar name="Armory" bar={props.allBars.Armory} />
      <Bar name="Trust" bar={props.allBars.Trust} />
      <Bar name="Food" bar={props.allBars.Food} />
      <Bar name="Health" bar={props.allBars.Health} />
    </div>
  );
}
export default Bars;
