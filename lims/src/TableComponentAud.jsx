import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { TextField, Button, MenuItem, Select, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

// Función para generar 50 filas de datos ficticios
// Cada fila tiene datos de prueba para cada columna
const generateRows = () => {
  const data = [];
  for (let i = 1; i <= 50; i++) {
    // Creamos fechas de entrada y salida ficticias
    const fechaEntrada = new Date(2023, 0, i).toLocaleDateString();
    const fechaSalida = new Date(2023, 1, i).toLocaleDateString();
    data.push({
      id: i,
      col1: i,
      col2: fechaEntrada,
      col3: fechaSalida,
      col4: `Producto ${i}`,
      col5: i * 100,
      col6: `Principios Activos ${i}`,
      col7: `Analista ${i}`,
      col8: `Recepción ${i}`,
    });
  }
  return data;
};

// Se inicializan las filas con datos ficticios
const initialRows = generateRows();

// Definición de las columnas de la tabla
// Todas las columnas tienen 'editable: false' para deshabilitar la edición
const columns = [
  { field: 'id', headerName: 'No. Contr int', width: 130, editable: false },
  { field: 'col1', headerName: 'No. Oficio', width: 100, editable: false },
  { field: 'col2', headerName: 'Fecha Entrada', width: 120, editable: false },
  { field: 'col3', headerName: 'Fecha Salida', width: 120, editable: false },
  { field: 'col4', headerName: 'Producto', width: 130, editable: false },
  { field: 'col5', headerName: 'No. Lote', width: 100, editable: false },
  { field: 'col6', headerName: 'Principios Activos', width: 150, editable: false },
  { field: 'col7', headerName: 'Analista Encargado', width: 150, editable: false },
  { field: 'col8', headerName: 'Recepción', width: 120, editable: false },
];

// Componente principal que renderiza la tabla
const TableComponent = () => {
  // Hooks de estado para manejar las filas, la búsqueda y los filtros
  const [rows, setRows] = useState(initialRows);
  const [searchText, setSearchText] = useState('');
  const [filteredRows, setFilteredRows] = useState(initialRows);
  const [searchBy, setSearchBy] = useState('');

  // Función para filtrar las filas basadas en la búsqueda
  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    // Filtrar según la columna seleccionada o por cualquier valor de fila
    const filtered = rows.filter((row) => {
      const rowValue = searchBy
        ? row[searchBy]
        : Object.values(row).find(value => typeof value === 'string');
      return rowValue && String(rowValue).toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredRows(filtered);
  };

  // Función para limpiar los filtros de búsqueda
  const clearFilters = () => {
    setSearchText('');  // Limpiar el texto de búsqueda
    setSearchBy('');    // Limpiar la selección de columna
    setFilteredRows(rows);  // Restablecer las filas originales
  };

  // Función para manejar las actualizaciones de filas (aunque no hay edición habilitada)
  const processRowUpdate = (newRow) => {
    const updatedRows = rows.map((row) => (row.id === newRow.id ? newRow : row));
    setRows(updatedRows);
    setFilteredRows(updatedRows);
    return newRow;
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Barra de herramientas para búsqueda y filtros */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        {/* Menú desplegable para seleccionar la columna de búsqueda */}
        <Select
          value={searchBy}
          onChange={(e) => {
            setSearchBy(e.target.value);  // Actualizar la columna de búsqueda
            requestSearch(searchText);  // Aplicar la búsqueda al cambiar de columna
          }}
          displayEmpty
          style={{ marginRight: '10px', width: '150px' }}
        >
          <MenuItem value="">
            <em>Buscar por</em>
          </MenuItem>
          {/* Opciones de columna para buscar */}
          <MenuItem value="col1">No. Oficio</MenuItem>
          <MenuItem value="col2">Fecha Entrada</MenuItem>
          <MenuItem value="col3">Fecha Salida</MenuItem>
          <MenuItem value="col4">Producto</MenuItem>
          <MenuItem value="col5">No. Lote</MenuItem>
          <MenuItem value="col6">Principios Activos</MenuItem>
          <MenuItem value="col7">Analista Encargado</MenuItem>
          <MenuItem value="col8">Recepción</MenuItem>
        </Select>

        {/* Campo de búsqueda */}
        <TextField
          variant="outlined"
          value={searchText}
          onChange={(e) => requestSearch(e.target.value)}  // Aplicar búsqueda al cambiar el texto
          placeholder="Buscar..."
          style={{ marginRight: '10px', width: '30%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />  {/* Ícono de búsqueda */}
              </InputAdornment>
            ),
          }}
        />
        {/* Botón de búsqueda */}
        <Button variant="contained" onClick={() => requestSearch(searchText)} sx={{ backgroundColor: "#12C2E9" }}>
          Buscar
        </Button>
        {/* Botón para limpiar los filtros */}
        <Button onClick={clearFilters} style={{ color: '#2196f3', textTransform: 'none', marginLeft: '10px' }}>
          <ClearIcon /> Limpiar filtros
        </Button>
      </div>

      {/* Componente DataGrid para mostrar las filas y columnas */}
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={filteredRows}  // Filas mostradas en la tabla
          columns={columns}  // Columnas definidas anteriormente
          pageSize={6}  // Número de filas por página
          rowsPerPageOptions={[6]}  // Opciones de filas por página
          pagination  // Habilitar paginación
          processRowUpdate={processRowUpdate}  // Proceso de actualización de fila
          onCellDoubleClick={(params) => {
            // Si se hace doble clic en la columna 'id', redirigir a otra página
            if (params.field === 'id') {
              window.location.href = 'infoMuestraAuditor.html';
            }
          }}
          components={{
            Toolbar: GridToolbar,  // Añadir la barra de herramientas de DataGrid
          }}
          experimentalFeatures={{ newEditingApi: true }}  // Habilitar nuevas características experimentales
        />
      </div>
    </div>
  );
};

export default TableComponent;
