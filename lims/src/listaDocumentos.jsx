import './modalDatosUsuario.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

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

export default function ListaDocumentos(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen} variant='text'>Agregar</Button>
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
                    Documentos
                    </Typography>
                </div>
                <div id="contenedorPrincipal">
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Copia de la solicitud de registro." />
                    <FormControlLabel control={<Checkbox />} label="Copia de la formula cuali-cuantitativa de la muestra." />
                    <FormControlLabel control={<Checkbox />} label="Certificado del analisis del producto terminado." />
                    <FormControlLabel control={<Checkbox />} label="Formula quimica condensada y desarrollada (cuando aplique)." />
                    <FormControlLabel control={<Checkbox />} label="Certificado del analisis del estandar." />
                    <FormControlLabel control={<Checkbox />} label="Metodologia de valoracion del activo en producto terminado." />
                    <FormControlLabel control={<Checkbox />} label="Metodologia y especificaciones de disolucion." />
                    <FormControlLabel control={<Checkbox />} label="Estudios de estabilidad." />
                    <FormControlLabel control={<Checkbox />} label="Carta de solicitud de analisis." />
                </FormGroup>
                </div>
            <div id="botones">
                <Button variant="contained" sx={{margin: 2, backgroundColor: "#12C2E9"}}>Aceptar</Button>
                <Button variant="contained" onClick={handleClose} sx={{margin: 2, backgroundColor: "#12C2E9"}}>Cancelar</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}