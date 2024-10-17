import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from '/src/menu.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/menu.css'
import TableComponent from '../src/TableComponent';
import { Typography } from '@mui/material';


createRoot(document.getElementById('historial_muestras_digitador')).render(
  <StrictMode>
  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
    <Menu />
    <div style={{width: "100%", marginLeft: "20%", marginTop: "5%"}}>
      <Typography Typography id="transition-modal-title" variant="h5" style={{marginLeft: "2%", marginBottom: "5%"}}>
          Historial de muestras creadas
      </Typography>
      <TableComponent />
    </div>
  </div>
</StrictMode>
);