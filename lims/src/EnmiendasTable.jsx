import React from 'react'; // Importamos React.
import { DataGrid } from '@mui/x-data-grid'; // Importamos DataGrid de MUI.

const rows = [
  { id: 1, controlInterno: '01', analisis: 'Analisis1', motivo: 'Motivo1', comentario: 'Comentario', responsable: 'Responsable1' },
  { id: 2, controlInterno: '02', analisis: 'Analisis2', motivo: 'Motivo2', comentario: 'Comentario', responsable: 'Responsable1' },
  { id: 3, controlInterno: '03', analisis: 'Analisis3', motivo: 'Motivo3', comentario: 'Comentario', responsable: 'Responsable1' },
  { id: 4, controlInterno: '04', analisis: 'Analisis4', motivo: 'Motivo4', comentario: 'Comentario', responsable: 'Responsable1' },
  { id: 5, controlInterno: '05', analisis: 'Analisis5', motivo: 'Motivo5', comentario: 'Comernarario', responsable: 'Responsable1' },
  { id: 6, controlInterno: '06', analisis: 'Analisis6', motivo: 'Motivo6', comentario: 'Comentario', responsable: 'Responsable1' }
];

// Definimos las columnas de la tabla.
const columns = [
  { field: 'controlInterno', headerName: 'No. Control Interno', minWidth: 150, flex: 1 },
  { field: 'analisis', headerName: 'Análisis', minWidth: 150, flex: 1 },
  { field: 'motivo', headerName: 'Motivo', minWidth: 150, flex: 1 },
  { field: 'comentario', headerName: 'Comentario', minWidth: 200, flex: 1 },
  { field: 'responsable', headerName: 'Responsable', minWidth: 150, flex: 1 }
];

export default function EnmiendasTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={rows} // Filas con los datos.
        columns={columns} // Columnas configuradas.
        pageSize={5} // Número de filas por página.
        rowsPerPageOptions={[5, 10, 20]} // Opciones de filas por página.
        autoHeight={true} // Ajusta la altura automáticamente según el contenido.
        disableExtendRowFullWidth={true} // No extiende las filas al ancho completo.
        sx={{
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#fff', // Fondo de los encabezados.
          },
          '& .MuiDataGrid-cell': {
            padding: '10px' // Ajusta el padding de las celdas.
          }
        }}
      />
    </div>
  );
}
