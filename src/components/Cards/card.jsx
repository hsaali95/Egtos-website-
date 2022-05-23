import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useStyles } from "../Cssfile/Style";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const classes = useStyles();
  const card_text_variant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Card sx={{ minWidth: 275 }}>
        <Typography className={classes.card_header}>SECTOR REVENUES</Typography>
        <CardContent>
          <Typography variant="h4" component="div">
            BARCLAYS
          </Typography>
          <motion.div
            variants={card_text_variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 5 }}
          >
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left" }}
            >
              Short descriptive text about the project goes over a couple of
              lines Short descriptive text about the project goes over a couple
              of lines or so, something like this short descriptive text...
            </Typography>
          </motion.div>
        </CardContent>
        <CardActions>{/* cards actions will be written here  */}</CardActions>
      </Card>
    </motion.div>
  );
}
