import React from "react";
import { Paper, Grid } from "@material-ui/core";

const Welcome = () => (
  <div className="row align-items-center vh-100">
    <Grid container direction="row" justifyContent="center">
      <Grid item xs={6}>
        <Paper elevation={0} className="border rounded text-center">
          Welcome
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default Welcome;
