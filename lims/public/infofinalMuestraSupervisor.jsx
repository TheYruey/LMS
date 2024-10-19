import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/index.css'
import '/src/menu.css'
import InfoMuestraSupervisor from '../src/infoMuestraSupervisor';
import MenuSupervisor from '../src/menu_supervisor';


createRoot(document.getElementById('infofinalMuestraSupervisor')).render(
  <StrictMode>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <MenuSupervisor />
      <InfoMuestraSupervisor />
    </div>

   
  </StrictMode>,
)
