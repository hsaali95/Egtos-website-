import { Button } from "@mui/material";
import React from "react";
import { useStyles } from "../Cssfile/Style";
import { motion } from "framer-motion";

const LoginButtons = () => {
  const classes = useStyles();
  return (
    <motion.div animate={{ rotateZ: 360 }} transition={{ duration: 5 }}>
      <Button
        variant="contained"
        disableElevation
        sx={{
          width: { xs: "100%", sm: "80%", md: "40%" },
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
    </motion.div>
  );
};

export default LoginButtons;
