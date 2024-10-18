import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, FormControl, TextField } from '@mui/material';
import { obtenerMuestraPorId } from './services/apiService';  // Importa la función del servicio
import './infoMuestraA.css';

export default function InfoMuestraA() {
    const [muestraData, setMuestraData] = useState({
        controlInterno: 'xxxx',
        fechaIngreso: 'xxxx',
        nombreProducto: 'xxxx',
        formaFarmaceutica: 'xxxx',
        estandar: 'xxxx',
        producidoPor: 'xxxx',
        observaciones: 'xxxx',
        numeroOficio: 'xxxx',
        fechaVencimiento: 'xxxx',
        cantidadMuestra: 'xxxx',
        principiosActivos: 'xxxx',
        envasePrimario: 'xxxx',
        distribuidoPor: 'xxxx',
        numeroLote: 'xxxx',
        modoConservacion: 'xxxx',
        documentos: 'xxxx',
        condicionEnvase: 'xxxx',
        solicitadoPor: 'xxxx',
        organolepticaDescripcion: 'xxxx',
        organolepticaObservaciones: 'xxxx',
        organolepticaRango: 'xxxx',
        organolepticaResultado: 'xxxx',
        analisisActual: 'xxxx',
        fechaAsignacion: 'xxxx',
        especificacion: 'xxxx',
        cantidadPrincipios: 'xxxx',
        fechaFinalizacion: 'xxxx',
        resultado: 'xxxx',
        rango: 'xxxx'
    });

    useEffect(() => {
        const fetchMuestraData = async () => {
            try {
                const data = await obtenerMuestraPorId(1);  // Cambia el ID por el real
                setMuestraData(data);
            } catch (error) {
                console.error("Error al obtener los datos de la muestra:", error);
            }
        };

        fetchMuestraData();
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
                            <TextField disabled label="Fecha de ingreso" value={muestraData.fechaIngreso} variant="standard" />
                        </FormControl>
                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Nombre del producto" value={muestraData.nombreProducto} variant="standard" />
                        </FormControl>
                        {/* Continúa con los demás campos de manera similar */}
                    </div>
                    <div id="sContainer">
                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Número de oficio" value={muestraData.numeroOficio} variant="standard" />
                        </FormControl>
                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Fecha de vencimiento o expiracion" value={muestraData.fechaVencimiento} variant="standard" />
                        </FormControl>
                        {/* Continúa con los demás campos de manera similar */}
                    </div>
                </div>
            </Container>

            {/* Organoleptica */}
            <Container id="organoleptica" sx={{ marginBottom: 2 }}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    Organoleptica:
                </Typography>
                <Container maxWidth="md" sx={{ border: 2, borderRadius: 3, padding: "5px 0" }}>
                    <div id="principalContainer">
                        <div id="sContainer">
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Descripcion" value={muestraData.organolepticaDescripcion} variant="standard" />
                            </FormControl>
                            {/* Continúa con los demás campos */}
                        </div>
                    </div>
                </Container>
            </Container>

            {/* Datos del análisis */}
            <Container id="datosAnalisis" sx={{ marginBottom: 2 }}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    Datos del análisis:
                </Typography>
                <Container maxWidth="md" sx={{ border: 2, borderRadius: 3, padding: "5px 0" }}>
                    <div id="principalContainer">
                        <div id="sContainer">
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Análisis actual" value={muestraData.analisisActual} variant="standard" />
                            </FormControl>
                            {/* Continúa con los demás campos */}
                        </div>
                    </div>
                </Container>
            </Container>
        </Container>
    );
}
