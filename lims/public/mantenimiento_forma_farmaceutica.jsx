import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '/src/menu.css';
import TableComponent from '../src/TableComponent';
import { Button, TextField, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuSupervisor from '../src/menu_supervisor';

createRoot(document.getElementById('mantenimiento_forma_farmaceutica')).render(
  <StrictMode>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* Sidebar */}
      <MenuSupervisor />

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
            Formas farmaceuticas
          </Typography>
        </Box>

        {/* Search and Add Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box 
        display="flex" alignItems="center" style={{ marginLeft: '16px' }} > <TextField label="Forma Farmaceutica" variant="outlined" /> 
        </Box>

          <Button variant="contained" color="primary" style={{ backgroundColor: '#00aaff', height: '40px', marginRight: '16px'  }}> Añadir forma </Button>

        </Box>

        {/* Table Component */}
        <TableComponent />
      </div>
    </div>
  </StrictMode>
);
