import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/index.css'
import '/src/menu.css'
import AnalysisForm from '../src/AnalysisForm.jsx';
import MenuAnalista from '../src/menu_analista.jsx';

createRoot(document.getElementById('Hoja_Trabajo')).render(
  <StrictMode>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <MenuAnalista />
      <AnalysisForm />
    </div>
  </StrictMode>,
)
