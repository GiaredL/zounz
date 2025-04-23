import axios from "axios";
// Replace with your EC2's public IP or domain
const API_URL = "http://54.241.113.130:5000/api";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Important for session cookies
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
});

// Add a request interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      window.location.href = "/sign-in";
    }
    return Promise.reject(error);
  }
);

export default api;
