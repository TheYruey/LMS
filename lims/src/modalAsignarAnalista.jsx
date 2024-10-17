import './modalEnmendar.css';
import './modalAsignarAnalista.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import { FormControl, InputLabel, Select, TextField, MenuItem, Grid, Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "700px",
    bgcolor: 'background.paper',
    borderRadius: 3,
    p: 4,
    display: "flex",
    flexDirection: "column",
};

export default function ModalAsignarAnalista() {
    const [open, setOpen] = useState(false);
    const [analista, setAnalista] = useState('');
    const [analisis, setAnalisis] = useState('');
    const [associations, setAssociations] = useState([]);
    const numeroMuestra = "12345"; // Número de muestra que quieres mostrar

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Función para agregar la asociación a la tabla
    const handleAddAssociation = () => {
        if (analista && analisis) {
            setAssociations([...associations, { analista, analisis }]);
            setAnalista('');  // Limpiar el campo de analista
            setAnalisis('');   // Limpiar el campo de análisis
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button 
                    onClick={handleOpen} 
                    variant='contained' 
                    sx={{ backgroundColor: "#12C2E9", marginRight: 2 }}
                >
                    Asignar analista
                </Button>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: { timeout: 500 },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div id="top" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                            <Button
                                variant="contained"
                                onClick={handleClose}
                                sx={{ height: 40, borderRadius: 10, marginRight: 2, backgroundColor: "#12C2E9" }}
                            >
                                <ArrowBackIcon />
                            </Button>
                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                Asignar analista
                            </Typography>
                        </div>

                        {/* Muestra el número de muestra (deshabilitado) */}
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <TextField
                                label="Número de muestra"
                                value={numeroMuestra}
                                variant="outlined"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </FormControl>

                        <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="standard">
                                    <InputLabel>Analista encargado</InputLabel>
                                    <Select
                                        value={analista}
                                        onChange={(e) => setAnalista(e.target.value)}
                                    >
                                        <MenuItem value="Analista1">Analista 1</MenuItem>
                                        <MenuItem value="Analista2">Analista 2</MenuItem>
                                        <MenuItem value="Analista3">Analista 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="standard">
                                    <InputLabel>Análisis</InputLabel>
                                    <Select
                                        value={analisis}
                                        onChange={(e) => setAnalisis(e.target.value)}
                                    >
                                        <MenuItem value="Analisis1">Análisis 1</MenuItem>
                                        <MenuItem value="Analisis2">Análisis 2</MenuItem>
                                        <MenuItem value="Analisis3">Análisis 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        {/* Tabla de asociaciones */}
                        <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
                            <Grid item xs={12}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Analista encargado</TableCell>
                                            <TableCell>Análisis</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {associations.map((assoc, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{assoc.analista}</TableCell>
                                                <TableCell>{assoc.analisis}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Grid>
                        </Grid>

                        {/* Botón para agregar asociación */}
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <IconButton onClick={handleAddAssociation} color="primary" sx={{ backgroundColor: "#12C2E9" }}>
                                    <AddIcon />
                                </IconButton>
                            </Grid>
                        </Grid>

                        <div id="botones" style={{ textAlign: "right", marginTop: "20px" }}>
                            <Button variant="contained" sx={{ backgroundColor: "#12C2E9" }}>
                                Aceptar
                            </Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
