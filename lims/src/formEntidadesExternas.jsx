import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, Select, MenuItem, TextField } from '@mui/material';
import { obtenerTiposEntidad, guardarEntidadExterna } from './services/apiService';
import './infoMuestra.css';
import './hojaTrabajoAnalista.css';

export default function FormEntidadesExternas() {
    const [value, setValue] = useState('No');
    const [tiposEntidad, setTiposEntidad] = useState([]);
    const [entidadData, setEntidadData] = useState({
        rnc: '',
        nombreCorto: '',
        nombreLargo: '',
        telefono: '',
        direccion: '',
        correo: '',
        tipoEntidad: '',
        esExtranjera: false
    });

    useEffect(() => {
        const fetchTiposEntidad = async () => {
            try {
                const tipos = await obtenerTiposEntidad();
                setTiposEntidad(tipos);
            } catch (error) {
                console.error("Error al obtener los tipos de entidad:", error);
            }
        };
        fetchTiposEntidad();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEntidadData({
            ...entidadData,
            [name]: name === 'esExtranjera' ? value === 'Sí' : value
        });
        setValue(value);
    };

    const handleSubmit = async () => {
        try {
            await guardarEntidadExterna(entidadData);
            console.log("Entidad guardada con éxito");
            // Limpiar el formulario después de guardar
            setEntidadData({
                rnc: '',
                nombreCorto: '',
                nombreLargo: '',
                telefono: '',
                direccion: '',
                correo: '',
                tipoEntidad: '',
                esExtranjera: false
            });
            setValue('No');
        } catch (error) {
            console.error("Error al guardar la entidad externa:", error);
        }
    };

    return (
        <Container sx={{ marginTop: "5%" }}>
            <div id="top">
                <Button variant="contained" sx={{ height: 50, borderRadius: 15, marginRight: 2, backgroundColor: "#12C2E9" }}>
                    <ArrowBackIcon />
                </Button>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    Hoja de trabajo
                </Typography>
            </div>
            <Container maxWidth="md">
                <Container>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Resultados
                    </Typography>
                    <div id="resultados">
                        <div>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField
                                    label="RNC"
                                    variant="standard"
                                    name="rnc"
                                    value={entidadData.rnc}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField
                                    label="Nombre corto"
                                    variant="standard"
                                    name="nombreCorto"
                                    value={entidadData.nombreCorto}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField
                                    label="Nombre largo"
                                    variant="standard"
                                    name="nombreLargo"
                                    value={entidadData.nombreLargo}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField
                                    label="Teléfono"
                                    variant="standard"
                                    name="telefono"
                                    value={entidadData.telefono}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField
                                    label="Dirección"
                                    variant="standard"
                                    name="direccion"
                                    value={entidadData.direccion}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField
                                    label="Correo"
                                    variant="standard"
                                    name="correo"
                                    value={entidadData.correo}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                                <InputLabel id="tipo-entidad-label">Tipo de entidad</InputLabel>
                                <Select
                                    labelId="tipo-entidad-label"
                                    id="tipoEntidad"
                                    name="tipoEntidad"
                                    value={entidadData.tipoEntidad}
                                    onChange={handleChange}
                                >
                                    {tiposEntidad.map((tipo) => (
                                        <MenuItem key={tipo.id} value={tipo.id}>{tipo.nombre}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel id="es-extranjera-label">¿Es extranjera?</FormLabel>
                                <RadioGroup
                                    aria-labelledby="es-extranjera-label"
                                    name="esExtranjera"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="Sí" control={<Radio />} label="Sí" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </Container>
            </Container>
            <Container maxWidth="md" sx={{ display: "flex", flexDirection: "row", justifyContent: "right", marginBottom: 8 }}>
                <Button variant="contained" sx={{ margin: 2, backgroundColor: "#12C2E9" }} onClick={handleSubmit}>Añadir</Button>
            </Container>
        </Container>
    );
}
