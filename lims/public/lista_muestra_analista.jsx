import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/menu.css'
import TableComponent from '../src/TableComponent';
import { Typography } from '@mui/material';
import MenuAnalista from '../src/menu_analista';
createRoot(document.getElementById('lista_muestra_analista')).render(
  <StrictMode>
  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
    <MenuAnalista />
    <div style={{width: "100%", marginLeft: "20%", marginTop: "4%"}}>
      <Typography Typography id="transition-modal-title" variant="h5">
          Historial de muestras
      </Typography>
      <TableComponent />
    </div>
  </div>
</StrictMode>
);