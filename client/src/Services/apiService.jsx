import axios from "axios";

// Create Axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Set the base URL from environment variables
  timeout: 1000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json", // Default headers
  },
});

// Axios Interceptor to add JWT token to headers
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error) // Handle request errors
);

// Function to handle API responses and errors
const handleResponse = async (apiCall) => {
  try {
    const response = await apiCall;
    return { success: true, data: response.data };
  } catch (error) {
    if (error.response) {
      // Handle known error responses from the server
      return { success: false, errors: error.response.data.errors };
    } else if (error.request) {
      // Handle cases where the request was made but no response received
      return {
        success: false,
        errors: { message: "No response received from the server." },
      };
    } else {
      // Handle other unexpected errors
      return { success: false, errors: { message: error.message } };
    }
  }
};

// User Registration Function
export const userSignup = async (data) => {
  return handleResponse(apiClient.post("/api/register/", data));
};

// User Login Function
export const userLogin = async (data) => {
  const response = await handleResponse(apiClient.post("/api/login/", data));
  if (response.success) {
    // Save tokens to localStorage if login is successful
    localStorage.setItem("accessToken", response.data.token.access);
    localStorage.setItem("refreshToken", response.data.token.refresh);
  }
  return response;
};

// Token Refresh (Optional)
export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    return {
      success: false,
      errors: { message: "No refresh token available." },
    };
  }

  const response = await handleResponse(
    apiClient.post("/api/token/refresh/", { refresh: refreshToken })
  );
  if (response.success) {
    localStorage.setItem("accessToken", response.data.access); // Update access token
  }
  return response;
};

// Logout Function
export const userLogout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
