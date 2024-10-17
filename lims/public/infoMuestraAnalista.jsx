import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/index.css'
import '/src/menu.css'
import InfoMuestraA from '../src/infoMuestraA';
import MenuAnalista from '../src/menu_analista';


createRoot(document.getElementById('infoMuestraAnalista')).render(
  <StrictMode>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <MenuAnalista />
      <InfoMuestraA />
    </div>
  </StrictMode>,
)
