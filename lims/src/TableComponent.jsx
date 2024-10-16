import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'; // Importamos DataGrid y su toolbar
import { TextField, Button, MenuItem, Select, InputAdornment } from '@mui/material'; // Importamos componentes de MUI
import SearchIcon from '@mui/icons-material/Search'; // Ícono de búsqueda
import ClearIcon from '@mui/icons-material/Clear'; // Ícono para limpiar filtros

// Función para generar 50 filas de datos ficticios
const generateRows = () => {
  const data = [];
  for (let i = 1; i <= 50; i++) {
    // Fecha de entrada y salida (enero y febrero)
    const fechaEntrada = new Date(2023, 0, i).toLocaleDateString();
    const fechaSalida = new Date(2023, 1, i).toLocaleDateString();

    // Pusheamos cada fila con valores únicos
    data.push({
      id: i,
      col1: i, // Número de oficio
      col2: fechaEntrada, // Fecha de entrada
      col3: fechaSalida, // Fecha de salida
      col4: `Producto ${i}`, // Producto
      col5: i * 100, // Número de lote
      col6: `Principios Activos ${i}`, // Principios activos
      col7: `Analista ${i}`, // Analista encargado
      col8: `Recepción ${i}`, // Recepción
      col9: `Enmienda ${i}`, // Enmienda
    });
  }
  return data; // Retornamos el array de datos
};

// Filas iniciales
const initialRows = generateRows(); // Generamos las filas para mostrarlas

// Definición de las columnas para el DataGrid
const columns = [
  { field: 'id', headerName: 'No. Contr int', width: 130, editable: false },
  { field: 'col1', headerName: 'No. Oficio', width: 130, editable: true },
  { field: 'col2', headerName: 'Fecha Entrada', width: 130, editable: true },
  { field: 'col3', headerName: 'Fecha Salida', width: 130, editable: true },
  { field: 'col4', headerName: 'Producto', width: 130, editable: true },
  { field: 'col5', headerName: 'No. Lote', width: 130, editable: true },
  { field: 'col6', headerName: 'Principios Activos', width: 150, editable: true },
  { field: 'col7', headerName: 'Analista Encargado', width: 150, editable: true },
  { field: 'col8', headerName: 'Recepción', width: 130, editable: true },
  { field: 'col9', headerName: 'Enmienda', width: 130, editable: true },
];

const TableComponent = () => {
  // Estado para manejar filas, búsqueda y filtros
  const [rows, setRows] = useState(initialRows);
  const [searchText, setSearchText] = useState(''); // Texto de búsqueda
  const [filteredRows, setFilteredRows] = useState(initialRows); // Filas filtradas
  const [searchBy, setSearchBy] = useState(''); // Columna seleccionada para buscar

  // Función para filtrar las filas según el texto de búsqueda
  const requestSearch = (searchValue) => {
    setSearchText(searchValue); // Actualizamos el texto de búsqueda
    const filtered = rows.filter((row) => {
      const rowValue = searchBy
        ? row[searchBy]
        : Object.values(row).find(value => typeof value === 'string'); // Buscamos en la columna seleccionada o en la primera coincidencia
      return rowValue && String(rowValue).toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredRows(filtered); // Actualizamos las filas filtradas
  };

  // Función para limpiar los filtros
  const clearFilters = () => {
    setSearchText(''); // Limpiamos el texto de búsqueda
    setSearchBy(''); // Reiniciamos la columna seleccionada
    setFilteredRows(rows); // Restauramos todas las filas
  };

  // Función para actualizar una fila después de la edición
  const processRowUpdate = (newRow) => {
    const updatedRows = rows.map((row) => (row.id === newRow.id ? newRow : row)); // Actualizamos la fila editada
    setRows(updatedRows); // Guardamos las filas actualizadas
    setFilteredRows(updatedRows); // Actualizamos también las filtradas
    return newRow;
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Contenedor para la barra de búsqueda y selección de columna */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Select
          value={searchBy} // Valor de la columna seleccionada
          onChange={(e) => {
            setSearchBy(e.target.value); // Cambiamos la columna
            requestSearch(searchText); // Actualizamos la búsqueda
          }}
          displayEmpty
          style={{ marginRight: '10px', width: '150px' }}
        >
          <MenuItem value="">
            <em>Buscar por</em> {/* Placeholder por defecto */}
          </MenuItem>
          {/* Opciones de columnas para buscar */}
          <MenuItem value="col1">No. Oficio</MenuItem>
          <MenuItem value="col2">Fecha Entrada</MenuItem>
          <MenuItem value="col3">Fecha Salida</MenuItem>
          <MenuItem value="col4">Producto</MenuItem>
          <MenuItem value="col5">No. Lote</MenuItem>
          <MenuItem value="col6">Principios Activos</MenuItem>
          <MenuItem value="col7">Analista Encargado</MenuItem>
          <MenuItem value="col8">Recepción</MenuItem>
          <MenuItem value="col9">Enmienda</MenuItem>
        </Select>

        {/* Input de búsqueda */}
        <TextField
          variant="outlined"
          value={searchText}
          onChange={(e) => requestSearch(e.target.value)} // Actualizamos búsqueda en cada cambio
          placeholder="Buscar..."
          style={{ marginRight: '10px', width: '30%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon /> {/* Ícono de búsqueda */}
              </InputAdornment>
            ),
          }}
        />
        {/* Botón de búsqueda */}
        <Button variant="contained" color="primary" onClick={() => requestSearch(searchText)}>
          Buscar
        </Button>
        {/* Botón para limpiar filtros */}
        <Button onClick={clearFilters} style={{ color: '#2196f3', textTransform: 'none', marginLeft: '10px' }}>
          <ClearIcon /> Limpiar filtros
        </Button>
      </div>

      {/* Componente DataGrid */}
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={filteredRows} // Mostramos las filas filtradas
          columns={columns} // Columnas definidas
          pageSize={6} // Tamaño de la página
          rowsPerPageOptions={[6]} // Opciones de tamaño por página
          pagination // Habilitamos paginación
          processRowUpdate={processRowUpdate} // Manejamos la actualización de filas
          components={{
            Toolbar: GridToolbar, // Barra de herramientas de MUI
          }}
          experimentalFeatures={{ newEditingApi: true }} // Habilitamos la nueva API de edición
        />
      </div>
    </div>
  );
};

export default TableComponent;
