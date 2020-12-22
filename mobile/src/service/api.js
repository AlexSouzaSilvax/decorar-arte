import axios from "axios";

export const api = axios.create({
    baseURL: "http://3.17.4.232:8080/decorarte/api"
});