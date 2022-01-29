import React, { useState, useEffect } from "react";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("https://exercisedb.p.rapidapi.com/exercises", {
        headers: {
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_EXERCISE_API_KEY,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setExercises(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(exercises);

  return (
    <div className="App">
      <div>
        <h1>Work Out Workout</h1>
      </div>
    </div>
  );
}

export default App;
