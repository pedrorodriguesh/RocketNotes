// ### Aqui é a conexão com a nossa api, usando a biblioteca axios.

import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333"
})