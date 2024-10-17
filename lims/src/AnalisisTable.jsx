import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { obtenerAnalisis } from './services/apiService';

export default function AnalisisTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await obtenerAnalisis();
        // Ajusta las propiedades según el modelo de datos de la API
        const formattedRows = datos.map((item, index) => ({
          id: item.id || index + 1, // Usa item.id o el índice como fallback
          nombre: item.nombre, // Cambia 'nombre' por la propiedad correcta de tus datos
          formaFarmaceutica: item.formaFarmaceutica // Cambia 'formaFarmaceutica' según la estructura de tus datos
        }));
        setRows(formattedRows);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'Id', width: 100 },
    { field: 'nombre', headerName: 'Nombre', minWidth: 200, flex: 1 },
    { field: 'formaFarmaceutica', headerName: 'Forma farmacéutica', minWidth: 350, flex: 2 }
  ];

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        autoHeight={true}
        sx={{
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#f5f5f5',
            fontSize: '16px',
          },
          '& .MuiDataGrid-cell': {
            padding: '10px 20px',
            fontSize: '15px',
          },
          '& .MuiDataGrid-row': {
            height: '60px',
          }
        }}
      />
    </div>
  );
}
