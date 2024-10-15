import './infoMuestra.css';
import './hojaTrabajoAnalista.css';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, FormControl, TextField } from '@mui/material';
3
export default function HojaTrabajoAnalista(){
    return (
        <Container sx={{marginTop: "4%", marginRight: 3}}>
            <div id="top">
                <Button variant="contained" sx={{ height: 50, borderRadius: 15, marginRight: 2, backgroundColor: "#12C2E9"}}>
                <ArrowBackIcon />
                </Button>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    Hoja de trabajo
                </Typography>
            </div>
            <Container maxWidth="md" sx={{border: 2, borderRadius: 3, padding: "5px 0", marginBottom: 5}}>                
              <div id="principalContainer">
                <div id="sContainer">
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="standard-disabled" label="Número de control interno" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Número de oficio" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Fecha de ingreso" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Nombre del producto" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Cantidad de muestra" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="No. muestras etiquetadas" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Documentos" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                </div>
                <div id="sContainer">
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Forma famacéutica" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Fecha de digitación" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Modo de conservación" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="standard-disabled" label="Número de lote" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Fecha de vencimiento" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Cantidad de principios activos" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="standard-disabled" label="Principio activo/concentración" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Estándar" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                </div>
                <div id="sContainer">
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Envase primario" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="standard-disabled" label="Condición envase" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Producido por" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Distribuido por" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" variant="standard" sx={{ width: '25ch' }}>
                    <TextField  disabled id="standard-disabled" label="Solicitado por" defaultValue="xxxx" variant="standard" />
                  </FormControl>
                  <FormControl id="datos" sx={{ width: '25ch' }}>
                    <TextField disabled id="outlined-multiline-static" label="Observaciones" defaultValue="xxxx" multiline
        rows={4} />
                  </FormControl>
                </div>
              </div>
            </Container>
            <Container maxWidth="md">
                <Container>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Análisis
                    </Typography>
                    <div id="analisis">
                        <div>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField label="Análisis actual" variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField label="Principio actual asignado" variant="standard" />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField label="Fecha asignación" variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField label="Fuente de metodología análitica" variant="standard" />
                            </FormControl>
                        </div>
                    </div>
                </Container>
                <Container>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Resultados
                    </Typography>
                    <div id="resultados">
                        <div>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField label="Descripción" variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField id="outlined-multiline-static" label="Resultado" multiline
                    rows={4} />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField label="Especificación" variant="standard" />
                            </FormControl>
                            <FormControl id="datos" sx={{ width: '25ch' }}>
                                <TextField id="outlined-multiline-static" label="Observaciones" multiline
                    rows={4} />
                            </FormControl>
                        </div>
                    </div>
                </Container>
            </Container>
            <Container maxWidth="md" sx={{display: "flex", flexDirection: "row", justifyContent: "right", marginBottom: 8}}>
            <Button variant="contained" sx={{margin: 2, backgroundColor: "#12C2E9"}}>Añadir</Button>
            <Button variant="contained" sx={{margin: 2, marginRight: 0, backgroundColor: "#12C2E9"}}>Guardar</Button>
            </Container>            
        </Container>
      );
    }