import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/menu.css'
import Maintenance from '../src/Maintenance.jsx';
import MenuSupervisor from '../src/menu_supervisor.jsx';


createRoot(document.getElementById('mantenimientosSupervisor')).render(
  <StrictMode>
  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
    <MenuSupervisor />
    <div style={{width: "100%", marginLeft: "20%", marginTop: "4%"}}>
      <Maintenance />
    </div>
  </div>
</StrictMode>
);
