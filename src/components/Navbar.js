import React from "react";
import { AppBar, Toolbar, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    alignContent: "center",
    padding: ".5rem 0",
    backgroundColor: "#fafafa",
    color: "black",
    boxShadow: "0 4px 16px 0 rgb(0 0 0 / 9%)",
  },
  grow: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: "#ff7846",
    textTransform: "none",
    border: "#ff7846",
    color: "white",
    "&:hover": {
      backgroundColor: "#ff7846",
    },
  },
  navitem: {
    marginRight: "1rem",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#fafafa",
    },
  },
  navheader: {
    marginRight: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
    width: "6rem",
    verticalAlign: "middle",
  },
}));
const Navbar = (props) => {
  const classes = useStyles();
  return (
    <header>
      <HideOnScroll {...props}>
        <AppBar className={classes.nav}>
          <Toolbar>
            <Grid className={classes.grow}>
              <img
                className={classes.navheader}
                src="https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg"
                alt="Header"
              />
              <Button color="inherit" className={classes.navitem}>
                Product
              </Button>
              <Button color="inherit" className={classes.navitem}>
                Pricing
              </Button>
              <Button color="inherit" className={classes.navitem}>
                Solutions
              </Button>
              <Button color="inherit" className={classes.navitem}>
                Customers
              </Button>
              <Button color="inherit" className={classes.navitem}>
                Resources
              </Button>
            </Grid>
            <Button color="inherit" className={classes.navitem}>
              Login
            </Button>
            <Button className={classes.demo}>Schedule a demo</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </header>
  );
};

export default Navbar;
