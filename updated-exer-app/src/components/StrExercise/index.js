import React, { useState } from "react";

function WeightliftingExercise({ exerciseName }) {
  const [repCount, setRepCount] = useState(0);
  const [weight, setWeight] = useState("");
  const [workout, setWorkout] = useState([]);
  const [totalLifted, setTotalLifted] = useState(0);

  function handleWeightChange(e) {
    setWeight(e.target.value);
  }

  function addSet() {
    if (weight && repCount > 0) {
      let total = parseFloat(weight) * repCount;
      setWorkout([...workout, { weight: parseFloat(weight), reps: repCount, total }]);
      setTotalLifted(totalLifted + total);
      setRepCount(0);
    }
  }

  return (
    <div>
      <label>Weight (lbs): </label>
      <input type="num" value={weight} onChange={handleWeightChange} placeholder="Enter weight" />

      <p>Reps: {repCount}</p>
      <button onClick={() => setRepCount(repCount + 1)}>Complete Rep</button>
      <button onClick={() => setRepCount(0)}>Reset Reps</button>

      <button onClick={addSet}>Add Set</button>

      <p>History</p>
      <ul>
        {workout.map((set, index) => (
          <li key={index}>
            {set.weight} lbs × {set.reps} reps = {set.total} lbs lifted
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeightliftingExercise;
