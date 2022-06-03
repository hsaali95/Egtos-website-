import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Jawaad from "../jawwadbhaipic/Jawaad.png"
import { styled } from "@mui/material/styles";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Avatar } from "@mui/material";

export default function StephenCard() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));
  return (
    <Card sx={{ width: "70%" }} elevation={0}>
      <CardContent>
        <Box
          component={"div"}
          sx={{
            fontSize: 14,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          color="text.secondary"
          gutterBottom
        >
          <Avatar
            alt="Remy Sharp"
            src="Jawaad"
            sx={{ width: 100, height: 100 }}
          />
        </Box>
        <Typography
          variant="h5"
          component="div"
          sx={{ textAlign: "center", mt: 2 }}
        >
          Stephen Holmes
        </Typography>
        <Typography
          sx={{ mb: 1.5, textAlign: "center", mt: 5 }}
          color="text.secondary"
        >
          Profile 100% completed
        </Typography>
        <Typography variant="body2">
          <BorderLinearProgress variant="determinate" value={50} sx={{color:'#219FCE'}} />
        </Typography>
      </CardContent>
    </Card>
  );
}
