import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/menu.css';
import AnalisisTable from '../src/AnalisisTable';
import { Button, TextField, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuAnalista from '../src/menu_analista';

createRoot(document.getElementById('mantenimiento_analisis')).render(
  <StrictMode>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* Sidebar */}
      <MenuAnalista />

      {/* Main Content */}
      <div style={{ width: '100%', marginLeft: '20%', padding: '20px' }}>
        {/* Header */}
        <Box display="flex" alignItems="center" mb={3}>
          <IconButton 
            variant="contained" 
            sx={{ 
              height: 50, 
              borderRadius: 15, 
              marginRight: 2, 
              backgroundColor: "#12C2E9",
              '&:hover': { backgroundColor: "#0EAAD9" }
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Analisis
          </Typography>
        </Box>

        {/* Search and Add Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}style={{ marginLeft: '16px' }}>
          <Box display="flex" alignItems="center">
          <Box display="flex" flexDirection="column" style={{ marginRight: '10px' }}>
              <TextField label="Forma Farmaceutica" variant="outlined" />
              <Typography variant="body2" color="primary" style={{ cursor: 'pointer', marginTop: '4px' }}>
                <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>xxxxx</a>
              </Typography>
            </Box>
            
            <Box display="flex" flexDirection="column" style={{ marginRight: '10px' }}>
              <TextField label="Forma Farmaceutica" variant="outlined" />
              <Typography variant="body2" color="primary" style={{ cursor: 'pointer', marginTop: '4px' }}>
                <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Agregar</a>
              </Typography>
            </Box>
          </Box>

          <Button variant="contained" color="primary" style={{ backgroundColor: '#00aaff', height: '40px', marginRight: '16px'  }}> Añadir analisis </Button>
        </Box>

 {/* Analisis Table Component */}
      <AnalisisTable />
      </div>
    </div>
  </StrictMode>
);
