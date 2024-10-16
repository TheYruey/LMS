import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from '/src/menu.jsx'
import InfoMuestra from './infoMuestra.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/index.css'
import '/src/menu.css'
import Maintenance from '../src/Maintenance.jsx';


createRoot(document.getElementById('infoMuestraAuditor')).render(
  <StrictMode>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <Menu />
      <Maintenance />
    </div>
  </StrictMode>,
)
