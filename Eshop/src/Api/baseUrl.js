import axios from 'axios';

const baseUrl = axios.create({baseURL:'https://e-shop-app-3.up.railway.app/api/v1'});

export default baseUrl