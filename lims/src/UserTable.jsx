import React, { useState } from 'react'; // Importamos React y el hook useState para manejar el estado.
import { DataGrid } from '@mui/x-data-grid'; // Importamos el componente DataGrid de MUI.
import { Chip, IconButton } from '@mui/material'; // Importamos Chip e IconButton de MUI.
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; // Icono de "ocultar clave".
import VisibilityIcon from '@mui/icons-material/Visibility'; // Icono de "mostrar clave".

// Datos iniciales de la tabla. Cada fila contiene una clave oculta por defecto.
const initialRows = [
  { id: 1, cedula: '0010858585', nombre: 'Cameron Williamson', usuario: 'CamWill', rol: 'Analista', clave: '********', showClave: false },
  { id: 2, cedula: '0050979797', nombre: 'Jacob Jones', usuario: 'JacJon', rol: 'Supervisor', clave: '********', showClave: false },
  { id: 3, cedula: '4020858585', nombre: 'Kristin Watson', usuario: 'KrisWat', rol: 'Supervisor', clave: '********', showClave: false },
  { id: 4, cedula: '4020979797', nombre: 'Esther Howard', usuario: 'EstHow', rol: 'Analista', clave: '********', showClave: false },
  { id: 5, cedula: '0030858585', nombre: 'Heidi Moor', usuario: 'HeiMo', rol: 'Digitador', clave: '********', showClave: false },
  { id: 6, cedula: '0030979797', nombre: 'Ronald Richards', usuario: 'RonRich', rol: 'Analista', clave: '********', showClave: false }
];

export default function UserTable() {
  // Estado local que maneja las filas y la visibilidad de las claves.
  const [rows, setRows] = useState(initialRows);

  // Función que alterna entre mostrar y ocultar la clave en una fila específica.
  const toggleShowClave = (id) => {
    // Usamos setRows para actualizar el estado. Mapeamos las filas y cambiamos el estado de showClave solo en la fila seleccionada.
    setRows(rows.map(row => (
      row.id === id ? { ...row, showClave: !row.showClave } : row
    )));
  };

  // Definimos las columnas de la tabla.
  const columns = [
    { field: 'cedula', headerName: 'Cédula', minWidth: 150, flex: 1 }, // Columna de cédula.
    { field: 'nombre', headerName: 'Nombre', minWidth: 200, flex: 1 }, // Columna de nombre.
    { field: 'usuario', headerName: 'Usuario', minWidth: 150, flex: 1 }, // Columna de usuario.
    
    // Columna de rol con renderización personalizada para mostrar un Chip dependiendo del valor del rol.
    {
      field: 'rol',
      headerName: 'Rol',
      minWidth: 150,
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.value} // Muestra el rol dentro de un Chip.
          color={params.value === 'Supervisor' ? 'secondary' : params.value === 'Analista' ? 'primary' : 'default'} // Cambia el color del Chip según el rol.
          variant="outlined"
          size="small"
        />
      )
    },
    
    // Columna de clave con renderización condicional dependiendo del estado showClave.
    {
      field: 'clave',
      headerName: 'Clave',
      minWidth: 150,
      flex: 1,
      renderCell: (params) => (
        // Si showClave es true, mostramos una clave ficticia ("12345678"), de lo contrario mostramos "********".
        <span>{params.row.showClave ? '12345678' : params.value}</span>
      )
    },
    
    // Columna de acciones con un botón que alterna entre mostrar/ocultar clave.
    {
      field: 'acciones',
      headerName: '', // No necesita encabezado.
      sortable: false, // Deshabilitamos la opción de ordenar esta columna.
      minWidth: 50,
      flex: 0.5,
      renderCell: (params) => (
        // Botón para alternar la visibilidad de la clave en la fila seleccionada.
        <IconButton onClick={() => toggleShowClave(params.row.id)}>
          {/* Si showClave es true, mostramos el icono de "ocultar", de lo contrario mostramos "mostrar". */}
          {params.row.showClave ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      )
    }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* Renderizamos el DataGrid con las filas y columnas definidas */}
      <DataGrid 
        rows={rows} // Filas del estado local.
        columns={columns} // Columnas configuradas.
        pageSize={5} // Número de filas por página.
        rowsPerPageOptions={[5, 10, 20]} // Opciones de filas por página.
        autoHeight={true} // Ajusta la altura automáticamente.
        disableExtendRowFullWidth={true} // No extiende las filas al ancho completo de la tabla.
        sx={{
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#f5f5f5', // Color de fondo del encabezado.
          },
          '& .MuiDataGrid-cell': {
            padding: '10px' // Ajusta el padding de las celdas.
          }
        }}
      />
    </div>
  );
}
