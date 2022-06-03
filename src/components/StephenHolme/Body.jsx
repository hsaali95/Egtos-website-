import { Grid } from "@mui/material";
import React from "react";
import StephenCard from "./StephenCard";
import TextList from "./TextList";
import Card from "@mui/material/Card";

const Body = () => {
  return (
    <Grid
      container
      mt="40px"
      sx={{ display: "flex", flexDirection: "row", alignItems: "center",justifyContent:"center" }}
    >
      <Card elevation={2} mt="40px" sx={{width:"94%"}}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid
            item
            lg={4}
            md={4}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StephenCard />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            <TextList />
          </Grid>
        </Grid>
      </Card>
      {/* <StephenCard />
      <TextList /> */}
    </Grid>
  );
};

export default Body;
