import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  button: {
    alignItems: "center",
    backgroundImage:
      "linear-gradient(180deg,rgba(255,255,255,.18) 0,rgba(0,0,0,.18) 100%)",
    background: theme.palette.primary.main,
    color: "white",
    fontWeight: "500",
    fontSize: "20px",
    textTransform: "none",
    padding: "0.5rem 1rem",
    transition: "0.2s ease-in",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      boxShadow:
        "0 1px 1px 0 rgb(90 122 190 / 10%), 0 10px 20px 0 rgb(90 122 190 / 20%)",
    },
    boxShadow:
      "0 2px 10px 0 rgb(0 4 48 / 8%), 0 8px 8px 0 rgb(0 4 48 / 12%), 0 12px 21px 0 rgb(0 4 48 / 24%)",
  },
  arrow: {
    transform: "translateX(4px)",
  },
}));

const GradientButton = ({ children }) => {
  const classes = useStyles();
  return (
    <Button className={classes.button}>
      {children}
      <ArrowForwardIcon />
    </Button>
  );
};

export default GradientButton;
