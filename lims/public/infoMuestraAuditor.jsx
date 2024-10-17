import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InfoMuestra from '/src/infoMuestra.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/index.css'
import '/src/menu.css'
import MenuAuditor from '../src/menu_auditor';


createRoot(document.getElementById('infoMuestraAuditor')).render(
  <StrictMode>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <MenuAuditor />
      <InfoMuestra />
    </div>
  </StrictMode>,
)
