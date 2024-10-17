import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MenuAnalista from '/src/menu_analista.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/menu.css'
import TableComponent from '../src/TableComponent';
import { Typography } from '@mui/material';


createRoot(document.getElementById('muestras_analizar')).render(
  <StrictMode>
  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
    <MenuAnalista />
    <div style={{width: "100%", marginLeft: "20%", marginTop: "5%"}}>
      <Typography Typography id="transition-modal-title" variant="h5" style={{marginLeft: "2%", marginBottom: "5%"}}>
          Muestras sin realizar asignadas a ti
      </Typography>
      <TableComponent />
    </div>
  </div>
</StrictMode>
);