import axios from "axios";

const api = axios.create({
    // baseURL: 'https://dev.farizdotid.com/api/',
    baseURL: 'http://localhost:3306/payment_loops'
  });

  export default api;