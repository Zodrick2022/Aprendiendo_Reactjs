import { Box,  List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

export default function Lista({navArrayLinks, NavLink, setOpen}) { //traemos los props
  return (
    <Box sx={{width: 250}}>
        <nav>
            <List>
                {
                    navArrayLinks.map((item) =>(
                        <ListItem disablePadding key={item.title}>
                            <ListItemButton component={NavLink} to={item.path} onClick={() => setOpen(false)}> {/*cerrar la lista con onClick={() => setOpen(false)}*/}
                                <ListItemText>{item.title}</ListItemText>
                                {/*aqui va el icono a mostrar ---> <ListItemIcon>{item.icon}</ListItemIcon> (este codigo seria para llamr el icono)*/}
                            </ListItemButton>
                        </ListItem>
                        
                    ))
                }
            </List>
        </nav>
    </Box>
  )
}
