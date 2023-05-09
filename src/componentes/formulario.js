import { Stack, TextField } from '@mui/material'
import React from 'react'

function Formulario() {
  return (//Esto es un "FORMULARIO" o algo parecido, el stack con el atributo spacing es muy cimilar a un form
    <div>
       <Stack spacing={2}> 
        <TextField id="outlined-basic" label="Nombre" variant="outlined"/>
            <TextField id="outlined-basic" label="Apellido" variant="outlined"/>
            <TextField id="outlined-basic" label="Correo" variant="outlined"/>
            <TextField id="outlined-basic" label="Contraseña" variant="outlined"/>
       </Stack>
    </div>
  )
}

export default Formulario