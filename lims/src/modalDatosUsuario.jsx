import './modalEnmendar.css';
import './modalDatosUsuario.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, Select, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "700px",
    bgcolor: 'background.paper',
    borderRadius: 3,
    p: 6,
    display: "flex",
    flexDirection: "column",
  };

export default function ModalDatosUsuario(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

  return (
    <div>
      <Button onClick={handleOpen} variant='contained' sx={{backgroundColor: "#12C2E9"}}>Datos de usuario</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
                <div id="top">
                    <Button variant="contained" onClick={handleClose} sx={{ height: 50, borderRadius: 15, marginRight: 2, backgroundColor: "#12C2E9"}}>
                        <ArrowBackIcon />
                    </Button>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Datos de usuario
                    </Typography>
                </div>
                <div id="contenedorPrincipal">
                    <div className="sndContainer">
                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Cédula" defaultValue={"xxx"} variant="standard" />
                        </FormControl>
                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField label="Nombre y apellido" variant="standard" />
                        </FormControl>
                        <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                            <InputLabel id="demo-simple-select-standard-label">Rol</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Age"
                            >
                            </Select>
                        </FormControl>
                    </div>
                    <div className="sndContainer">
                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField label="Nombre de usuario" variant="standard" />
                        </FormControl>
                        <FormControl id="datos" sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl id="datos" sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Confirmar contraseña</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                </div>
            <div>
                <Button variant="contained" sx={{margin: 2, backgroundColor: "#12C2E9"}}>Aceptar</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}