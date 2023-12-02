// ### Aqui é a conexão com a nossa api, usando a biblioteca axios.

import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-x8w0.onrender.com"
})