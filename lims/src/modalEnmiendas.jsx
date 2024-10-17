import './modalEnmiendas.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import EnmiendasTable from './TableComponent'; 


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

export default function ModalEnmiendas(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant='contained' sx={{ backgroundColor: "#12C2E9" }}>
                Lista de enmiendas
            </Button>
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
                        <div id="top" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <Button
                                variant="contained"
                                onClick={handleClose}
                                sx={{ height: 50, borderRadius: 15, marginRight: 2, backgroundColor: "#12C2E9" }}
                            >
                                <ArrowBackIcon />
                            </Button>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Lista de enmiendas
                            </Typography>
                        </div>
                        
                        {/* Aquí se incluye el TableComponent */}
                        <EnmiendasTable />

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
