import React, { useState } from "react";
import Dashboard from "../src/Dashboard";

function Display() {
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);
  const [strike, setStrike] = useState(0);
  const [out, setOut] = useState(0);


  let ballSetter = () => {
    setBall(ball + 1);
  };
  const foulSetter = () => {
    setFoul(foul + 1);
  };
  const outSetter = () => {
    setOut(out + 1);
  };
  const strikeSetter = () => {
    setStrike(strike + 1);
  };


  

  return (
    <section>
      <div>
        <div className ="left">
          
          <h2>Ball</h2>
          <h2>{ball}</h2>
          <h2>Foul</h2>
          <h2>{foul}</h2>
          
          <div className="right">
          <h2>Out</h2>
          <h2>{out}</h2>
          <h2>Strike</h2>
          <h2>{strike}</h2>
          <Dashboard ballSetter={ballSetter} foulSetter={foulSetter} outSetter={outSetter} strikeSetter={strikeSetter} />
          </div>
        </div>    
      </div>
    </section>
  );
}

export default Display;
