import axios from "axios";

// Use HTTP for all environments since server doesn't support HTTPS yet
const API_URL = "http://54.241.113.130:5000/api";

console.log("API URL:", API_URL);

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log(`API Request to: ${config.url}`, config.headers);
    // Ensure credentials are always included
    config.withCredentials = true;
    return config;
  },
  (error) => {
    console.error("API Request Error:", error);
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => {
    console.log(`API Response from: ${response.config.url}`, response.status);
    console.log("Response cookies:", document.cookie);
    return response;
  },
  (error) => {
    // Detailed error logging
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("API Error Response:", {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
        url: error.config.url,
      });
    } else if (error.request) {
      // The request was made but no response was received (network error)
      console.error("API Network Error:", {
        request: error.request,
        url: error.config.url,
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("API Setup Error:", error.message);
    }

    if (error.response?.status === 401) {
      // Don't automatically redirect, let the ProtectedRoute handle it
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;
