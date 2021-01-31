import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  info: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 5rem",
    maxWidth: "100rem",
    margin: "0 auto",
    color: "white",
  },
  children: {
    maxWidth: "40rem",
    padding: "2rem",
  },
  text: {
    maxWidth: "25rem",
    fontSize: "1.1rem",
    opacity: ".75",
    fontWeight: "400",
  },
  subtitle: {
    color: "#ff7846",
    fontFamily: "monospace",
    fontSize: "1.1rem",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  image: {
    maxWidth: "20rem",
  },
}));
const BriefDetails = ({ src, orientation, ...props }) => {
  const classes = useStyles();
  return (
    <section>
      <Grid item container xs={12} sm={6} className={classes.children}>
        <div>
          <p className={classes.subtitle}>{props.subtitle}</p>
          <h2>{props.title}</h2>
          <img className={classes.image} src={src} alt="infographic" />
          <div className={classes.text}>{props.info}</div>
        </div>
      </Grid>
    </section>
  );
};

export default BriefDetails;
