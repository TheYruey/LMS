import React from 'react';
import './usuarios.css';
import { Button, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';

const usuarios = [
    { cedula: "0010858585", nombre: "Cameron Williamson", usuario: "CamWill", rol: "Analista", clave: "********" },
    { cedula: "0050979797", nombre: "Jacob Jones", usuario: "JacJon", rol: "Supervisor", clave: "********" },
    { cedula: "4020858585", nombre: "Kristin Watson", usuario: "KrisWat", rol: "Supervisor", clave: "********" },
    { cedula: "4020979797", nombre: "Esther Howard", usuario: "EstHow", rol: "Analista", clave: "********" },
    { cedula: "0030858585", nombre: "Heidi Moor", usuario: "HeiMo", rol: "Digitador", clave: "********" },
    { cedula: "0030979797", nombre: "Ronald Richards", usuario: "RonRich", rol: "Analista", clave: "********" }
];

export default function Usuarios() {
    return (
        <div className="usuarios-container">
            <aside className="sidebar">
                <div className="logo">LMS</div>
                <nav>
                    <button className="icon home-icon"></button>
                    <button className="icon edit-icon"></button>
                    <button className="icon chat-icon"></button>
                    <button className="icon menu-icon"></button>
                </nav>
            </aside>
            <Container className="content">
                <div className="header">
                    <Button variant="contained" className="back-button">
                        <ArrowBackIcon />
                    </Button>
                    <Typography variant="h5">Usuarios</Typography>
                </div>
                <Button variant="contained" className="add-button">+ Añadir usuario</Button>
                <TableContainer component={Paper} className="table-container">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Cédula</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Usuario</TableCell>
                                <TableCell>Rol</TableCell>
                                <TableCell>Clave</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {usuarios.map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell>{user.cedula}</TableCell>
                                    <TableCell>{user.nombre}</TableCell>
                                    <TableCell>{user.usuario}</TableCell>
                                    <TableCell>
                                        <span className={`role-badge ${user.rol.toLowerCase()}`}>{user.rol}</span>
                                    </TableCell>
                                    <TableCell>{user.clave}</TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <VisibilityIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
}
