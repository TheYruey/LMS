import './modalEnmendar.css';
import './modalAsignarAnalista.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import ListaPermisos from './listaPermisos';
import { FormControl, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: 3,
    p: 6,
    display: "flex",
    flexDirection: "column",
  };

export default function EditarRol(){
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant='contained' sx={{backgroundColor: "#12C2E9"}}>Editar</Button>
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
                        Editar rol
                    </Typography>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <FormControl id="datos" sx={{ width: '25ch' }}>
                        <TextField disabled label="No. identificador" defaultValue={"xxx"} variant="standard" />
                    </FormControl>
                    <FormControl id="datos" sx={{ width: '25ch' }}>
                        <TextField label="Nombre del rol" variant="standard" />
                    </FormControl>
                    <Typography id="transition-modal-title">
                        Permisos:
                    </Typography>
                    <FormControl id="datos" sx={{ width: '25ch' }}>
                        <TextField id="outlined-multiline-static" multiline
            rows={4} />
                    </FormControl>
                    <ListaPermisos />
                </div>
            <div id="botones">
                <Button variant="contained" sx={{margin: 2, backgroundColor: "#12C2E9"}}>Aceptar</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}