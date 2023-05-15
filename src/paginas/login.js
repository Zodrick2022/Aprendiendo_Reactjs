import { Button, Divider, Stack, TextField } from '@mui/material'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';

export default function Login() {
  return <>
    <div  className='App'> {/*Formlario registrar*/}
      <div className='contenedor-principal'>
        <h1>Formulario Login con la libreria MUI</h1>
        <Stack spacing={2}>
          <TextField  required type='sumbit' id="Correo" label="Correo" variant="outlined"/>
          <TextField  required type='sumbit' id="Contraseña" label="Contraseña" variant="outlined"/>
          <Button startIcon={<LoginIcon/>} href='https://www.google.com/' variant='contained' type='submit' color='success'>Entrar</Button>
          <Divider/>
          <a href='./register' style={{textDecoration:'none'}}>¿No tienes una cuenta?</a>
        </Stack>
      </div>
    </div>
    <h1>Login</h1>
  </>
}