import './menu.css';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { Container } from '@mui/material';


export default function MenuAnalista(){
  return(
    <Container maxWidth="xs" sx={{ position: "fixed", backgroundColor: "#1E2A5E", color: "white", height: "100vh" , width: 300, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <MenuList id="navBar">
        <div id='img'>
            <img src="/img/LIMS LOGO.png" alt="logo" />
        </div>
        <MenuItem id="itemsMenu"  component="a" href="/public/inicio_analista.html">
          <ListItemIcon sx={{marginRight: 2}}>
            <HomeRoundedIcon fontSize= "large" sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText>Inicio</ListItemText>
        </MenuItem>

        <MenuItem id="itemsMenu" component="a" href="/public/muestras_analizar.html">
          <ListItemIcon sx={{marginRight: 2}}>
            <MessageRoundedIcon fontSize="large" sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText>Muestras en fila</ListItemText>
        </MenuItem>

        <MenuItem id="itemsMenu" component="a" href="/public/historial_muestras_analista.html">
          <ListItemIcon sx={{marginRight: 2}}>
            <AppsRoundedIcon fontSize="large" sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText>Historial general</ListItemText>
        </MenuItem>
        </MenuList>
        <MenuList>
        <Divider />
        <MenuItem id="itemsMenu">
          <ListItemIcon sx={{marginRight: 2}}>
            <ExitToAppRoundedIcon fontSize="large" sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText>Salir</ListItemText>
        </MenuItem>
      </MenuList>
    </Container>
  )
}