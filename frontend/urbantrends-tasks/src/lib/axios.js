import axios from "axios"

// Create an axios instance
const api = axios.create({
  baseURL: "https://development.urbantrends.dev/api", // your backend API base
  withCredentials: true, // include cookies if your backend uses them
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor to attach JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor to handle 401s automatically (optional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Optionally: refresh token or redirect to login
      localStorage.removeItem("access_token")
      localStorage.removeItem("refresh_token")
      localStorage.removeItem("user")
      window.location.href = "/login" // redirect to login
    }
    return Promise.reject(error)
  }
)

export default api
