import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { TextField, Button, MenuItem, Select, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import ModalComponent from './modal'; 

// Función para generar 50 filas de datos ficticios
const generateRows = () => {
  const data = [];
  for (let i = 1; i <= 50; i++) {
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

const TableComponentD = () => {
  const [rows, setRows] = useState(initialRows);
  const [searchText, setSearchText] = useState('');
  const [filteredRows, setFilteredRows] = useState(initialRows);
  const [searchBy, setSearchBy] = useState('');
  const [selectedRow, setSelectedRow] = useState(null); // Para controlar la fila seleccionada
  const [openModal, setOpenModal] = useState(false); // Para controlar la apertura del modal

  // Función para manejar la búsqueda
  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const filtered = rows.filter((row) => {
      const rowValue = searchBy
        ? row[searchBy]
        : Object.values(row).find(value => typeof value === 'string');
      return rowValue && String(rowValue).toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredRows(filtered);
  };

  const clearFilters = () => {
    setSearchText('');
    setSearchBy('');
    setFilteredRows(rows);
  };

  // Función para abrir el modal al hacer clic en el botón de editar
  const handleEditClick = (row) => {
    setSelectedRow(row); // Almacena la fila seleccionada
    setOpenModal(true); // Abre el modal
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
  };

  // Definición de columnas con campos editables
  const columns = [
    { field: 'id', headerName: 'No. Contr int', width: 100, editable: false },
    { field: 'col1', headerName: 'No. Oficio', width: 90, editable: false }, // Deshabilita la edición
    { field: 'col2', headerName: 'Fecha Entrada', width: 120, editable: false }, // Deshabilita la edición
    { field: 'col3', headerName: 'Fecha Salida', width: 120, editable: false }, // Deshabilita la edición
    { field: 'col4', headerName: 'Producto', width: 130, editable: false }, // Deshabilita la edición
    { field: 'col5', headerName: 'No. Lote', width: 90, editable: false }, // Deshabilita la edición
    { field: 'col6', headerName: 'Principios Activos', width: 150, editable: false }, // Deshabilita la edición
    { field: 'col7', headerName: 'Analista Encargado', width: 150, editable: false }, // Deshabilita la edición
    { field: 'col8', headerName: 'Recepción', width: 120, editable: false }, // Deshabilita la edición
    {
      field: 'actions',
      headerName: 'Editar',
      width: 150,
      renderCell: (params) => (
        <Button 
          variant="contained" 
          onClick={() => handleEditClick(params.row)} // Llamada a la función al hacer clic
        >
          <EditIcon />
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Select
          value={searchBy}
          onChange={(e) => {
            setSearchBy(e.target.value);
            requestSearch(searchText);
          }}
          displayEmpty
          style={{ marginRight: '10px', width: '150px' }}
        >
          <MenuItem value="">
            <em>Buscar por</em>
          </MenuItem>
          <MenuItem value="col1">No. Oficio</MenuItem>
          <MenuItem value="col2">Fecha Entrada</MenuItem>
          <MenuItem value="col3">Fecha Salida</MenuItem>
          <MenuItem value="col4">Producto</MenuItem>
          <MenuItem value="col5">No. Lote</MenuItem>
          <MenuItem value="col6">Principios Activos</MenuItem>
          <MenuItem value="col7">Analista Encargado</MenuItem>
          <MenuItem value="col8">Recepción</MenuItem>
        </Select>

        <TextField
          variant="outlined"
          value={searchText}
          onChange={(e) => requestSearch(e.target.value)}
          placeholder="Buscar..."
          style={{ marginRight: '10px', width: '30%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" onClick={() => requestSearch(searchText)} sx={{ backgroundColor: "#12C2E9" }}>
          Buscar
        </Button>
        <Button onClick={clearFilters} style={{ color: '#2196f3', textTransform: 'none', marginLeft: '10px' }}>
          <ClearIcon /> Limpiar filtros
        </Button>
      </div>

      <div style={{ height: 500, width: '100%', overflowX: 'auto' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
          pagination
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>

      {/* Modal */}
      {openModal && (
        <ModalComponent open={openModal} onClose={handleCloseModal} data={selectedRow} />
      )}
    </div>
  );
};

export default TableComponentD;
