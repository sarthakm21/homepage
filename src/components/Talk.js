import { makeStyles, Grid } from "@material-ui/core";
import React from "react";
import GradientButton from "./GradientButton";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "60rem",
    margin: "0 auto",
    padding: "6rem",
    alignItems: "center",
    borderBottom: "1px solid #411e82",
  },
  text: {
    maxWidth: "20rem",
    fontSize: "1.4rem",
  },
}));

const Talk = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={1}></Grid>
      <Grid item xs={6} className={classes.text}>
        <span>Talk to us today about your revenue workflow</span>
      </Grid>
      <Grid item xs={4} className={classes.button}>
        <GradientButton>Schedule a Demo</GradientButton>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Talk;
