import axios from "axios"

// baseURL: "https://akmal-bc.karyakreasi.id/api",//
const url = "http://127.0.0.1:8000";

export const API = axios.create({
   baseURL: `${url}/api`, 
})

export const bookImageStorage = `${url}/storage`;

export default API; // ⬅️ tambahin ini bro
