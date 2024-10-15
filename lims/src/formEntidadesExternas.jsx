import './infoMuestra.css';
import './hojaTrabajoAnalista.css';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, Select, TextField } from '@mui/material';
import React from 'react';
3
export default function FormEntidadesExternas(){

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Container sx={{marginTop: "5%"}}>
            <div id="top">
                <Button variant="contained" sx={{ height: 50, borderRadius: 15, marginRight: 2, backgroundColor: "#12C2E9"}}>
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
                                <TextField label="RNC" variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField label="Nombre corto" variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField label="Nombre largo" variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField label="Teléfono" variant="standard" />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField label="Dirección" variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField label="Correo" variant="standard" />
                            </FormControl>
                            <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                                <InputLabel id="demo-simple-select-standard-label">Tipo de entidad</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    label="Age"
                                >
                                </Select>
                            </FormControl>
                            <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">¿Es extranjera?</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Sí" />
                                    <FormControlLabel value="male" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </Container>
            </Container>
            <Container maxWidth="md" sx={{display: "flex", flexDirection: "row", justifyContent: "right", marginBottom: 8}}>
            <Button variant="contained" sx={{margin: 2, backgroundColor: "#12C2E9"}}>Añadir</Button>
            </Container>            
        </Container>
      );
    }