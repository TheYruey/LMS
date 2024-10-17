import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, FormControl, TextField } from '@mui/material';
import { obtenerMuestraPorId, enmendarMuestra, auditarMuestra } from './services/apiService';  
import './infoMuestra.css';

export default function InfoMuestra() {
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

    const handleEnmendarClick = async () => {
        try {
            await enmendarMuestra(1, muestraData);  // Cambia el ID por el real
            console.log("Muestra enmendada correctamente");
        } catch (error) {
            console.error("Error al enmendar la muestra:", error);
        }
    };

    const handleAuditarClick = async () => {
        try {
            await auditarMuestra(1);  // Cambia el ID por el real
            console.log("Muestra auditada correctamente");
        } catch (error) {
            console.error("Error al auditar la muestra:", error);
        }
    };

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

            {/* Botones para Enmendar y Auditar */}
            <Container maxWidth="md" sx={{ display: "flex", flexDirection: "row", justifyContent: "right", marginBottom: 8 }}>
                <Button variant="contained" sx={{ margin: 2, backgroundColor: "#12C2E9" }} onClick={handleEnmendarClick}>
                    Enmendar
                </Button>
                <Button variant="contained" sx={{ margin: 2, marginRight: 0, backgroundColor: "#12C2E9" }} onClick={handleAuditarClick}>
                    Auditar
                </Button>
            </Container>
        </Container>
    );
}
