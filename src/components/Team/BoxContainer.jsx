import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useStyles } from '../Cssfile/Style'

const BoxContainer = () => {
    const classes = useStyles()
  return (
    <>
         <Box  className={classes.Team_Box}>
              <Box>
                <Typography className={classes.week}>This week:</Typography>
                <Typography className={classes.teams}>Teams:</Typography>
                <Typography className={classes.number}>4</Typography>
              </Box>
              <Box sx={{display:'flex',flexDirection:'column',justifyContent:'end'}}>
                
                <Typography className={classes.teams}>Projects worked on</Typography>
                <Typography sx={{fontSize:'49px',color:"#000000",opacity:'40%'}}>3</Typography>
              </Box>
            </Box>
    </>
  )
}

export default BoxContainer