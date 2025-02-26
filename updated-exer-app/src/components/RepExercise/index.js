import React, { useState } from "react";

function RepExercise({ exerciseName }) {
  const [repCount, setRepCount] = useState(0);

  return (
    <div>
      <p>Reps: {repCount}</p>
      <button onClick={() => setRepCount(repCount + 1)}>Complete Rep</button>
      <button onClick={() => setRepCount(0)}>Reset</button>
    </div>
  );
}

export default RepExercise;