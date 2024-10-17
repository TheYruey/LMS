import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from '/src/menu.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/index.css'
import '/src/menu.css'
import InfoMuestraA from '../src/infoMuestraA';
import { Button, Container } from '@mui/material';


createRoot(document.getElementById('infofinalMuestraSupervisor')).render(
  <StrictMode>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <Menu />
      <InfoMuestraA />
    </div>

    <Container maxWidth="md" sx={{display: "flex", flexDirection: "row", justifyContent: "right", marginBottom: 8}}>
            <Button variant="contained" sx={{margin: 2, backgroundColor: "#12C2E9"}}>Imprimir</Button>
            <Button variant="contained" sx={{margin: 2, marginRight: 0, backgroundColor: "#12C2E9"}}>Ver Enmiendas</Button>
    </Container>    
  </StrictMode>,
)
