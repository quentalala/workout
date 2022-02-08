import React from "react";
import { Grid, Typography, Card } from "@mui/material";

const Exercise = ({ id, name, gifUrl }) => {
  return (
    <Grid item key={id}>
      <Card xs={3} style={{ maxWidth: "350px", margin: "1rem" }}>
        <li style={{ listStyle: "none" }}>
          <Typography
            variant="h5"
            style={{
              margin: "1rem 0 1rem",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              //   whiteSpace: "nowrap",
              //   textOverflow: "ellipsis",
              //   overflow: "scroll",
            }}
          >
            {name}
          </Typography>
          <div style={{ maxHeight: "420px", maxWidth: "350px" }}>
            <img
              src={gifUrl}
              alt="demo"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </li>
      </Card>
    </Grid>
  );
};

export default Exercise;
