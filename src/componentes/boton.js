import { Button, Stack } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import LoginIcon from '@mui/icons-material/Login';


function Boton() {
  return (
    <div>
        <Stack direction="row" spacing={1}>
            <Button startIcon={<LoginIcon/>} href='https://www.google.com/' variant='contained' type='submit' color='success'>Entrar</Button>
            <Button startIcon={<DeleteIcon/>} variant='contained' color='error'>Borrar</Button>
        </Stack>
    </div>
  )
}

export default Boton