import { Button, Stack } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

function Boton() {
  return (
    <div>
        <Stack direction="row" spacing={1}>
            <Button startIcon={<DoneIcon/>} href='https://www.google.com/' variant='contained' type='submit' color='success'>Registrar</Button>
            <Button startIcon={<DeleteIcon/>} variant='contained' color='error'>Borrar</Button>
        </Stack>
    </div>
  )
}

export default Boton