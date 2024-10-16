import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from '/src/menu.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/index.css'
import '/src/menu.css'

createRoot(document.getElementById('inicioAnalista')).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)
