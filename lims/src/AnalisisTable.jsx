import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// Filas de datos para la tabla.
const rows = [
  { id: 1, nombre: 'Dureza', formaFarmaceutica: 'Tabletas, Comprimidos, Cápsulas, Etc.' },
  { id: 2, nombre: 'Apariencia', formaFarmaceutica: 'Jarabe' },
  { id: 3, nombre: 'Viscosidad', formaFarmaceutica: 'Suspensión, Líquido, Polvo' },
  { id: 4, nombre: 'Untuosidad', formaFarmaceutica: 'Crema' },
  { id: 5, nombre: 'Densidad', formaFarmaceutica: 'Suspensión, Líquido, Polvo' },
  { id: 6, nombre: 'Temperatura de fusión', formaFarmaceutica: 'Supositorios' }
];

// Columnas de la tabla con mayor ancho.
const columns = [
  { field: 'id', headerName: 'Id', width: 100 }, // Ancho ajustado
  { field: 'nombre', headerName: 'Nombre', minWidth: 200, flex: 1 }, // Ancho ajustado
  { field: 'formaFarmaceutica', headerName: 'Forma farmacéutica', minWidth: 350, flex: 2 } // Más ancho para esta columna
];

export default function AnalisisTable() {
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
