import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import ModalComponent from '/src//Modal';
import TableComponent from '/src//TableComponent';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Typography } from '@mui/material';
import ModalEnmiendas from '../src/modalenmiendas';
import MenuAuditor from '../src/menu_auditor';

createRoot(document.getElementById('historial_muestras_auditadas')).render(
  <StrictMode>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <MenuAuditor />
      <div style={{width: "100%", marginLeft: "20%", marginTop: "4%"}}>
        <Typography Typography id="transition-modal-title" variant="h5">
            Historial muestras auditadas
        </Typography>
        <div style={{width: "20%", marginTop: "5%", marginLeft: "70%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Button variant='contained' sx={{backgroundColor: "#12C2E9"}}>Refrescar</Button>
            <Button variant='contained' sx={{backgroundColor: "#12C2E9"}}>Consultar</Button>
        </div>
        <ModalEnmiendas/>
        <TableComponent />
      </div>
    </div>
  </StrictMode>,
)
