import React, { useState } from 'react';
import { Button, Container, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';  // Importar el hook para la navegación
import './App.css';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook para navegar a otras páginas

  const handleLogin = () => {
    // Lógica para redirigir según el usuario y la contraseña
    if (username === 'admin' && password === '1234') {
      navigate('/admin'); // Redirige a la interfaz de admin
    } else if (username === 'user' && password === '1234') {
      navigate('/user');  // Redirige a la interfaz de usuario
    } else if (username === 'supervisor' && password === '1234') {
      navigate('/supervisor');  // Redirige a la interfaz de supervisor
    } else {
      navigate('/guest');  // Redirige a una interfaz genérica o de invitado
    }
  };

  return (
    <div id="fondo">
      <Container maxWidth="xs" sx={{ boxShadow: 1, position: "absolute", display: "flex", flexDirection: "column", marginLeft: "10%", marginTop: "10%", alignItems: "center", borderRadius: 5, backgroundColor: "white" }}>
        <img src="img/LIMS LOGO azul.png" alt="logo" />
        <Typography variant="h4" id="h4" sx={{ alignSelf: "self-start", marginLeft: 3 }}>Hola de nuevo,</Typography>
        <div className="credenciales">
          <label htmlFor="user">Usuario</label>
          <input
            type="text"
            name="user"
            placeholder="m.mendez"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Actualiza el estado del usuario
          />
        </div>
        <div className="credenciales">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Actualiza el estado de la contraseña
          />
        </div>
        <Button variant="outlined" id="login" endIcon={<ArrowForwardIcon />} onClick={handleLogin}>
          Iniciar sesión
        </Button>
      </Container>
    </div>
  );
}