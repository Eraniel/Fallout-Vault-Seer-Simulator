import React from "react";

function Bar(props) {
  let bar = props.bar;

  return (
    <div className="progress-bars-sec">
      <h2 className="progress-bars-h2">{props.name}</h2>
      <div className="progress-bars-empty">
        <div className="progress-bars-full" style={{ width: bar + "%" }}></div>
      </div>
    </div>
  );
}
export default Bar;
