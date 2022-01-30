import React, { useState, useEffect } from "react";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [exercises, setExercises] = useState([]);
  // const [target, setTarget] = useState([]);

  useEffect(() => {
    axios
      .get("https://exercisedb.p.rapidapi.com/exercises", {
        headers: {
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_EXERCISE_API_KEY,
        },
      })
      .then(function (response) {
        setExercises(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    //   axios
    //     .get("https://exercisedb.p.rapidapi.com/exercises/targetList", {
    //       headers: {
    //         "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    //         "x-rapidapi-key": process.env.REACT_APP_EXERCISE_API_KEY,
    //       },
    //     })
    //     .then(function (response) {
    //       console.log(response.data);
    //       setTarget(response.data);
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
  }, []);

  // the properties of an exercise:
  // bodyPart, equipment, gifUrl, id, name, & target

  console.log(
    exercises.filter(
      (exercise) =>
        exercise.bodyPart === "back" &&
        exercise.equipment === "body weight" &&
        exercise.target === "lats"
    )
  );

  return (
    <div className="App">
      <div>
        <h1>Work Out Workout</h1>
        <ul>
          {exercises
            .filter(
              (exercise) =>
                exercise.bodyPart === "back" &&
                exercise.equipment === "body weight"
            )
            .map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <img src={item.gifUrl} alt="demo" />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
