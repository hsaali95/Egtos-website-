import { Button } from "@mui/material";
import React from "react";
import { useStyles } from "../Cssfile/Style";

const LoginButtons = () => {
  const classes = useStyles();
  return (
    <>
      <Button
        variant="contained"
        disableElevation
        sx={{
          width:{xs:"100%",sm:"80%",md:"40%"},
          height: "62px",
          backgroundColor: "white",
          border: "1px solid #F9BA00",
          color: "#F9BA00",
          borderRadius: "29px",
        }}
        className={classes.ButtonHoverSettings}
      >
        
        Login 
      </Button>
    </>
  );
};

export default LoginButtons;
