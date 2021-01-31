import React from "react";
import { Container, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SvgAnimation from "./components/SvgAnimation";
import Info from "./components/Info";
import Lower from "./components/Lower";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Container align="center">
        <Grid item>
          <Hero />
        </Grid>
      </Container>
      <Grid item container xs={12} direction="row" spacing={10}>
        <Container>
          <SvgAnimation />
        </Container>
      </Grid>
      <Info
        src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/recurring-billing-graphic.svg"
        orientation="l"
        subtitle="No more spreadsheet errors"
        title="Automate Recurring Billing"
        info="Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!"
        pointers={[
          "Billing Schedules",
          "Proration & Invoicing",
          "Tax management",
          "Payment Methods",
        ]}
      />
      <Info
        src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/subscription-graphic.svg"
        orientation="r"
        subtitle="No more developer dependency"
        title="Smarter Subscription Management"
        info="Experiment rapidly with pricing structures, product catalogs, and subscription lifecycles with a business-user-first experience."
        pointers={[
          "Price modeling",
          "Product Catalog",
          "Trial management",
          "Lifecycle automation",
        ]}
      />
      <Info
        src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/revenue-operations-graphic.svg"
        orientation="l"
        subtitle="No more lost opportunities"
        title="Streamline Revenue Operations"
        info="Plug revenue leaks by aligning GTM & Finance. Uncover growth opportunities across processes, geographies, and business models."
        pointers={[
          "SaaS Analytics",
          "Quote-to-cash",
          "Order-to-revenue",
          "Revenue Recognition",
        ]}
      />
      <Grid item xs={12}>
        <Lower />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;
