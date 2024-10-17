import './modal.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import ListaDocumentos from './listaDocumentos';
import { FormControl, IconButton, InputLabel, Select, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: 3,
    p: 8,
  };

export default function ModalComponent(){
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div> 
      
      <Button onClick={handleOpen} className="custom-height-button">         </Button>

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
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Datos de la muestra
              </Typography>
              <IconButton onClick={handleClose} aria-label="delete">
                <CloseIcon />
              </IconButton>
            </div>
            <div id="principalContainer">
              <div id="sContainer">
                <FormControl id="datos" sx={{ width: '25ch' }}>
                  <TextField label="Número de control interno" variant="standard" />
                </FormControl>
                <FormControl id="datos" sx={{ width: '25ch' }}>
                  <TextField label="Número de oficio" variant="standard" />
                </FormControl>
                <FormControl id="datos" sx={{ width: '25ch' }}>
                  <TextField label="Fecha de ingreso" variant="standard" />
                </FormControl>
                <FormControl id="datos" sx={{ width: '25ch' }}>
                  <TextField label="Nombre del producto" variant="standard" />
                </FormControl>
                <FormControl id="datos" sx={{ width: '25ch' }}>
                  <TextField label="Cantidad de muestra" variant="standard" />
                </FormControl>
                <FormControl id="datos" sx={{ width: '25ch' }}>
                  <TextField label="Documentos" variant="standard" />
                </FormControl>
                <ListaDocumentos />
              </div>
              <div id="sContainer">
                <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                  <InputLabel id="demo-simple-select-standard-label">Forma famacéutica</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                  >
                  </Select>
                </FormControl>
                <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                  <InputLabel id="demo-simple-select-standard-label">Modo de conservación</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                  >
                  </Select>
                </FormControl>
                <FormControl id="datos" sx={{ width: '25ch' }}>
                  <TextField label="Número de lote" variant="standard" />
                </FormControl>
                <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                  <InputLabel id="demo-simple-select-standard-label">Fecha de vencimiento</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                  >
                  </Select>
                </FormControl>
                <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                  <InputLabel id="demo-simple-select-standard-label">Cantidad de principios activos</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                  >
                  </Select>
                </FormControl>
                <FormControl id="datos" sx={{ width: '25ch' }}>
                  <TextField label="Principio activo/concentración" variant="standard" />
                </FormControl>
                <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                  <InputLabel id="demo-simple-select-standard-label">Estándar</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                  >
                  </Select>
                </FormControl>
              </div>
              <div id="sContainer">
                <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                  <InputLabel id="demo-simple-select-standard-label">Envase primario</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                  >
                  </Select>
                </FormControl>
                <FormControl id="datos" sx={{ width: '25ch' }}>
                  <TextField label="Condición envase" variant="standard" />
                </FormControl>
                <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                  <InputLabel id="demo-simple-select-standard-label">Producido por</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                  >
                  </Select>
                </FormControl>
                <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                  <InputLabel id="demo-simple-select-standard-label">Distribuido por</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                  >
                  </Select>
                </FormControl>
                <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                  <InputLabel id="demo-simple-select-standard-label">Solicitado por</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                  >
                  </Select>
                </FormControl>
                <FormControl id="datos" sx={{ width: '25ch' }}>
                      <TextField id="outlined-multiline-static" label="Observaciones" multiline
          rows={4} />
                    </FormControl>
              </div>
            </div>
            <Button variant="contained" sx={{marginLeft: 88, backgroundColor: "#12C2E9"}}>Guardar</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}