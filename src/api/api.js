import axios from "axios";

const apiURLs = {
  development: "http://localhost:3000/",
  production: "",
};

const api = axios.create({ baseURL: apiURLs[process.env.NODE_ENV] });

export { api };
