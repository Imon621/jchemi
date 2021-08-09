import React from "react";
import ErrorIcon from "../error.png";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

export default function Error({ fetch }) {
  return (
    <div
      style={{
        height: 93 + "vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <img
        src={ErrorIcon}
        style={{ maxWidth: "60%", height: "auto" }}
        alt="error icon"
      />
      <br />
      <Typography variant="h5">Failed to load data from server.</Typography>
      <br />
      <Button onClick={fetch} variant="outlined" color="primary">
        Refresh
      </Button>
    </div>
  );
}
