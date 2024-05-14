const axios = require("axios");

const NODE_BASE_URL = "https://doge.nownodes.io";
const NOWNODES_BASE_URL = "https://dogebook.nownodes.io/api/v2";

const apiKey = process.env.NOWNODES_API_KEY;

const nownodes = axios.create({
  baseURL: NOWNODES_BASE_URL,
  headers: {
    "api-key": apiKey,
  },
});

const doge = axios.create({
  baseURL: NODE_BASE_URL,
});

module.exports = { apiKey, nownodes, doge };
