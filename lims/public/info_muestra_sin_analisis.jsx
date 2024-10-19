import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InfoMuestraSola from '/src/infoMuestraSola.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/index.css'
import '/src/menu.css'
import Menu from '../src/menu';




createRoot(document.getElementById('info_muestra_sin_analisis')).render(
  <StrictMode>
    <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
      <Menu />
      <InfoMuestraSola />
    </div>
  </StrictMode>,
)

