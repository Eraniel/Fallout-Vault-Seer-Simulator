import React from "react";

function EndingScreen(props) {
  function toDefault() {
    props.setGameover(false);
    props.setCount(0);
    props.setAllBars({ Armory: 50, Trust: 50, Food: 50, Health: 50 });
  }

  return (
    <div className="ending-main">
      <div className="ending-text">
        <h1>Everything ends...</h1>
        <h3>At least you was successful during {props.count} days.</h3>
      </div>
      <button className="ending-button" onClick={toDefault}>
        Play Again!
      </button>
    </div>
  );
}

export default EndingScreen;
