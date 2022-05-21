import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import { Avatar, Container } from "@mui/material";
import { useStyles } from "../Cssfile/Style";

const ResponsiveAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.App_Bar_bgcolor}>
      <Container maxWidth="xl" className={classes.App_Bar_bgcolor}>
        <Toolbar disableGutters className={classes.avatar_position}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
