import React from 'react';
import { DataGrid } from '@mui/x-data-grid'; // Importamos DataGrid de MUI.

// Definimos las filas con los datos.
const rows = [
  { id: 1, nombreCorto: 'Dureza', direccion: 'Dureza', telefono: 'Tabletas', correo: 'Tabletas', extranjera: 'CUADRITO', tipoEntidad: 'Dureza', nombreLargo: 'Tabletas', rnc: 'Tabletas' },
  { id: 2, nombreCorto: 'Dureza', direccion: 'Dureza', telefono: 'Tabletas', correo: 'Tabletas', extranjera: 'Dureza', tipoEntidad: 'Dureza', nombreLargo: 'Tabletas', rnc: 'Tabletas' },
  { id: 3, nombreCorto: 'Dureza', direccion: 'Dureza', telefono: 'Tabletas', correo: 'Tabletas', extranjera: 'Dureza', tipoEntidad: 'Dureza', nombreLargo: 'Tabletas', rnc: 'Tabletas' },
  { id: 4, nombreCorto: 'Dureza', direccion: 'Dureza', telefono: 'Tabletas', correo: 'Tabletas', extranjera: 'Dureza', tipoEntidad: 'Dureza', nombreLargo: 'Tabletas', rnc: 'Tabletas' },
  { id: 5, nombreCorto: 'Dureza', direccion: 'Dureza', telefono: 'Tabletas', correo: 'Tabletas', extranjera: 'Dureza', tipoEntidad: 'Dureza', nombreLargo: 'Tabletas', rnc: 'Tabletas' },
  { id: 6, nombreCorto: 'Dureza', direccion: 'Dureza', telefono: 'Tabletas', correo: 'Tabletas', extranjera: 'Dureza', tipoEntidad: 'Dureza', nombreLargo: 'Tabletas', rnc: 'Tabletas' }
];

// Definimos las columnas con sus títulos y configuraciones.
const columns = [
  { field: 'id', headerName: 'Id', width: 80 }, // Columna para el Id.
  { field: 'nombreCorto', headerName: 'Nombre corto', minWidth: 150, flex: 1 }, // Columna para Nombre corto.
  { field: 'direccion', headerName: 'Dirección', minWidth: 150, flex: 1 }, // Columna para Dirección.
  { field: 'telefono', headerName: 'Teléfono', minWidth: 150, flex: 1 }, // Columna para Teléfono.
  { field: 'correo', headerName: 'Correo', minWidth: 150, flex: 1 }, // Columna para Correo.
  { field: 'extranjera', headerName: 'Es extranjera', minWidth: 150, flex: 1 }, // Columna para Es extranjera.
  { field: 'tipoEntidad', headerName: 'Tipo de entidad', minWidth: 150, flex: 1 }, // Columna para Tipo de entidad.
  { field: 'nombreLargo', headerName: 'Nombre largo', minWidth: 150, flex: 1 }, // Columna para Nombre largo.
  { field: 'rnc', headerName: 'RNC', minWidth: 150, flex: 1 } // Columna para RNC.
];

export default function TableExample() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={rows} // Pasamos las filas de datos.
        columns={columns} // Definimos las columnas.
        pageSize={6} // Número de filas que se muestran por página.
        rowsPerPageOptions={[6, 10, 20]} // Opciones de filas por página.
        autoHeight={true} // Ajusta la altura automáticamente según el contenido.
        sx={{
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#f5f5f5', // Color de fondo para los encabezados.
          },
          '& .MuiDataGrid-cell': {
            padding: '10px' // Padding en las celdas para mejorar el espaciado.
          }
        }}
      />
    </div>
  );
}
