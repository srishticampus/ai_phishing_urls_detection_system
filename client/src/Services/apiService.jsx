//apiService.jsx
import axios from "axios";

// Create Axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Set the base URL from environment variables
  timeout: 5000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json", // Default headers
  },
});

// Axios Interceptor to add JWT token to headers
apiClient.interceptors.request.use(
  (config) => {
    if (config.authRequired !== false) {
      const token = localStorage.getItem("accessToken");
      console.log("token" + token);
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Utility to generate headers dynamically
const generateConfig = (isFormData = false, authRequired = true) => ({
  headers: {
    "Content-Type": isFormData ? "multipart/form-data" : "application/json",
  },
  authRequired,
});

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
  return handleResponse(
    apiClient.post("/api/register/", data, { authRequired: false })
  );
};

// User Login Function
export const login = async (data) => {
  const response = await handleResponse(apiClient.post("/api/login/", data));
  if (response.success) {
    // Save tokens to localStorage if login is successful
    localStorage.setItem("accessToken", response.data.token.access);
    localStorage.setItem("refreshToken", response.data.token.refresh);
  }
  return response;
};

// Token Refresh
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

//Check Login Status
export const checkLoginStatus = () => {
  return !!localStorage.getItem("accessToken");
};

// Logout Function
export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const addUserProfile = async (formData) => {
  return handleResponse(
    apiClient.post("/api/user-profile/add/", formData, generateConfig(true))
  );
};

//user-profile-view

export const userProfile = async () => {
  return handleResponse(
    apiClient.get("/api/user-profile/view/", generateConfig())
  );
};

// Update User Profile

export const updateUserProfile = async (formData) => {
  return handleResponse(
    apiClient.put("/api/user-profile/edit/", formData, generateConfig(true))
  );
};

//Get Interests
export const getInterests = async () => {
  return handleResponse(apiClient.get("/api/interests/"),generateConfig());
};

// Admin Add Blogs

export const addBlog = async (formData) => {
  return handleResponse(
    apiClient.post("/api/blogs/", formData, generateConfig(true))
  );
};

// Admin & User View Blogs

export const viewBlogs = async (id = null) => {
  const endpoint = id ? `/api/blogs/${id}/` : "/api/blogs/";
  return handleResponse(apiClient.get(endpoint, generateConfig()));
};

// Admin Update Blogs

export const updateBlog = async (id, formData) => {
  return handleResponse(
    apiClient.put(`/api/blogs/${id}/`, formData, generateConfig(true))
  );
};

//User add interest

export const userAddInterest = async (formData) => {
  return handleResponse(
    apiClient.post(`/api/add-user-interests/`, formData, generateConfig(true))
  );
};


// Admin Delete Blogs

export const deleteBlog = async (id) => {
  return handleResponse(
    apiClient.delete(`/api/blogs/${id}/`, generateConfig())
  );
};

// Admin View All Users

export const viewUsers = async () => {
  return handleResponse(
    apiClient.get("/api/admin-view-users/", generateConfig())
  );
};

// Admin Activate/Deactivate Users

export const toggleUserStatus = async (id) => {
  return handleResponse(
    apiClient.patch(
      `/api/toggle-user-activation/${id}/`,
      null,
      generateConfig()
    )
  );
};

//Advertiser Registration

export const advertiserSignup = async (formData) => {
  return handleResponse(
    apiClient.post("/api/register-advertiser/", formData, generateConfig(true))
  );
};
