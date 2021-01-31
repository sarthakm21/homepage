import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "white",
    color: theme.palette.secondary.main,
    border: "1px solid " + theme.palette.secondary.main,
    fontWeight: "500",
    fontSize: "20px",
    textTransform: "none",
    padding: "0.5rem 1rem",
    transition: "0.2s ease-in",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  buttonsm: {
    fontWeight: "500",
    fontSize: "10px",
    textTransform: "none",
    padding: "0.2rem 0.5rem",
  },
}));

const SecondaryButton = ({ children, size }) => {
  const classes = useStyles();
  return (
    <Button
      className={
        size === "lg" ? classes.button : `${classes.button} ${classes.buttonsm}`
      }
    >
      {children ? children : "Learn More"}
      <ArrowForwardIcon />
    </Button>
  );
};

export default SecondaryButton;
