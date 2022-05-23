import React from 'react'
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const LogInPara = () => {
  return (
    <motion.div animate={{rotateX:360}} transition={{duration:5}}>
        <Typography
        sx={{marginTop:'10px',marginBottom:'60px',color:'#969696',opacity:'100%'}}
        >Passwords are case sensitive, if you have forgotten your password please click here</Typography>
    </motion.div>
  )
}

export default LogInPara