import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import BasicCardsGrid from './cardsGrid'

const GridConatiner = () => {
  return (
    <>

        <Box>
        <BasicCardsGrid/>
        <BasicCardsGrid/>
        </Box>
    </>
  )
}

export default GridConatiner