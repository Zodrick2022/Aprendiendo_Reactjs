import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import Boton from './boton';
import Checkboxes from './checkbox';

function Formulario() {
  return (//Esto es un "FORMULARIO" o algo parecido, el stack con el atributo spacing es muy cimilar a un form
    <div>
       <form id='form'>
        <Stack spacing={2} > 
          <TextField required type='sumbit' id="Nombre" label="Nombre" variant="outlined"/>
          <TextField required id="Apellido" label="Apellido" variant="outlined"/>
          <TextField required type='sumbit' id="Correo" label="Correo" variant="outlined"/>
          <TextField required id="Contraseña" label="Contraseña" variant="outlined"/>
          <Checkboxes texto="Terminos y Condiciones"/>
          <div className='boton'>
            <Boton/>
        </div>
        </Stack>
       </form>
    </div>
  )
}

export default Formulario