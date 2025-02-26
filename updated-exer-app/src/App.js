import React, { useState } from "react";
import './App.css';
import DurExercise from "./components/DurExercise";
import RepExercise from "./components/RepExercise";
import StrExercise from "./components/StrExercise";
import bicyclingIcon from "./img-bicycling.png";
import jumpingJackIcon from "./img-jumpingjack.png";
import pushUpIcon from "./img-pushup.png";
import runningIcon from "./img-running.png";
import sitUpIcon from "./img-situp.png";
import weightliftingIcon from "./img-weightlifting.png";

function App() {
  const [selection, setSelection] = useState(null);
  const [exerciseName, setExerciseName] = useState("");

  const exercise = (exerciseType, name) => {
    setSelection(exerciseType);
    setExerciseName(name);
  };

  if (selection === null) {
    return (
      <div>
        <h1>EXERCISES</h1>
        <button className="exerChoice" onClick={() => exercise("repetition", "Push Ups")}>          
          <img src={pushUpIcon} alt="Push up icon with #BBE40D coloring" width="25" height="25" />
          PUSH UPS
        </button>

        <button className="exerChoice" onClick={() => exercise("duration", "Bicycling")}>
          <img src={bicyclingIcon} alt="Bicycling icon with #BBE40D coloring" width="25" height="25" />
          BICYCLING
        </button>

        <button className="exerChoice" onClick={() => exercise("repetition", "Jumping Jacks")}>
          <img src={jumpingJackIcon} alt="Jumping jack icon with #BBE40D coloring" width="25" height="25" />
          JUMPING JACKS
        </button>

        <button className="exerChoice" onClick={() => exercise("duration", "Running")}>
          <img src={runningIcon} alt="Running icon with #BBE40D coloring" width="25" height="25" />
          RUNNING
        </button>

        <button className="exerChoice" onClick={() => exercise("repetition", "Sit Ups")}>
          <img src={sitUpIcon} alt="Sit up icon with #BBE40D coloring" width="25" height="25" />
          SIT UPS
        </button>

        <button className="exerChoice" onClick={() => exercise("strength", "Weightlifting")}>
          <img src={weightliftingIcon} alt="Wegihtlifting icon with #BBE40D coloring" width="25" height="25" />
          WEIGHTLIFTING
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>{exerciseName}</p>
      {selection === "repetition" ? (
        <RepExercise exerciseName={exerciseName} />
      ) : selection === "duration" ? (
        <DurExercise exerciseName={exerciseName} />
      ) : selection === "strength" ? (
        <StrExercise exerciseName={exerciseName} />
      ) : null}
      <button onClick={() => setSelection(null)}>Return</button>
    </div>
  );
}

export default App;
