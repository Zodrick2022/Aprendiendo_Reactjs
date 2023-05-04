import React from "react"
import ReactDOM from "react-dom" //llamamos a la libreria de ReactDOM
/*
import logo from './logo.svg';
import './App.css';
import { tab } from "@testing-library/user-event/dist/tab"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save+54954555 to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
export default function exportar() { //siempre se debe inicioar con export default function exportar(){codigo aqui} para que se exporte al html y se muestre
  ReactDOM.render(
    <h1>Hola mundo</h1>, document.getElementById("root")
  )
}
function Hola(){
  ReactDOM.render( //traemos la libreria ReactDom.render se encarga de renderizar los componentes para el navegador
    <h2>segunda linea</h2>, document.getElementById("hola")
  )
}
Hola() //llamamos a la funcion

function tabla(){
  const element = <h3>hola</h3> //este es denominado lenguaje jsx combinacion de HTML y JavasCript
  let lista = [1, " hola " , " siuuuuuuu ", 7, 10, " goat "]//separamos los textos un poco de las comillas para "ordenarlo, aun no c como hacer eso sin que se peguen en la salida"
  let suma = 2 + 2
  var resta = 54 - 23
  ReactDOM.render( //utilizamos {} para poder traer variables, bucles, listas y otras funciones de JavaScript hacia HTML
    <ul>
      <li>Primera casilla</li>
      <li>segunda casilla</li>
      <li>{element}</li>
      <li>{suma}</li>
      <li>{resta}</li>
      <li>{lista}</li>
    </ul>, document.getElementById("tabla")
  )
}
tabla()
function separador(){
  ReactDOM.render(
    <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>, document.getElementById("separador")
  )
}
separador()
function texto(){
  let parrafo = "Este es un parrafo re bonito"
  ReactDOM.render(
    <p>{parrafo}</p> , document.getElementById("texto")
  )
}
texto()
function JSX(){
  const name = 'Josh Perez' 
  const element = <h1>Hello, {name}</h1>
  ReactDOM.render(
    element,document.getElementById("JSX")
    )
}
JSX()

//---------------------------------------------------------------------------------------
function formatName(){//creamos la funcion para obtener los atributos del primer y ultimo nombre del objeto "user"
  return user.firstName + ' ' + user.lastName
}

const user = {//creamos el objeto llamado user
  firstName: 'Harper',
  lastName: 'Perez'
}

const element = (<h1>Hello, {formatName(user)}!</h1>)//esto es JSX, creamos una etiqueta h1 para contener un texto "Hello" depues abrimos llaves para indicar que vamos a traer un objeto de javascirpt, ponemos un signo de exclamacion "!" dentro del texto y cerramos llave y etiqueta

ReactDOM.render(
  element, //llamamos a la variable "elemento" y lo muestre en donde esta ubicado el id  de "objeto" en HTML
  document.getElementById("objeto")
)
//---------------------------------------------------------------------------------------
function usuario(){//LLAMAR A LOS OBJETOS
  return PrimerUsuario.PrimerNombre + ' ' + PrimerUsuario.UltimoNomnre //concatenacion de 2 atributos y separados de un espacio
}

const PrimerUsuario = {//objeto
  PrimerNombre: 'Eduard',
  UltimoNomnre: 'Paredes',
  Edad: 18,
  Estrato: 2,
  Pais: "Colombia",
  Region: "Cundinamarca",
  Ciudad: "Bogota",
  Barrio: "Bosa, Nuevo Recreo",
  Conjunto: "Nuevo Recreo ETAPA 2"
}
function botones(){
  return //nooooo funcionaaaaaaaa esta linea
}

const elemento = (//en el h2 llamamos la funcion usuario la cual nos permite trael el nombre completo y separados (concatenar el primer nombre con el primer apellido)
  <h2>Hola, {usuario(PrimerUsuario)} 
    <p>¿como estas?</p> 
    <ul>
      <li>
        Edad:{PrimerUsuario.Edad}
      </li>
      <li>
        Nivel de estrato: {PrimerUsuario.Estrato}
      </li>
      <li>
        Pais en donde vives: {PrimerUsuario.Pais}
      </li>
      <li>
        Region: {PrimerUsuario.Region}
      </li>
      <li>
        Ciudad de residencia: {PrimerUsuario.Ciudad}
      </li>
      <li>
        Barrio en la que reside: {PrimerUsuario.Barrio}
      </li>
      <li>
        Conjunto en la que recide: {PrimerUsuario.Conjunto}
      </li>
      <li>
        <a href="https://www.google.com/" style={{textDecoration: 'none'}}>{botones}</a>
      </li>
    </ul>
    <div style={{backgroundColor: '#77dd77', textAlign: 'center', color: '#ff6961'}}>
      <p>Hellouda</p>
    </div>
  </h2>
)

ReactDOM.render(
  elemento, document.getElementById("usuarios")//aqui estamos haciendo que redirecciones el elemento hacia la id de "usuarios"
)