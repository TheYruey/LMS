import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import Menu from './menu.jsx'
//import ModalEnmendar from './modalEnmendar';
//import ModalAuditar from './modalAuditar';
//import ModalAsignarAnalista from './modalAsignarAnalista';
//import ModalDatosUsuario from './modalDatosUsuario';
//import ModalEditarAnalisis from './modalEditarAnalisis';
//import FormEntidadesExternas from './formEntidadesExternas';
//import ModalEditar from './modalEditar';
//import ListaFormasFarmaceuticas from './listaFormasFarmaceuticas';
//import ListaPermisos from './listaPermisos';
//import ListaDocumentos from './listaDocumentos';
//import EditarRol from './editarRol';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import './menu.css'
import AnalysisForm from './AnalysisForm.jsx';

createRoot(document.getElementById('Hoja_Trabajo')).render(
  <StrictMode>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <Menu />
      <AnalysisForm />
    
    </div>
  </StrictMode>,
)
