import { Button, Stack } from '@mui/material'
import React from 'react'

function Boton() {
  return (
    <div>
        <Stack direction="row" spacing={22}>
            <Button variant='contained' color='success'>subir</Button>
            <Button variant='outlined' color='error'>eliminar</Button>
        </Stack>
    </div>
  )
}

export default Boton