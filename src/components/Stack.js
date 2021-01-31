import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  headTitle: {
    margin: "1rem auto",
    "& div > h1": {
      maxWidth: "35rem",
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    "& div > p": {
      maxWidth: "35rem",
      fontSize: "1.1rem",
      opacity: ".75",
      fontWeight: 400,
    },
  },
  headImage: {
    maxWidth: "60rem",
    margin: "0 auto",
  },
}));
const Stack = () => {
  const classes = useStyles();
  return (
    <Grid xs={12} item container>
      <Grid item xs={12} sm={8} className={classes.headTitle}>
        <div>
          <h1>Works With Your Revenue Management Stack</h1>
          <p>
            Managing sales, payments, customer experience or your books:
            <br />
            if it affects your revenue cycle, Chargebee works with it.
          </p>
        </div>
      </Grid>
      <Grid xs={12} className={classes.headImage}>
        <img
          src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/revenue-management.svg"
          alt="dunno"
        />
      </Grid>
    </Grid>
  );
};

export default Stack;
