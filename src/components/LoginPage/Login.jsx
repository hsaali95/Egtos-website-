import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../Cssfile/Style";
import LoginButtons from "./LoginButtons";
import LoginInputs from "./LoginInputs";
import LogInPara from "./LogInPara";

const Login = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container alignItems="center" direction={"column"}>
        <Grid
          container
          spacing={2}
          sx={{ width: { xs: "90%", sm: "100%,", md: "95%", lg: "80%" } }}
        >
          {/* start of heading  */}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="h4"
              component="div"
              className={classes.Teams_Main_heading}
            >
              Login
            </Typography>
          </Grid>
          {/* end of heading  */}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <LoginInputs typeText="Email" />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} marginTop="10px">
            <LoginInputs typeText="Password" />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} marginTop="5px">
            <LogInPara />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} marginTop="5px">
            <LoginButtons/>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
