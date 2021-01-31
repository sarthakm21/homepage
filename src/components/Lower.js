import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Stack from "./Stack";
import BriefDetails from "./BriefDetails";

const useStyles = makeStyles((theme) => ({
  lowerSection: {
    color: "white",
    padding: "10rem 0 0 0",
    background: "linear-gradient(180deg,#381c82 0,#1a0c4b 100%)",
    clipPath: "polygon(0% 100px, 100% 0%, 100% 100%, 0% 100%)",
  },
  smallDetails: {
    maxWidth: "80rem",
    margin: "2rem auto",
    padding: "0 5rem",
    display: "flex",
    justifyContent: "space-between",
  },
}));
const Lower = () => {
  const classes = useStyles();

  return (
    <section>
      <div className={classes.lowerSection}>
        <Grid item container xs={12}>
          <Stack />
          <Grid item container xs={12} className={classes.smallDetails}>
            <BriefDetails
              subtitle="Quote-to-Cash Automation"
              title="Powers Sales and Marketing CRM"
              src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/crm-logos.png"
              info="Handle quotes, approvals, acceptance, and collections seamlessly from within the CRM."
            />
            <BriefDetails
              subtitle="Offer More Payment Methods"
              title="25+ Payment Gateways"
              src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/pg-logos.png"
              info="Accept payments across a wide array of gateways, geographies, and currencies."
            />
          </Grid>
          <Grid container item xs={12} className={classes.smallDetails}>
            <BriefDetails
              subtitle="Streamline Finance Operations"
              title="Syncs with Accounting Software"
              src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/acc-logos.png"
              info="Reconcile books in seconds, handle compliance, and recognize revenue painlessly."
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Lower;
