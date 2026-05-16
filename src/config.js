// src/config.js
let API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Remove trailing slash if it exists to prevent double slashes in fetch calls
if (API_BASE_URL.endsWith("/")) {
  API_BASE_URL = API_BASE_URL.slice(0, -1);
}

export default API_BASE_URL;
