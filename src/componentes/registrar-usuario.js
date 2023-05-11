const Nombre = document.getElementById("Nombre")
const Apellido = document.getElementById("Apellidot")
const Correo = document.getElementById("Correo")
const Contraseña = document.getElementById("Contraseña")
const Form = document.getElementById("form")
 
Form.addEventListener("submit", e=>{
    e.preventDefault() //prevenir todo que venga por defecto
    let warnings =""
    let entrar = false
    let confirmar =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ //validacion de email
    if(Nombre.value.length < 6){
        warnings += "El nombre no es valido"
        entrar = true
    }
    if(Apellido.value.length < 6){
        warnings += "Los apellidos no es valido"
        entrar = true
    }
    if(!confirmar.test(Correo.value)){
        warnings += "El correo no es valido"
        entrar = true
    }
    if(Contraseña.value.length < 8){
        warnings += "La contraseña no es valida no es valido"
        entrar = true
    }
    else{
        alert("Enviado")
    }
    
})