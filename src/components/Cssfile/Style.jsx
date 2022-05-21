import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  // css of card component
  card_header: {
    backgroundColor: "#0E2050",
    color: "#FFFFFF",
    margin: "0",
    fontSize: "16px",
    padding: "5px",
  },
  Main_heading: {
    color: "#0E2050",
    marginTop: "29px",
    marginBottom: "29px",
    opacity:'100%',
    fontSize:'43px'
  },
  // end css of card component
  // ================================================

  // css of Main Header
  App_Bar_bgcolor: {
    backgroundColor: "#00A099",
  },
  avatar_position: {
    justifyContent: "flex-end",
  },
  //end  of css of Main Header
  // ================================================

  // css of App Bar
  Sub_App_Bar: {
    backgroundColor: "#0E1F50",
  },
  NaveLinks: {
    justifyContent: "flex-end",
    marginRight: "5px",
  },
  // end of css of App Bar
  // ================================================

  //css of Team component 
  Teams_Main_heading:{
    color: "#0E2050",
    marginTop: "29px !important",
    marginBottom: "29px !important",
    opacity:'100%',
    fontSize:'43px'
  },
  set_border_box:{
    border: "1px solid #969696",
     borderLeft: 0,
      opacity: 1
  },
  Team_Box:{
    display:'flex',
    justifyContent:'space-between',
    marginRight:'28px'
  },
  week:{
      fontSize:'22px !important',
      color:"#0E2050",
      opacity:'100%'
  },
  teams:{
      fontSize:'16px !important',
      color:"#000000",
      opacity:'40%'
  },
  number:{
      fontSize:'49px !important',
      color:'#000000',
      opacity:'40%'
  },
//   login page css
ButtonHoverSettings:{
    "&:hover ": {
        backgroundColor: "yellow !important",
        color:'#FFFFFF',
        opacity:'100%',
        
      }
}

}));
