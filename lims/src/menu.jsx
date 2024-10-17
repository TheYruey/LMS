import './menu.css';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { Container } from '@mui/material';
import ModalComponent from './modal';


export default function Menu(){
  return(
    <Container maxWidth="xs" sx={{ position: "fixed", backgroundColor: "#1E2A5E", color: "white", height: "100vh" , width: 300, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <MenuList id="navBar">
        <div id='img'>
            <img src="/img/LIMS LOGO.png" alt="logo" />
        </div>
        <MenuItem id="itemsMenu"  component="a" href="/public/inicio_digitador.html">
          <ListItemIcon sx={{marginRight: 2}}>
            <HomeRoundedIcon fontSize= "large" sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText>Inicio</ListItemText>
        </MenuItem>

        <MenuItem id="itemsMenu" sx={{ display: 'flex', alignItems: 'center' }}>
          <ListItemIcon sx={{ marginRight: 2 }}>
            <BorderColorRoundedIcon fontSize="large" sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>Registrar muestra</ListItemText>
          <ModalComponent />
        </MenuItem>

        <MenuItem id="itemsMenu" component="a" href="/public/historial_muestras_digitador.html">
          <ListItemIcon sx={{marginRight: 2}}>
            <ArticleRoundedIcon fontSize="large" sx={{color: "white"}} />
          </ListItemIcon>
          <ListItemText>Historial de muestras</ListItemText>
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