import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TextList = () => {
  return (
    <>
      <Box component={"div"} sx={{ width: "90%" }}>
        <Box component={"div"}>
          <h2 style={{ color: "#0C2C5E" }}>
            Almost there ,now please complete your profile
          </h2>
        </Box>
        <Box component={"div"}>
          <Typography
            variant="body1"
            sx={{ marign: "0px 0px 16px 0px", color: "#969696", opcity: "40%",marginBottom:"7px" }}
            
          >
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
          </Typography>
        </Box>
        <Divider />
        <Box component={"div"}>
          <h2 style={{ margin: "12px 0px 5px 0px" }}>Financial Details</h2>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                margin: "0px 0px 11px 0px",
                color: "#969696",
                opcity: "40%",
              }}
            >
              is simply dummy text of the printing and typesetting industry.
            </p>
            <ChevronRightIcon />
          </Box>
        </Box>
        <Divider />
        <Box component={"div"}>
          <h2 style={{ margin: "12px 0px 5px 0px" }}>Financial Details</h2>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                margin: "0px 0px 11px 0px",
                color: "#969696",
                opcity: "40%",
              }}
            >
              is simply dummy text of the printing and typesetting industry.
            </p>
            <ChevronRightIcon />
          </Box>
        </Box>
        <Divider />
        <Box component={"div"}>
          <h2 style={{ margin: "12px 0px 5px 0px" }}>Financial Details</h2>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                margin: "0px 0px 11px 0px",
                color: "#969696",
                opcity: "40%",
              }}
            >
              is simply dummy text of the printing and typesetting industry.
            </p>
            <ChevronRightIcon />
          </Box>
        </Box>
        <Divider />

        <Box component={"div"}>
          <h2 style={{ margin: "12px 0px 5px 0px", color: "#B0DEF0",fontWeight:"900" }}>
            Financial Details (4) <KeyboardArrowDownIcon />{" "}
          </h2>

          <Box>
            <p
              style={{
                margin: "0px 0px 11px 0px",
                color: "#969696",
                opcity: "40%",
              }}
            >
              is simply dummy text of the printing and typesetting industry.
            </p>
          </Box>
        </Box>

        <Box
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "31%",
              textAlign: "center",
              borderRadius: "40px",
              paddingY: "10px",
              backgroundColor: "#ffff",
              color: "#219FCE",
              border: "1px solid #219FCE",
              marginBottom: "20px",
              ":hover": {
                backgroundColor: "#ffff",
                
              },
            }}
          >
            close
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TextList;
