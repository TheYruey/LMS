import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/index.css'
import ReportGenerator from '../src/ReportGenerator.jsx';

createRoot(document.getElementById('Reporte')).render(
    <StrictMode>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <h1>Generador de Reportes</h1>
      <ReportGenerator />
      </div>
    </StrictMode>,
  )
