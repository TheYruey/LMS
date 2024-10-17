import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { obtenerEnmiendas } from './services/apiService'; // Importa la función de la API

export default function EnmiendasTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await obtenerEnmiendas();
        // Formatear los datos de acuerdo a las columnas definidas
        const formattedRows = datos.map((item, index) => ({
          id: item.id || index + 1,
          controlInterno: item.controlInterno,
          analisis: item.analisis,
          motivo: item.motivo,
          comentario: item.comentario,
          responsable: item.responsable
        }));
        setRows(formattedRows);
      } catch (error) {
        console.error("Error al obtener los datos de enmiendas:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: 'controlInterno', headerName: 'No. Control Interno', minWidth: 150, flex: 1 },
    { field: 'analisis', headerName: 'Análisis', minWidth: 150, flex: 1 },
    { field: 'motivo', headerName: 'Motivo', minWidth: 150, flex: 1 },
    { field: 'comentario', headerName: 'Comentario', minWidth: 200, flex: 1 },
    { field: 'responsable', headerName: 'Responsable', minWidth: 150, flex: 1 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={rows} // Filas con los datos obtenidos de la API.
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
