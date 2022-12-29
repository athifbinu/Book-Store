import React from 'react'
import {AppBar, Typography} from '@mui/material'
import BookIcon from '@mui/icons-material/Book';
const Header=() =>{
  return (
    <div>
        <AppBar position='sticky'>
             <Typography><BookIcon/></Typography>
        </AppBar>

    </div>
  )
}

export default Header
