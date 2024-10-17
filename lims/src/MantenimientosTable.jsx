import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// Filas de datos para la tabla.
const rows = [
  { id: 1, descripcion: 'Inyectable' },
  { id: 2, descripcion: 'Tableta Recubierta con Azúcar' },
  { id: 3, descripcion: 'Jarabe' },
  { id: 4, descripcion: 'Suspensión' },
  { id: 5, descripcion: 'Solución Oftálmica' },
  { id: 6, descripcion: 'Solución Tópica' }
];

// Columnas de la tabla con mayor ancho.
const columns = [
  { field: 'id', headerName: 'Id', width: 400 }, // Ancho ajustado
  { field: 'descripcion', headerName: 'Descripción', minWidth: 400, flex: 1 } // Ancho ajustado
];

export default function DescripcionTable() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid 
        rows={rows} // Datos de las filas
        columns={columns} // Configuración de las columnas
        pageSize={6} // Filas por página
        rowsPerPageOptions={[6]} // Opciones para cambiar el número de filas por página
        autoHeight={true} // Ajuste automático de altura
        sx={{
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#f5f5f5', // Fondo del encabezado de las columnas
            fontSize: '16px', // Aumento de tamaño de la fuente del encabezado
          },
          '& .MuiDataGrid-cell': {
            padding: '10px 20px', // Mantener el padding amplio
            fontSize: '15px', // Tamaño de fuente de las celdas
          },
          '& .MuiDataGrid-row': {
            height: '60px', // Altura de las filas
          }
        }}
      />
    </div>
  );
}
