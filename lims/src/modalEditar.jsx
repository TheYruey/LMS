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
import { FormControl, InputLabel, Select, TextField } from '@mui/material';

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

export default function ModalEditar(){
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
                    Editar
                    </Typography>
                </div>
                <div id="contenedorPrincipal">
                    <div className="sndContainer">
                        <FormControl id="datos" sx={{ width: '25ch' }}>
                            <TextField disabled label="Id" defaultValue={"xxx"} variant="standard" />
                        </FormControl>
                        <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                            <InputLabel id="demo-simple-select-standard-label">Descripción</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Age"
                            >
                            </Select>
                        </FormControl>
                    </div>
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