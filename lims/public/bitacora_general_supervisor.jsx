import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/menu.css'
import TableComponent from '../src/TableComponent';
import ModalEnmiendas from '../src/modalenmiendas';
import { Typography } from '@mui/material';
import MenuSupervisor from '../src/menu_supervisor';
import Reporte from './Reporte_bitacora_supervisor'
createRoot(document.getElementById('bitacoraGeneralSupervisor')).render(
  <StrictMode>
  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
    <MenuSupervisor />
    <div style={{width: "100%", marginLeft: "20%", marginTop: "5%"}}>
      <Typography Typography id="transition-modal-title" variant="h5" style={{marginLeft: "2%", marginBottom: "5%"}}>
          Muestras
      </Typography>
      <div style={{marginLeft: "80%"}}>
        <ModalEnmiendas />
      </div>
      <TableComponent />
    </div>
  </div>
</StrictMode>
);
