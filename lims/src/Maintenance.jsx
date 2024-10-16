import React from 'react';
import { Grid, Button, Typography, Box } from '@mui/material';

const Maintenance = () => {
  const buttons = [
    'Estandar', 'Aborto', 'Forma farmaceutica', 'Forma conservacion',
    'Finalidad analisis', 'Tipo muestra', 'Envase primario', 'Roles',
    'Usuario', 'Estado muestra', 'Condicion envase', 'Entidad externa',
    'Tipo entidad externa', 'Motivos enmienda', 'Analisis', 'Documentos',
    'Resultados organolepticos', 'Condicion conservacion', 'Validacion documentacion'
  ];

  return (
    <Box sx={{ padding: '20px', textAlign: 'left' }}>
      <Typography id="transition-modal-title" variant="h4" component="h2">
        Mantenimientos
      </Typography>
      <Grid container spacing={2} justifyContent="left">
        {buttons.map((buttonText, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#fff',
                color: '#00bcd4',
                padding: '10px 0',
                borderWidth: '1.5px',
                textTransform: 'none',
                fontWeight: 'bold',
                height: '70px',
                borderRadius: '10px',
                border: '1.5px solid #00bcd4',
                width: '80%',
                margin: '9px 0'
              }}
            >
              {buttonText}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Maintenance;
