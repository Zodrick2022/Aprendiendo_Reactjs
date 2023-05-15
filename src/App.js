//instalar react-router-dom con la version 6
import './App.css';
import Navbar from './componentes/navbar/navbar';
import {Route, Routes} from 'react-router-dom';//ESTOS COMPONENTES NOS AYUDAN A AUQE EL PROYECTO SEA MAS RAPIDO
import Home from './paginas/home'
import Register from './paginas/register'
import Login from './paginas/login'

const navArrayLinks=[
  {
    title: "Home", path:"/home" /*si queremos motrar iconos seria ---> icon:(etiqueta del icono)*/ 
  },
  {
    title:"Login", path:"/login"
  },
  {
    title:"Register", path:"/register"
  }
]

function App() {
  return (
    <div className='nabvar'>
      <Navbar navArrayLinks={navArrayLinks}/>
      <Routes>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
      </Routes>
    </div>
  );
}

export default App;