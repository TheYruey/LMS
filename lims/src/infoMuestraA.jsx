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
        organolepticaEspecificacion: 'xxxx',
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
                     <FormControl id="datos" sx={{ width: '25ch' }}>
                        <TextField disabled label="Cantidad de muestra" value={muestraData.cantidadMuestra} variant="standard" />
                    </FormControl>
                    <FormControl id="datos" sx={{ width: '25ch' }}>
                        <TextField disabled label="Documentos" value={muestraData.documentos} variant="standard" />
                    </FormControl>
                    <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Número de oficio" value={muestraData.numeroOficio} variant="standard" />
                        </FormControl>
                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Fecha de vencimiento o expiracion" value={muestraData.fechaVencimiento} variant="standard" />
                        </FormControl>

                    </div>
                    <div id="sContainer">

                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Forma famacéutica" value={muestraData.formaFarmaceutica} variant="standard" />
                        </FormControl>
                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Forma famacéutica" value={muestraData.formaFarmaceutica} variant="standard" />
                        </FormControl>
                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Modo de conservación" value={muestraData.modoConservacion} variant="standard" />
                        </FormControl>
                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Número de lote" value={muestraData.numeroLote} variant="standard" />
                        </FormControl>
                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Cantidad de principios activos" value={muestraData.principiosActivos} variant="standard" />
                        </FormControl>         <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Principio activo/concentración" value={muestraData.principiosActivos} variant="standard" />
                        </FormControl>         <FormControl id="datos" sx={{ width: '25ch' }}>
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
                            <TextField disabled label="Observaciones" value={muestraData.observaciones} variant="standard" />
                        </FormControl>
                        
                    </div>
                </div>
            </Container>

            {/* Organoleptica */}
            <Container id="organoleptica" sx={{ marginBottom: 2 }}>
                <Typography id="transition-modal-title" variant="h6" component="h2" marginLeft={12}>
                    Organoleptica:
                </Typography>
                <Container maxWidth="md" sx={{ border: 2, borderRadius: 3, padding: "5px 0", marginBottom: 5 }}>
                    <div id="principalContainer">
                        <div id="sContainer">
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Descripcion" value={muestraData.organolepticaDescripcion} variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Observaciones" value={muestraData.organolepticaObservaciones} variant="standard" />
                            </FormControl>

                        </div>
                        <div id="sContainer">
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Especificacion" value={muestraData.organolepticaEspecificacion} variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Resultado" value={muestraData.organolepticaResultado} variant="standard" />
                            </FormControl>

                        </div>
                    </div>
                </Container>
            </Container>

            {/* Datos del análisis */}
            <Container id="datosAnalisis" sx={{ marginBottom: 2 }}>
                <Typography id="transition-modal-title" variant="h6" component="h2" marginLeft={12}>
                    Datos del análisis:
                </Typography>
                <Container maxWidth="md" sx={{ border: 2, borderRadius: 3, padding: "5px 0" }}>
                    <div id="principalContainer">
                        <div id="sContainer">
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Análisis actual" value={muestraData.analisisActual} variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Análisis actual" value={muestraData.cantidadPrincipios} variant="standard" />
                            </FormControl>
                   
                        </div>
                        <div id="sContainer">
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Fecha de asignacion" value={muestraData.fechaAsignacion} variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Fecha de finalizacion" value={muestraData.fechaFinalizacion} variant="standard" />
                            </FormControl>

                        </div>
                        <div id="sContainer">
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Especificacion" value={muestraData.especificacion} variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Rango" value={muestraData.rango} variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField disabled label="Resultado" value={muestraData.resultado} variant="standard" />
                            </FormControl>

                        </div>
                    </div>
                </Container>
            </Container>
        </Container>
    );
}
