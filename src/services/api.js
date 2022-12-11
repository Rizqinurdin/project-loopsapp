import axios from "axios";

const api = axios.create({
    baseURL: 'https://dev.farizdotid.com/api/'
    // baseURL: 'http://localhost:8082/api/v1/loops/history/'
  });

  export default api;