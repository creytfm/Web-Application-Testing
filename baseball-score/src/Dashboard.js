import React from "react";
import "./App.css";

function Dashboard(props) {
  console.log(props);

  return (
    <div>
      <section>
        <div>
          <button
            onClick={() => {
              props.ballSetter();
            }}
          >
            ball
          </button>
          <button
            onClick={() => {
              props.foulSetter();
            }}
          >
            foul
          </button>
          <button
            onClick={() => {
              props.outSetter();
            }}
          >
            out
          </button>
          <button
            onClick={() => {
              props.strikeSetter();
            }}
          >
            strike
          </button>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
