import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <Box justifyContent={'center'} display={'flex'} flexDirection='column' alignItems={'center'}>
        <Typography sx={{fontFamily:'sans-serif'}} variant='h2'>This is a CRUD Application</Typography>
        <Typography  sx={{fontFamily:'sans-serif'}} variant='h3'>Using Mern  Stack</Typography>
      </Box>
    </div>
  )
}

export default About