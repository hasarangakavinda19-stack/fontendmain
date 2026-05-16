// src/config.js
let API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Remove all trailing slashes and whitespace to prevent double slashes in fetch calls
API_BASE_URL = API_BASE_URL.replace(/\/+$/, "").trim();

export default API_BASE_URL;
