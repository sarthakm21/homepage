import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CheckIcon from "@material-ui/icons/Check";
import SecondaryButton from "./SecondaryButton";
import React from "react";

const useStyles = makeStyles((theme) => ({
  info: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 5rem",
    maxWidth: "80rem",
    margin: "0 auto",
  },
  children: {
    padding: "2rem",
  },
  text: {
    maxWidth: "25rem",
    fontSize: "1.2rem",
    fontWeight: "400",
  },
  subtitle: {
    color: theme.palette.secondary.main,
    fontFamily: "monospace",
    fontSize: "1.1rem",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  icon: {
    color: "green",
  },
}));
const Info = ({ src, orientation, ...props }) => {
  const classes = useStyles();
  return orientation === "l" ? (
    <section>
      <Grid container className={classes.info}>
        <Grid item container xs={12} md={6} className={classes.children}>
          <div>
            <p className={classes.subtitle}>{props.subtitle}</p>
            <h2>{props.title}</h2>
            <div className={classes.text}>{props.info}</div>
          </div>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <CheckIcon className={classes.icon}></CheckIcon>
              {props.pointers[0]}
            </Grid>
            <Grid item xs={6}>
              <CheckIcon className={classes.icon}></CheckIcon>
              {props.pointers[1]}
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <CheckIcon className={classes.icon}></CheckIcon>
              {props.pointers[2]}
            </Grid>
            <Grid item xs={6}>
              <CheckIcon className={classes.icon}></CheckIcon>
              {props.pointers[3]}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className={classes.children}>
            <SecondaryButton size="sm" />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.children}>
          <img src={src} alt="infographic" />
        </Grid>
      </Grid>
    </section>
  ) : (
    <section>
      <Grid container className={classes.info}>
        <Grid
          item
          xs={12}
          md={6}
          className={classes.children}
          style={{ transform: "translateX(-50px)" }}
        >
          <img src={src} alt="infographic" />
        </Grid>
        <Grid item container xs={12} md={6} className={classes.children}>
          <div>
            <p className={classes.subtitle}>{props.subtitle}</p>
            <h2>{props.title}</h2>
            <div className={classes.text}>{props.info}</div>
          </div>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <CheckIcon className={classes.icon}></CheckIcon>
              {props.pointers[0]}
            </Grid>
            <Grid item xs={6}>
              <CheckIcon className={classes.icon}></CheckIcon>
              {props.pointers[1]}
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <CheckIcon className={classes.icon}></CheckIcon>
              {props.pointers[2]}
            </Grid>
            <Grid item xs={6}>
              <CheckIcon className={classes.icon}></CheckIcon>
              {props.pointers[3]}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className={classes.children}>
            <SecondaryButton size="sm" />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Info;
