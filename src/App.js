import './App.css';
import Checkboxes from './componentes/checkbox';
import Boton from './componentes/boton';
import Formulario from './componentes/formulario';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Formulario con la libreria MUI</h1>
        <br/>
        <Formulario/>
      </div>
    </div>
  );
}

export default App;
