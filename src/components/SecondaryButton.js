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
}));

const SecondaryButton = ({ children }) => {
  const classes = useStyles();
  return (
    <Button className={classes.button}>
      {children}
      <ArrowForwardIcon />
    </Button>
  );
};

export default SecondaryButton;
