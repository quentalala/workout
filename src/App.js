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

  return (
    <>
      <div className="App">
        <Header />
        <Typography
          variant="h2"
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          Work Out Workout
        </Typography>
        <Grid container display={"flex"} justifyContent={"center"}>
          <Grid item xs={12} md={3} display={"flex"} justifyContent={"center"}>
            <Typography>Filter Values</Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container display={"flex"} justifyContent={"center"}>
              {exercises
                .filter(
                  (exercise) =>
                    exercise.bodyPart === "back" &&
                    exercise.equipment === "body weight"
                )
                .map((item) => (
                  <Exercise
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    gifUrl={item.gifUrl}
                  />
                ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default App;
