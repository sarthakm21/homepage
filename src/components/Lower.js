import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Stack from "./Stack";

const useStyles = makeStyles((theme) => ({
  lowerSection: {
    color: "white",
    padding: "10rem 0 0 0",
    background: "linear-gradient(180deg,#381c82 0,#1a0c4b 100%)",
    clipPath: "polygon(0% 100px, 100% 0%, 100% 100%, 0% 100%)",
  },
}));
const Lower = () => {
  const classes = useStyles();

  return (
    <section>
      <div className={classes.lowerSection}>
        <Grid comtainer xs={12}>
          <Stack />
        </Grid>
      </div>
    </section>
  );
};

export default Lower;
