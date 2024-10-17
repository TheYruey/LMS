import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from '/src/menu.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/menu.css'
import TableComponent from '../src/TableComponent';
import ModalAsignarAnalista from '/src//ModalAsignarAnalista';
import {  Typography } from '@mui/material';

createRoot(document.getElementById('bitacoraMuestrasSupervisor')).render(
  <StrictMode>
  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
    <Menu />
    <div style={{width: "100%", marginLeft: "20%", marginTop: "4%"}}>
      <Typography Typography id="transition-modal-title" variant="h5">
          Muestras
      </Typography>
      <ModalAsignarAnalista/>
      <TableComponent />
    </div>
  </div>
</StrictMode>
);