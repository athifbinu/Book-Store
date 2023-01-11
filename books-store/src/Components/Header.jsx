import React from 'react'
import {AppBar, Tab, Toolbar, Typography,Tabs} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useState } from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => {

    const [value, setValue] = useState(0);
  return (
    <div>
        <AppBar sx={{backgroundColor: "#232F3D"}} position='sticky'>
            <Toolbar>
            <Typography><LibraryBooksIcon/></Typography>
            <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val) => setValue(val)}>
            <Tab to='/' style={{color:'white'}} LinkComponent={NavLink} label='Home' />
                <Tab LinkComponent={NavLink} to="/add" label='Add Book'/>
                <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                <Tab LinkComponent={NavLink} to="/about" label='About Us'/>
            </Tabs>
            </Toolbar>
            
        </AppBar>
    </div>
  )
}

export default Header