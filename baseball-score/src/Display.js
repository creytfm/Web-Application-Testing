import React, { useState } from "react";
import Dashboard from "../src/Dashboard";

function Display() {
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);

  const ballSetter = () => {
    setBall(ball + 1);
  };

  const foulSetter = () => {
    setFoul(foul + 1);
  };

  return (
    <section>
      <div>
        <div>
          <Dashboard ballSetter={ballSetter} foulSetter={foulSetter} />
          <h2>Ball</h2>
          <h2>{ball}</h2>
          <h2>Foul</h2>
          <h2>{foul}</h2>
          {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Display;
