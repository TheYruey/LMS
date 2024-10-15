import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: 3,
    p: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

export default function ModalAuditar(){
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant='contained' sx={{backgroundColor: "#12C2E9"}}>Auditar</Button>
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
            <Typography id="transition-modal-title" variant="h6" component="h2" sx={{marginBottom: 5}}>
            Auditar muestra
            </Typography>
            <Typography id="transition-modal-title" sx={{marginBottom: 3}}>
                ¿Desea auditar esta muestra?
            </Typography>
            <div>
                <Button variant="contained" sx={{margin: 2, backgroundColor: "#12C2E9"}}>Auditar</Button>
                <Button variant="contained" onClick={handleClose} sx={{margin: 2, backgroundColor: "#12C2E9"}}>Cancelar</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}