import React, { useState, useEffect } from "react";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { Grid, Typography, Card } from "@mui/material";

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
      <h1>Work Out Workout</h1>
      <Grid container>
        <Grid item xs={3}>
          <Typography>Filter Values</Typography>
        </Grid>
        <Grid container xs={9} display={"flex"}>
          {exercises
            .filter(
              (exercise) =>
                exercise.bodyPart === "back" &&
                exercise.equipment === "body weight"
            )
            .map((item) => (
              <Card xs={3} style={{ maxWidth: "350px", margin: "1rem" }}>
                <li
                  key={item.id}
                  style={{ listStyle: "none", overflow: "scroll" }}
                >
                  <h3
                    style={{
                      margin: "0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.name}
                  </h3>
                  <div style={{ maxHeight: "420px", maxWidth: "350px" }}>
                    <img
                      src={item.gifUrl}
                      alt="demo"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </li>
              </Card>
            ))}
        </Grid>{" "}
      </Grid>
    </div>
  );
}

export default App;
