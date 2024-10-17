// apiService.js

const API_BASE_URL = "https://localhost:7299/api";

//save en analysis form
export const guardarAnalisis = async (analisisData) => {
    const response = await fetch(`${API_BASE_URL}/TAnalisis`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(analisisData)
    });
    if (!response.ok) {
        throw new Error("Error al guardar el análisis");
    }
    return response.json();
};

//obtener enmiendas
export const obtenerEnmiendas = async () => {
    const response = await fetch(`${API_BASE_URL}/TEnmiendas`);
    if (!response.ok) throw new Error("Error al obtener las enmiendas");
    return response.json();
};


// Función general de fetch
const fetchData = async (endpoint) => {
    const respuesta = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!respuesta.ok) throw new Error(`Error en la solicitud a ${endpoint}`);
    return respuesta.json();
};

// Funciones de llamadas específicas para cada controlador
export const obtenerTipoMuestras = () => fetchData("TTipoMuestras");
export const obtenerTipoEntidadExternas = () => fetchData("TTipoEntidadExternas");
export const obtenerRoles = () => fetchData("TRoles");
export const obtenerMotivosEnmiendums = () => fetchData("TMotivosEnmiendums");
export const obtenerMotivosAbortos = () => fetchData("TMotivosAbortoes");
export const obtenerFormaConservacions = () => fetchData("TFormaConservacions");
export const obtenerFormaFarmaceuticas = () => fetchData("TFormaFarmaceuticas");
export const obtenerFinalidadAnalisis = () => fetchData("TFinalidadAnalisis");

// Agrega más llamadas a la API aquí, según lo que necesites
export const obtenerAnalisis = () => fetchData("TAnalisis");
export const obtenerEnvasePrimarios = () => fetchData("TEnvasePrimarios");
export const obtenerDocumentos = () => fetchData("TDocumentoes");
export const obtenerEntidadExternas = () => fetchData("TEntidadExternas");
export const obtenerCondicionEnvases = () => fetchData("TCondicionEnvases");
export const obtenerEstandares = () => fetchData("TEstandars");

// Funciones para autenticación (login y registro)
export const login = async (loginData) => {
    const response = await fetch(`${API_BASE_URL}/Auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });
    if (!response.ok) throw new Error('Error en la autenticación');
    return response.json();
};

export const register = async (registerData) => {
    const response = await fetch(`${API_BASE_URL}/Auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    });
    if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData);
    }
    return response.json();
};
