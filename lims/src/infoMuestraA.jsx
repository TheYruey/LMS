import './infoMuestraA.css';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, FormControl, TextField } from '@mui/material';
export default function InfoMuestraA(){
    return (
        <Container sx={{marginTop: "4%", marginRight: 4}}>
            <div id="top">
                <Button variant="contained" sx={{ height: 50, borderRadius: 15, marginRight: 2, backgroundColor: "#12C2E9"}}>
                <ArrowBackIcon />
                </Button>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    Información de la muestra
                </Typography>
            </div>
            <Container maxWidth="md" sx={{border: 2, borderRadius: 3, padding: "5px 0", marginBottom: 5}}>                
              <div id="principalContainer">
                <div id="sContainer">
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="standard-disabled" label="Número de control interno" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Fecha de ingreso" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Nombre del producto" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Forma famacéutica" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Estándar" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Producido por" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="outlined-multiline-static" label="Observaciones" defaultValue="xxxx" multiline rows={4} />
                  </FormControl>
                </div>
                <div id="sContainer">
                <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Número de oficio" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Fecha de vencimiento o expiracion" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Cantidad de muestra" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Cantidad de principios activos" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Envase primario" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Distribuido por" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                </div>
                <div id="sContainer">
                <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="standard-disabled" label="Número de lote" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Modo de conservación" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="standard-disabled" label="Principio activo/concentración" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Documentos" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="standard-disabled" label="Condición envase" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Solicitado por" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                </div>
              </div>
            </Container>
                      <Container id="organoleptica" sx={{ marginBottom: 2 }}>
            <div id="topAnalisis">
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Organoleptica:
              </Typography>
            </div>
            <Container maxWidth="md" sx={{border: 2, borderRadius: 3, padding: "5px 0"}}>                
              <div id="principalContainer">
                <div id="sContainer">
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="standard-disabled" label="Descripcion" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Observaciones" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                </div>
                <div id="sContainer">
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Rango" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Resultado" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                </div>
              </div>
            </Container>
          </Container>

          <Container id="datosAnalisis" sx={{ marginBottom: 2 }}>
            <div id="topAnalisis">
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Datos del análisis:
              </Typography>
            </div>
            <Container maxWidth="md" sx={{border: 2, borderRadius: 3, padding: "5px 0"}}>                
              <div id="principalContainer">
                <div id="sContainer">
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="standard-disabled" label="Análisis actual" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Fecha de asignación" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="standard-disabled" label="Especificación" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                </div>
                <div id="sContainer">
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Cantidad principio actual" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Fecha de finalizacion" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                </div>
                <div id="sContainer">
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Resultado" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Rango" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                </div>
              </div>
            </Container>
            </Container>           
        </Container>
      );
    }