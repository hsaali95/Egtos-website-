import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useStyles } from '../Cssfile/Style'
import ChildGrid from './ChildGrid'

const Heading = () => {
    const classes = useStyles()
  return (
    <>
        <Container maxWidth="xl" sx={{width:{xs:'100%',sm:"100%,",md:"100%",lg:"80%"},marginTop:"22px",marginBottom:"22px"}}>
            <Typography variant='h4' component='div' className={classes.Main_heading}>Teams</Typography>
        </Container>
    </>
  )
}

export default Heading