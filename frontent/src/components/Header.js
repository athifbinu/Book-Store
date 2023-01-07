import React from 'react'
import {AppBar, Tab, Toolbar, Typography,Tabs} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useState } from 'react';
import {NavLink} from 'react-router-dom'

const Header=() =>{
      
    const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{backgroundColor:'#232F3D'}} position='sticky'>
         <Toolbar>
         <Typography>
          <LibraryBooksIcon/>
          </Typography>
              
          <Tabs
            sx={{ml:'auto'}}
           textColor='inherit' indicatorColor="secondary" value={1}
           onChange={(e,val)=>setValue(val)}
            >
                
      
                   <Tab LinkComponent={NavLink} to="/add" label='Add Book'/>
                <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                <Tab LinkComponent={NavLink} to="/about" label='About Us'/>
          </Tabs>
         </Toolbar>
      </AppBar>
    <h1>hello</h1>
</div>
  )
}

export default Header
