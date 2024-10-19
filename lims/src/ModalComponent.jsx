import './ModalComponent.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
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
  maxWidth: '80vw',
};

export default function ModalComponent({ open, setOpen, sampleData }) {
  const handleClose = () => setOpen(false);

  // Estado local para almacenar los valores editados
  const [formData, setFormData] = useState(sampleData);

  // Actualiza los campos al editar
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Restablecer los campos con los valores originales
  const handleCancel = () => {
    setFormData(sampleData); // Vuelve a los valores originales
  };

  // Guardar cambios y cerrar
  const handleSave = () => {
    // Aquí podrías hacer una solicitud para guardar los cambios en tu backend
    setOpen(false);
  };

  return (
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
          <div id="top" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Datos de la muestra
            </Typography>
            <IconButton onClick={handleClose} aria-label="close">
             <CloseIcon />
            </IconButton>

          </div>
          
          <div id="principalContainer" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            {/* Columna 1 */}
            <div id="sContainer">
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Número de control interno"
                  variant="standard"
                  value={formData?.controlNumber || ''}
                  onChange={(e) => handleChange('controlNumber', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Número de oficio"
                  variant="standard"
                  value={formData?.oficioNumber || ''}
                  onChange={(e) => handleChange('oficioNumber', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Fecha de ingreso"
                  variant="standard"
                  value={formData?.entryDate || ''}
                  onChange={(e) => handleChange('entryDate', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Nombre del Producto"
                  variant="standard"
                  value={formData?.entryDate || ''}
                  onChange={(e) => handleChange('nombreProducto', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Cantidad de muestra"
                  variant="standard"
                  value={formData?.entryDate || ''}
                  onChange={(e) => handleChange('cantidadMuestra', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Documentos"
                  variant="standard"
                  value={formData?.entryDate || ''}
                  onChange={(e) => handleChange('documentos', e.target.value)}
                />
              </FormControl>
              <ListaDocumentos />
            </div>

            {/* Columna 2 */}
            <div id="sContainer">
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Forma farmacéutica"
                  variant="standard"
                  value={formData?.formaFarmaceutica || ''}
                  onChange={(e) => handleChange('formaFarmaceutica', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Modo de conservación"
                  variant="standard"
                  value={formData?.modoConservacion || ''}
                  onChange={(e) => handleChange('modoConservacion', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Fecha de vencimiento"
                  variant="standard"
                  value={formData?.fechaVencimiento || ''}
                  onChange={(e) => handleChange('fechaVencimiento', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Cantidad de principios activos"
                  variant="standard"
                  value={formData?.fechaVencimiento || ''}
                  onChange={(e) => handleChange('cantPrincAct', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Principio activo/concentración"
                  variant="standard"
                  value={formData?.fechaVencimiento || ''}
                  onChange={(e) => handleChange('PrincAct', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Estandar"
                  variant="standard"
                  value={formData?.fechaVencimiento || ''}
                  onChange={(e) => handleChange('estandar', e.target.value)}
                />
              </FormControl>
            </div>

            {/* Columna 3 */}
            <div id="sContainer">
            <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Envase Primario"
                  variant="standard"
                  value={formData?.producidoPor || ''}
                  onChange={(e) => handleChange('envasePrimario', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Producido por"
                  variant="standard"
                  value={formData?.producidoPor || ''}
                  onChange={(e) => handleChange('producidoPor', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Distribuido por"
                  variant="standard"
                  value={formData?.distribuidoPor || ''}
                  onChange={(e) => handleChange('distribuidoPor', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Solicitado por"
                  variant="standard"
                  value={formData?.distribuidoPor || ''}
                  onChange={(e) => handleChange('solicitadoPor', e.target.value)}
                />
              </FormControl>
              <FormControl id="datos" sx={{ width: '25ch' }}>
                <TextField
                  label="Observaciones"
                  variant="standard"
                  value={formData?.observaciones || ''}
                  multiline
                  rows={4}
                  onChange={(e) => handleChange('observaciones', e.target.value)}
                />
              </FormControl>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
            <Button variant="outlined" onClick={handleCancel}>
              Cancelar cambios
            </Button>
            <Button variant="contained" sx={{ backgroundColor: "#12C2E9" }} onClick={handleSave}>
              Aceptar
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
