import { Button, Stack } from '@mui/material'
import React from 'react'

function Boton() {
  return (
    <div>
        <Stack direction="row" spacing={7}>
            <Button variant='contained' type='submit' color='success'>subir</Button>
            <Button variant='outlined' color='error'>eliminar</Button>
        </Stack>
    </div>
  )
}

export default Boton