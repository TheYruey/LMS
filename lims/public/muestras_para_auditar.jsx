import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ModalEnmendar from '/src//modalEnmendar';
import ModalAuditar from '/src//modalAuditar';
import TableComponentAud from '/src//TableComponentAud';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Typography } from '@mui/material';
import MenuAuditor from '../src/menu_auditor';

createRoot(document.getElementById('muestras_para_auditar')).render(
  <StrictMode>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <MenuAuditor />
      <div style={{width: "100%", marginLeft: "20%", marginTop: "4%"}}>
        <Typography Typography id="transition-modal-title" variant="h5">
            Muestras para auditar
        </Typography>
        <div style={{width: "30%", marginTop: "5%", marginLeft: "60%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Button variant='contained' sx={{backgroundColor: "#12C2E9"}}>Refrescar</Button>
            <ModalEnmendar />
            <ModalAuditar />
           
        </div>
        <TableComponentAud />
      </div>
    </div>
  </StrictMode>,
)
