import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from './menu.jsx'
import HojaTrabajoAnalista from './hojaTrabajoAnalista';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import './menu.css'

createRoot(document.getElementById('hojaTrabajo')).render(
  <StrictMode>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <Menu />
      <HojaTrabajoAnalista />
    </div>
  </StrictMode>,
)
