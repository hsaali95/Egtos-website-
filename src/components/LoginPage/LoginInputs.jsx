import { TextField } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
const LoginInputs = ({ typeText }) => {
  return (
    <>
      <motion.div
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 5 }}
      >
        <TextField
          id="outlined-basic"
          label={typeText}
          variant="outlined"
          sx={{
            width: { xs: "100%", sm: "80%", md: "40%" },
            height: "30px",
            color: "#969696",
            opacity: "100%",
            marginBottom: "10px",
          }}
        />
      </motion.div>
    </>
  );
};

export default LoginInputs;
