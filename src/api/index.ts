import axios from "axios";

const DOMAIN = "http://localhost:3001/";

export default axios.create({ baseURL: DOMAIN, responseType: "json" });
