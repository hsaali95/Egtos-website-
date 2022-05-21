import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../Cssfile/Style";

const BoxContainer2 = ({heading,number}) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.Team_Box}>
        <Box>
          <Typography className={classes.week}>{heading}</Typography>
          <Typography className={classes.number}>{number}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default BoxContainer2;
