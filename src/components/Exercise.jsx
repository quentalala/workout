import React from "react";
import { Typography, Card } from "@mui/material";

const Exercise = ({ id, name, gifUrl }) => {
  return (
    <Card xs={3} style={{ maxWidth: "350px", margin: "1rem" }}>
      <li key={id} style={{ listStyle: "none", overflow: "scroll" }}>
        <Typography
          variant="h5"
          style={{
            margin: "1rem 0 1rem",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
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
  );
};

export default Exercise;
