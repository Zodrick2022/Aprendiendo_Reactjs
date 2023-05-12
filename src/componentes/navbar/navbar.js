import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import Lista from './lista'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export default function Navbar({navArrayLinks}) {
  const [open, setOpen] = useState(false) //fucion para abrir la lista
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton color='inherit' size='large' onClick={() => setOpen(true)} sx={{ display: {xs: "flex", sm: "none"}}}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' sx={{flexGrow: 1}}>Inicio</Typography>
          <Box sx={{display: {xs: "none", sm: "block"}}}>
            {
              navArrayLinks.map(item =>(
                <Button color='inherit'key={item.title} component={NavLink} to={item.path}>{item.title}</Button>
              ))
            }
          </Box>
        </Toolbar>
      </AppBar>     
      <Drawer open={open} anchor='left' onClose={() => setOpen(false)} sx={{ display: {xs: "flex", sm: "none"}}}>
        <Lista navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen}/>
      </Drawer>
    </>

  )
}
