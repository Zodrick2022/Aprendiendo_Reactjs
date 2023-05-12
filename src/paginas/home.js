import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './estilos/estilocard.css'
export default function Home() {
  return <>
    <div className='card'>
      <Card sx={{maxWidth: 900, transition: "0.2s","&:hover":{transform:"scale(1.05)"}}}> {/*animacion*/}
         <CardActionArea> {/*esto genera una animacion cuando das click */}
            <CardMedia component="img" image='https://via.placeholder.com/1000x200' height="200px" alt='descripcion'/> {/*imagnes*/}
            <CardContent> {/*Recibe todo el contenido */}
              <Typography variant='h5'>Card Title</Typography>
              <Typography component="p" variant='body2'>
                lorem wgdfh dfg dafh dafh daf gafd ha dhf hd fah dfh
              </Typography>
            </CardContent>
         </CardActionArea>
        <CardActions>
          <Button variant='contained'>Add</Button>
          <Button color='error'>Remove</Button>
        </CardActions>
      </Card>
    </div>
    <h1>Home</h1>
  </>
}
