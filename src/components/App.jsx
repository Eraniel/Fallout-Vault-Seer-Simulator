import React, { useState } from "react";
import Bars from "./Bars.jsx";
import Counter from "./Counter.jsx";
import EventRendering from "./EventRendering.jsx";
import Header from "./Header.jsx";
import Footer from "./HFooter.jsx";

function App() {
  const [allBars, setAllBars] = useState({
    Armory: 50,
    Trust: 50,
    Food: 50,
    Health: 50
  });
  const [gameover, setGameover] = useState(false);
  const [count, setCount] = useState(0);
  const [ending, setEnding] = useState({});
  const [gameStart, setGameStart] = useState(false);

  // Object.keys(allBars).forEach(function (key) {
  //   if (allBars[key] >= 95) {
  //     setEnding({ name: key, value: 100 });
  //     setGameover(true);
  //   } else if (allBars[key] <= 5) {
  //     setEnding({ name: key, value: 0 });
  //     setGameover(true);
  //   } else {
  //   }
  // });

  return (
    <div>
      <Header gameStart={gameStart} />
      <Bars allBars={allBars} />
      <Counter count={count} />
      <EventRendering
        allBars={allBars}
        setAllBars={setAllBars}
        gameover={gameover}
        setGameover={setGameover}
        ending={ending}
        setEnding={setEnding}
        count={count}
        setCount={setCount}
        gameStart={gameStart}
        setGameStart={setGameStart}
      />
      <Footer gameStart={gameStart} />
    </div>
  );
}

export default App;
