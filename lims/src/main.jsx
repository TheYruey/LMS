import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import Menu from './menu.jsx'
import ModalComponent from './modal.jsx';
//import InfoMuestra from './infoMuestra.jsx';
//import ModalEnmendar from './modalEnmendar';
//import ModalAuditar from './modalAuditar';
//import ModalAsignarAnalista from './modalAsignarAnalista';
//import HojaTrabajoAnalista from './hojaTrabajoAnalista';
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
import Maintenance from './Maintenance.jsx';
import TableComponent from './TableComponent.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TableComponent />
  </StrictMode>,
)
