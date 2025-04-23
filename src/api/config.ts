import axios from "axios";

// Use environment variable for API URL in production
const API_URL =
  process.env.NODE_ENV === "production"
    ? "http://54.241.113.130:5000/api"
    : "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Important for session cookies
  headers: {
    "Content-Type": "application/json",
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
