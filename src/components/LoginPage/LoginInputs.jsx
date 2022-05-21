import { TextField } from "@mui/material";
import React from "react";

const LoginInputs = ({ typeText }) => {
  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          label={typeText}
          variant="outlined"
          sx={{
            width: { xs: "100%", sm: "80%", md: "40%" },
            height: "30px",
            color: "#969696",
            opacity: "100%",
            marginBottom:'10px'
          }}
        />
      </div>
    </>
  );
};

export default LoginInputs;
