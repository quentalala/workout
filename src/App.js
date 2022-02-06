import React, { useState, useEffect } from "react";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { Grid, Typography } from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Exercise from "./components/Exercise";

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
  }, []);

  // console.log(
  //   exercises.filter(
  //     (exercise) =>
  //       exercise.bodyPart === "back" &&
  //       exercise.equipment === "body weight" &&
  //       exercise.target === "lats"
  //   )
  // );

  return (
    <>
      <div className="App">
        <Header />
        <Typography variant="h1">Work Out Workout</Typography>
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
                <Exercise id={item.id} name={item.name} gifUrl={item.gifUrl} />
              ))}
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default App;
