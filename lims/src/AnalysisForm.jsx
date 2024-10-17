import React, { useState } from 'react';
import { Button, Container, FormControl, TextField, Typography, Grid } from '@mui/material';
import { guardarAnalisis } from './services/apiService'; // Importa la función guardarAnalisis
import './AnalysisForm.css';
import InfoMuestraSola from './InfoMuestraSola';

export default function AnalysisForm() {
  // Estado para los campos de análisis
  const [analysisData, setAnalysisData] = useState({
    analisisActual: '',
    cantidadPrincipio: '',
    fechaAsignacion: '',
    fechaFin: '',
    rango: '',
    resultado: '',
    especificacion: ''
  });

  // Estado para los campos adicionales
  const [additionalData, setAdditionalData] = useState({
    descripcion: '',
    observaciones: '',
    especificacionR: '',
    resultadoR: ''
  });

  const [analisisHistorial, setAnalisisHistorial] = useState([]);
  const [currentAnalysisIndex, setCurrentAnalysisIndex] = useState(-1); // Inicia sin análisis

  const handleAnalysisChange = (e) => {
    setAnalysisData({ ...analysisData, [e.target.id]: e.target.value });
  };

  const handleAdditionalChange = (e) => {
    setAdditionalData({ ...additionalData, [e.target.id]: e.target.value });
  };

  const handleAddClick = () => {
    if (Object.values(analysisData).some(value => value)) {
      setAnalisisHistorial([...analisisHistorial, analysisData]);
      setCurrentAnalysisIndex(analisisHistorial.length);
      setAnalysisData({
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
      setAnalysisData(analisisHistorial[currentAnalysisIndex - 1]);
    }
  };

  const handleNextClick = () => {
    if (currentAnalysisIndex < analisisHistorial.length - 1) {
      setCurrentAnalysisIndex(currentAnalysisIndex + 1);
      setAnalysisData(analisisHistorial[currentAnalysisIndex + 1]);
    }
  };

  const handleSaveClick = async () => {
    // Combina ambos conjuntos de datos
    const dataToSave = { ...analysisData, ...additionalData };
    try {
      const response = await guardarAnalisis(dataToSave); // Llama a la función para guardar
      console.log('Datos guardados correctamente:', response);
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  return (
    <Container sx={{ marginTop: "4%", marginRight: 3 }}>
      <InfoMuestraSola />

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
                value={analysisData.analisisActual}
                onChange={handleAnalysisChange}
              />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField
                label="Cantidad de principio actual"
                variant="standard"
                type="number"
                id="cantidadPrincipio"
                value={analysisData.cantidadPrincipio}
                onChange={handleAnalysisChange}
              />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField
                label="Fecha de asignación"
                variant="standard"
                type="date"
                id="fechaAsignacion"
                value={analysisData.fechaAsignacion}
                onChange={handleAnalysisChange}
                InputLabelProps={{ shrink: true }}
              />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField
                label="Fecha de fin"
                variant="standard"
                type="date"
                id="fechaFin"
                value={analysisData.fechaFin}
                onChange={handleAnalysisChange}
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
                value={analysisData.rango}
                onChange={handleAnalysisChange}
              />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField
                label="Resultado"
                variant="standard"
                id="resultado"
                value={analysisData.resultado}
                onChange={handleAnalysisChange}
              />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField
                label="Especificación"
                variant="standard"
                id="especificacion"
                value={analysisData.especificacion}
                onChange={handleAnalysisChange}
              />
            </FormControl>
          </div>
        </div>
      </Container>

      <Container maxWidth="md" sx={{ display: "flex", flexDirection: "row", justifyContent: "right", marginBottom: 8 }}>
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

      <Typography variant="h6" component="h2" sx={{ marginBottom: 2, marginLeft: 15 }}>
        Resultados
      </Typography>

      <Container maxWidth="md" sx={{ border: 2, borderRadius: 3, padding: "5px 0", marginBottom: 5 }}>
        <div id="additionalFields">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Descripción"
                  variant="standard"
                  id="descripcion"
                  value={additionalData.descripcion}
                  onChange={handleAdditionalChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Especificación"
                  variant="standard"
                  id="especificacionR"
                  value={additionalData.especificacionR}
                  onChange={handleAdditionalChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Resultado"
                  variant="standard"
                  id="resultadoR"
                  value={additionalData.resultadoR}
                  onChange={handleAdditionalChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Observaciones"
                  variant="standard"
                  id="observaciones"
                  value={additionalData.observaciones}
                  onChange={handleAdditionalChange}
                  multiline
                  rows={4}
                />
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </Container>

      <Container sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 1, marginBottom: 2, marginRight: 2 }}>
        <Button variant="contained" sx={{ backgroundColor: "#12C2E9" }} onClick={handleSaveClick}>
          Guardar
        </Button>
      </Container>
    </Container>
  );
}
