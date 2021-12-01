import React, { useState, useEffect } from "react";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [exercises, setExercises] = useState([]);
  // const [exercises, setExercises] = useState([
  //   {
  //     name: "Pull-ups",
  //     id: uuidv4(),
  //   },
  //   {
  //     name: "Seated Row",
  //     id: uuidv4(),
  //   },
  //   {
  //     name: "Scapular Raises",
  //     id: uuidv4(),
  //   },
  // ]);

  useEffect(() => {
    axios
      .get("https://v1.exercisedb.io/api/exercises", {
        headers: {
          authorization: process.env.REACT_APP_EXERCISE_API_KEY,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setExercises(res.data);
        console.log(exercises);
      })
      .catch((err) => console.log(err));
  }, [exercises]);

  return (
    <div className="App">
      <div>
        <h1>Workout Work Out</h1>
        {/* <ul>
          {exercises.map((exercise) => (
            <li key={exercise.id}>{exercise.name}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default App;
