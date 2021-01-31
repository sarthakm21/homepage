import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import GradientButton from "./GradientButton";
import SecondaryButton from "./SecondaryButton";

const useStyle = makeStyles(() => ({
  title: {
    fontWeight: 650,
    fontSize: "45px",
    letterSpacing: "-.8px",
  },
  hero: {
    margin: "10rem 0 5rem 0",
    padding: "2rem",
  },
  desc: {
    fontSize: "1.1rem",
    fontWeight: 400,
    margin: "1.5rem 0",
    maxWidth: "28rem",
  },
  buttonGroup: {
    margin: "0 8rem",
    padding: "2rem",
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

const Hero = () => {
  const classes = useStyle();
  return (
    <section className={classes.hero}>
      <div>
        <h1>
          <Typography
            className={classes.title}
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            Subscription Billing & Revenue Operations
          </Typography>
          <Typography className={classes.title}>
            {" "}
            for Fast-growth B2B SaaS
          </Typography>
        </h1>
      </div>
      <div className={classes.desc}>
        Get the operational sophistication to achieve, sustain, and scale
        recurring revenue.
      </div>
      <div className={classes.buttonGroup}>
        <GradientButton className={classes.button}>
          Schedule a Demo
        </GradientButton>
        <SecondaryButton className={classes.button} size="lg">
          Sign up for free
        </SecondaryButton>
      </div>
    </section>
  );
};

export default Hero;
