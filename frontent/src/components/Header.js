import React from 'react'
import {AppBar, Tab, Toolbar, Typography,Tabs} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useState } from 'react';


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
              <Tab  to='/add'  label='add product'/>
              <Tab label='Books'/>
              <Tab label='About us'/>
          </Tabs>
         </Toolbar>
      </AppBar>
    <h1>hello</h1>
</div>
  )
}

export default Header
