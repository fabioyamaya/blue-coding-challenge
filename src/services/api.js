import axios from "axios";

const BASE_URL = "https://api.giphy.com";
export const API_KEY = "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa";

const api = axios.create({ baseURL: BASE_URL });

export default api;
