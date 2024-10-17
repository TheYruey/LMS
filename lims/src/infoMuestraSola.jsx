import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, FormControl, TextField } from '@mui/material';
import { obtenerMuestraPorId } from './services/apiService';
import './infoMuestraSola.css';

export default function InfoMuestraSola() {
  const [muestraData, setMuestraData] = useState({
    controlInterno: 'xxxx',
    numeroOficio: 'xxxx',
    fechaIngreso: 'xxxx',
    nombreProducto: 'xxxx',
    cantidadMuestra: 'xxxx',
    documentos: 'xxxx',
    formaFarmaceutica: 'xxxx',
    modoConservacion: 'xxxx',
    numeroLote: 'xxxx',
    fechaVencimiento: 'xxxx',
    cantidadPrincipios: 'xxxx',
    principioActivo: 'xxxx',
    estandar: 'xxxx',
    envasePrimario: 'xxxx',
    condicionEnvase: 'xxxx',
    producidoPor: 'xxxx',
    distribuidoPor: 'xxxx',
    solicitadoPor: 'xxxx',
    observaciones: 'xxxx'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerMuestraPorId(1); // Cambia '1' por el ID que necesitas
        setMuestraData({
          controlInterno: data.controlInterno || 'xxxx',
          numeroOficio: data.numeroOficio || 'xxxx',
          fechaIngreso: data.fechaIngreso || 'xxxx',
          nombreProducto: data.nombreProducto || 'xxxx',
          cantidadMuestra: data.cantidadMuestra || 'xxxx',
          documentos: data.documentos || 'xxxx',
          formaFarmaceutica: data.formaFarmaceutica || 'xxxx',
          modoConservacion: data.modoConservacion || 'xxxx',
          numeroLote: data.numeroLote || 'xxxx',
          fechaVencimiento: data.fechaVencimiento || 'xxxx',
          cantidadPrincipios: data.cantidadPrincipios || 'xxxx',
          principioActivo: data.principioActivo || 'xxxx',
          estandar: data.estandar || 'xxxx',
          envasePrimario: data.envasePrimario || 'xxxx',
          condicionEnvase: data.condicionEnvase || 'xxxx',
          producidoPor: data.producidoPor || 'xxxx',
          distribuidoPor: data.distribuidoPor || 'xxxx',
          solicitadoPor: data.solicitadoPor || 'xxxx',
          observaciones: data.observaciones || 'xxxx'
        });
      } catch (error) {
        console.error("Error al obtener los datos de la muestra:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container sx={{ marginTop: "4%", marginRight: 4 }}>
      <div id="top">
        <Button variant="contained" sx={{ height: 50, borderRadius: 15, marginRight: 2, backgroundColor: "#12C2E9" }}>
          <ArrowBackIcon />
        </Button>
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Información de la muestra
        </Typography>
      </div>
      <Container maxWidth="md" sx={{ border: 2, borderRadius: 3, padding: "5px 0", marginBottom: 5 }}>                
        <div id="principalContainer">
          <div id="sContainer">
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Número de control interno" value={muestraData.controlInterno} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Número de oficio" value={muestraData.numeroOficio} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Fecha de ingreso" value={muestraData.fechaIngreso} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Nombre del producto" value={muestraData.nombreProducto} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Cantidad de muestra" value={muestraData.cantidadMuestra} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Documentos" value={muestraData.documentos} variant="standard" />
            </FormControl>
          </div>
          <div id="sContainer">
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Forma farmacéutica" value={muestraData.formaFarmaceutica} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Modo de conservación" value={muestraData.modoConservacion} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Número de lote" value={muestraData.numeroLote} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Fecha de vencimiento" value={muestraData.fechaVencimiento} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Cantidad de principios activos" value={muestraData.cantidadPrincipios} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Principio activo/concentración" value={muestraData.principioActivo} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Estándar" value={muestraData.estandar} variant="standard" />
            </FormControl>
          </div>
          <div id="sContainer">
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Envase primario" value={muestraData.envasePrimario} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Condición envase" value={muestraData.condicionEnvase} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Producido por" value={muestraData.producidoPor} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Distribuido por" value={muestraData.distribuidoPor} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Solicitado por" value={muestraData.solicitadoPor} variant="standard" />
            </FormControl>
            <FormControl id="datos" sx={{ width: '25ch' }}>
              <TextField disabled label="Observaciones" value={muestraData.observaciones} multiline rows={4} variant="standard" />
            </FormControl>
          </div>
        </div>
      </Container>
    </Container>
  );
}
