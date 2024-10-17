import React, { useState } from 'react';
import { Button, Container, FormControl, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './AnalysisForm.css';

export default function AnalysisForm() {
  const [formData, setFormData] = useState({
    analisisActual: '',
    cantidadPrincipio: '',
    fechaAsignacion: '',
    fechaFin: '',
    rango: '',
    resultado: '',
    especificacion: ''
  });

  const [analisisHistorial, setAnalisisHistorial] = useState([]);
  const [currentAnalysisIndex, setCurrentAnalysisIndex] = useState(-1); // Inicia sin análisis

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleAddClick = () => {
    // Añadir el análisis actual al historial si hay datos
    if (formData.analisisActual || formData.cantidadPrincipio || formData.fechaAsignacion || formData.fechaFin || formData.rango || formData.resultado || formData.especificacion) {
      setAnalisisHistorial([...analisisHistorial, formData]);
      setCurrentAnalysisIndex(analisisHistorial.length); // Mover al nuevo análisis
      setFormData({ // Limpiar formulario automáticamente
        analisisActual: '',
        cantidadPrincipio: '',
        fechaAsignacion: '',
        fechaFin: '',
        rango: '',
        resultado: '',
        especificacion: ''
      });
    }
  };

  const handlePrevClick = () => {
    if (currentAnalysisIndex > 0) {
      setCurrentAnalysisIndex(currentAnalysisIndex - 1);
      setFormData(analisisHistorial[currentAnalysisIndex - 1]);
    }
  };

  const handleNextClick = () => {
    if (currentAnalysisIndex < analisisHistorial.length - 1) {
      setCurrentAnalysisIndex(currentAnalysisIndex + 1);
      setFormData(analisisHistorial[currentAnalysisIndex + 1]);
    }
  };

  return (
    <Container sx={{ marginTop: "4%", marginRight: 3 }}>
      <div id="topAnalisis">
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Análisis
        </Typography>
      </div>

      <Container maxWidth="md" sx={{ border: 2, borderRadius: 3, padding: "5px 0", marginBottom: 5 }}>
        <div id="analysis">
          <div id="sContainer">
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField
                label="Análisis actual"
                variant="standard"
                id="analisisActual"
                value={formData.analisisActual}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField
                label="Cantidad de principio actual"
                variant="standard"
                type="number"
                id="cantidadPrincipio"
                value={formData.cantidadPrincipio}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField
                label="Fecha de asignación"
                variant="standard"
                type="date"
                id="fechaAsignacion"
                value={formData.fechaAsignacion}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField
                label="Fecha de fin"
                variant="standard"
                type="date"
                id="fechaFin"
                value={formData.fechaFin}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </FormControl>
          </div>
          <div id="sContainer">
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField
                label="Rango"
                variant="standard"
                id="rango"
                value={formData.rango}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField
                label="Resultado"
                variant="standard"
                id="resultado"
                value={formData.resultado}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField
                label="Especificación"
                variant="standard"
                id="especificacion"
                value={formData.especificacion}
                onChange={handleChange}
              />
            </FormControl>
          </div>
        </div>
      </Container>

      <Container maxWidth="md" sx={{ display: "flex", flexDirection: "row", justifyContent: "right", marginBottom: 8 }}>
      {/* Paginación */}
      <div className="pagination">
        
        <Button variant="contained" sx={{ margin: 2, backgroundColor: "#12C2E9" }} onClick={handlePrevClick} disabled={currentAnalysisIndex <= 0}>
          &lt;
        </Button>
        <span>{analisisHistorial.length > 0 ? currentAnalysisIndex + 1 : 0} de {analisisHistorial.length} Análisis</span>
        <Button variant="contained" sx={{ margin: 2, backgroundColor: "#12C2E9" }} onClick={handleNextClick} disabled={currentAnalysisIndex >= analisisHistorial.length - 1}>
          &gt;
        </Button>
      </div>
        <Button variant="contained" sx={{ margin: 2, backgroundColor: "#12C2E9" }} onClick={handleAddClick}>Añadir</Button>

      </Container>


    </Container>
  );
}
