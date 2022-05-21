import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../Cssfile/Style";
import BoxContainer from "./BoxContainer";
import BoxContainer2 from './BoxContainer2'

const ChildGrid = ({Teams}) => {
    const classes = useStyles()
  return (
    <>
      <Grid container alignItems="center" direction={"column"}>
        <Grid
          container
          spacing={2}
          sx={{ width:{xs:'90%',sm:"100%,",md:"95%",lg:"80%"} }}
        >
        {/* start of heading  */}
         <Grid
            item
            lg={12} md={12} sm={12} xs={12}
             
             >
           <Typography variant='h4' component='div' className={classes.Teams_Main_heading}>{Teams}</Typography>
          </Grid>
          {/* end of heading  */}
        {/* start of first line  */}
          <Grid
            item
            lg={4} md={4} sm={6} xs={12}  
             className={classes.set_border_box}
             >
           <BoxContainer/>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}    className={classes.set_border_box}>
          <BoxContainer/>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}   className={classes.set_border_box}>
          <BoxContainer/>
          </Grid>
            {/* end of first line  */}
            {/* start of second line  */}
          <Grid item lg={3} md={4} sm={6} xs={12} className={classes.set_border_box}>
          <BoxContainer2  heading="Current amount of teams:" number={65}/>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12} className={classes.set_border_box}>
          <BoxContainer2 heading="Men:" number={963} />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12} className={classes.set_border_box}>
          <BoxContainer2 heading="Women:" number={586} />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12} className={classes.set_border_box}>
          <BoxContainer2 heading="Other:" number={21} />
          </Grid>
          {/* end of second line  */}
          {/* ============================= */}
          {/* start of third line  */}
          <Grid item lg={4} md={4} sm={6} xs={12}  className={classes.set_border_box}>
          <BoxContainer2 heading="Target for the year:" number={`$000,000`} />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}  className={classes.set_border_box}>
          <BoxContainer2 heading="Earnings this year:" number={`$000,000`} />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}  className={classes.set_border_box}>
          <BoxContainer2 heading="Earnings so far:" number={`$000,000`} />
          </Grid>
          {/* end of third line  */}
        </Grid>
      </Grid>
    </>
  );
};

export default ChildGrid;
