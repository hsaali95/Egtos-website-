import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "./CardContainer";

export default function BasicCardsGrid() {
  return (
    <Grid container alignItems="center" direction={"column"}>
      <Grid
        container
        rowGap={{ xs: 2, sm: 2, md: 2 }}
        sx={{
          width: { xs: "100%", sm: "100%,", md: "100%", lg: "80%" },
          alignItems: "center",
        }}
      >
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <Card />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <Card />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <Card />
        </Grid>
      </Grid>
    </Grid>
  );
}
