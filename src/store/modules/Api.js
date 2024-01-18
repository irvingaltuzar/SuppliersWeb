import axios from 'axios'

const Api = axios.create({
  // baseURL: "http://192.168.10.170:8000"
  baseURL:`${import.meta.env.VITE_APP_API_URL}`
})

Api.defaults.withCredentials = true
Api.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_TOK}`;
// Función para configurar el token JWT en el encabezado 'Authorization'
export function setAuthToken(token) {
  if (token) {
    // Establece el token JWT en el encabezado 'Authorization'
    Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Si no se proporciona un token, elimina el encabezado 'Authorization'
    delete Api.defaults.headers.common['Authorization'];
  }
}

// configurarTokenDeAcceso();

export default Api
