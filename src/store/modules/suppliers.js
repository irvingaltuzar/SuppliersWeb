
import Api from './Api' // Clase Api donde se declara Axios y la ruta al servidor
import Csrf from "./Csrf" //Clase donde se obtiene crsf-cookie para la autenticacion
import { setAuthToken } from './Api'
// import axios from 'axios'

const getters = {
   token: state => state.token,
    Countries: state => state.arrCountries,
    Specialities: state => state.arrSpecialities,
    catSupplierDocuments: state => state.arrCatSupplierDocuments,
    Banks: state => state.arrBanks,
    States: state => state.arrStates,
    MySuppliers: state => state.arrMySuppliers,
    SuppliersEFO: state => state.arrSuppliersEFO,
    ReportAccess: state => state.arrReportAccess,
}
const state = {
token: '',
 arrCountries:[],
 arrBanks:[],
 arrStates:[],
 arrMySuppliers:[],
 arrReportAccess:[],
 arrSuppliersEFO:[],
 arrCatSupplierDocuments:[],
  loginForm: {
  usuario: import.meta.env.VITE_APP_USER,
  password: import.meta.env.VITE_APP_PASS
},
}

const mutations = {
    SET_COUNTRIES: (state, payload) => {
        state.arrCountries = payload
  },
  SET_SPECIALITIES: (state, payload) => {
    state.arrSpecialities = payload
},
  SET_BANKS: (state, payload) => {
    state.arrBanks = payload
  },
    SET_STATES: (state, payload) => {
        state.arrStates = payload
    },
    SET_MY_SUPPLIERS: (state, payload) => {
        state.arrMySuppliers = payload
    },
    SET_REPORT_ACCESS_SUPPLIERS: (state, payload) => {
      state.arrReportAccess = payload
  },
    SET_SUPPLIERS_EFO: (state, payload) => {

        try {
            const items = payload

            const type = items.map(v => {
              Vue.set(v, 'edit', false)
              Vue.set(v, 'disabled', true)
              v.originaldescripcion = v.efo
              v.originaldescripcionid = v.id
              // v.originalborrado = v.deleted
              return v
            })

            state.arrSuppliersEFO = type
          } catch (error) {
            console.error(error)
          }
    },
    SET_CAT_SUPPLIER_DOCUMENTS: (state, payload) => {
      state.arrCatSupplierDocuments = payload
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
}
const actions = {

       // Action que ejecuta la peticion de Auth al backend
 async login({ commit }, credenciales) {
    if(token=="" || token=="null"){
 await Csrf.getCookie();
 return new Promise((resolve, reject) => {

  //Hacemos la peticion a la ruta /login de laravel para autenticar y crear sesion
   Api.post('/api/login', state.loginForm).then(res=>{
     //Obtenemos la respuesta y declaramos constante data de res
     const { data,config } =  res

     //hacemos commit a la mutation token y le mandamos el valor del token de Auth
     commit('SET_TOKEN', config.headers["X-XSRF-TOKEN"])
        // localStorage.setItem('token', data.accessToken);
     setAuthToken(data.accessToken)
    //  setToken(config.headers["X-XSRF-TOKEN"])

     resolve(res)
   }).catch(error => {
  //    if (error.response.status === 422) {
   
  //      Message({
  //        message: error.response.data.errors.usuario[0] || 'Error',
  //        type: 'error',
  //        duration: 5 * 1000
  //      })
  //  }
   reject(error);// error
   })
   })
  }
},
  async getExistRFC({ commit, state },formData){
    const config = { headers: { 'content-type': 'multipart/form-data' }}
    return new Promise((resolve) => {

    Api.post('/api/ExistRFC',formData,config).then(res => {
    const { data } = res
        resolve(data)
      }).catch(error => {
        console.log(error)
      })
    })
  },
  async getContries({ commit, state }){
    return new Promise((resolve, reject) => {


       Api.get('/api/getCountries').then(res=>{
        const { data } = res
        commit('SET_COUNTRIES', data)
        resolve()
        }).catch(error => {
          console.log(error);
          reject(error)
        })
      })

   },
   async getSpecialities({ commit, state }){
    return new Promise((resolve, reject) => {


       Api.get('/api/getSpecialities').then(res=>{
        const { data } = res
        commit('SET_SPECIALITIES', data)
        resolve()
        }).catch(error => {
          console.log(error);
          reject(error)
        })
      })

   },

   async getBanks({ commit, state }){
    return new Promise((resolve, reject) => {


       Api.get('/api/getBanks').then(res=>{
        const { data } = res
        commit('SET_BANKS', data)
        resolve()
        }).catch(error => {
          console.log(error);
          reject(error)
        })
      })

   },
   
   async getStatesbyCountry({ commit, state },formData){
    const config = { headers: { 'content-type': 'multipart/form-data' }}
    return new Promise((resolve, reject) => {


       Api.post('/api/getStatesbyCountry',formData,config).then(res=>{
        const { data } = res
        commit('SET_STATES', data)
        resolve()
        }).catch(error => {
          console.log(error);
          reject(error)
        })
      })

   },
   
}
export default {
  state,
  mutations,
  actions,
  getters
}
