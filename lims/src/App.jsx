import { Button, Container, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './App.css'
export default function App(){
  return(
    <div id="fondo">
      <Container maxWidth= "xs" sx={{boxShadow: 1, position: "absolute", display: "flex", flexDirection: "column", marginLeft: "10%", marginTop: "10%", alignItems: "center", borderRadius: 5, backgroundColor: "white"}}>
        <img src="img\LIMS LOGO azul.png" alt="logo" />
        <Typography variant="h4" id="h4" sx={{alignSelf: "self-start",marginLeft: 3}}>Hola de nuevo,</Typography>
        <div className="credenciales">
          <label htmlFor="user">Usuario</label>
          <input type="text" name="user" placeholder="m.mendez" />
        </div>
        <div className="credenciales">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" placeholder="**********" />
        </div>
        <Button variant="outlined" id="login" component="a" href="/public/inicio_digitador.html" endIcon={<ArrowForwardIcon />}>Iniciar sesión</Button>
      </Container>
    </div>
  )
}
