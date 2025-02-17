//Service/apiService.jsx
import axios from "axios";

// Create Axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Base URL from environment variables
  timeout: 5000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json", // Default headers
  },
});

// ✅ Function to refresh the access token
const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    console.warn("⚠️ No refresh token found. Redirecting to '/'...");
    logoutAndRedirect(); // Logout and redirect immediately
    return { success: false, errors: { message: "Session expired." } };
  }

  try {
    console.log("🔄 Refreshing access token...");
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/token/refresh/`,
      { refresh: refreshToken }
    );

    if (response.data.access) {
      console.log("✅ Access token refreshed.");
      localStorage.setItem("accessToken", response.data.access);
      return { success: true, accessToken: response.data.access };
    } else {
      console.warn("⚠️ Token refresh failed. Redirecting to '/'...");
      logoutAndRedirect();
      return { success: false, errors: { message: "Session expired." } };
    }
  } catch (error) {
    console.error("❌ Refresh token expired. Redirecting to '/'...", error);
    logoutAndRedirect();
    return { success: false, errors: { message: "Session expired." } };
  }
};

// ✅ Function to log out user and redirect to "/"
const logoutAndRedirect = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userType");
  window.dispatchEvent(new Event("loginStatusChanged"));
  window.location.href = "/"; // Redirect user to home page
};

// ✅ Axios Interceptor: Attaches JWT Token & Handles Expired Tokens
apiClient.interceptors.request.use(
  async (config) => {
    if (
      config.url.includes("/api/login/") ||
      config.url.includes("/api/register/")
    ) {
      return config;
    }

    if (config.authRequired !== false) {
      let token = localStorage.getItem("accessToken");

      if (!token) {
        console.warn("⚠️ No access token found. Trying to refresh...");
        const refreshResponse = await refreshAccessToken();

        if (refreshResponse.success) {
          console.log("✅ Token refreshed, retrying request...");
          token = refreshResponse.accessToken;
          localStorage.setItem("accessToken", token);
        } else {
          console.error("❌ Both tokens expired. Redirecting to '/'...");
          return Promise.reject(new Error("Session expired. Redirecting..."));
        }
      }

      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("❌ API Request Error:", error);
    return Promise.reject(error);
  }
);

// ✅ Utility to generate headers dynamically
const generateConfig = (isFormData = false, authRequired = true) => ({
  headers: {
    "Content-Type": isFormData ? "multipart/form-data" : "application/json",
  },
  authRequired,
});

// ✅ Function to handle API responses & errors
const handleResponse = async (apiCall) => {
  try {
    const response = await apiCall;
    return {
      success: true,
      data: response.data,
      fullResponse: response, // Include the complete response object
    };
  } catch (error) {
    return {
      success: false,
      errors: error.response?.data?.errors || { message: error.message },
      fullResponse: error.response || error,
    };
  }
};

// ✅ User Authentication Functions
export const userSignup = async (data) => {
  return handleResponse(
    apiClient.post("/api/register/", data, { authRequired: false })
  );
};

export const login = async (data) => {
  console.log("🔵 Attempting login...");
  const response = await handleResponse(apiClient.post("/api/login/", data));
  if (response.success) {
    console.log("✅ Login successful. Storing tokens...");
    localStorage.setItem("accessToken", response.data.token.access);
    localStorage.setItem("refreshToken", response.data.token.refresh);
    localStorage.setItem("userType", response.data.user_type);
    window.dispatchEvent(new Event("loginStatusChanged")); // Dispatch event
  }
  return response;
};

export const checkLoginStatus = () => !!localStorage.getItem("accessToken");

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userType");
  window.dispatchEvent(new Event("loginStatusChanged")); // Dispatch event
};

// ✅ User Profile Functions
export const addUserProfile = async (formData) => {
  return handleResponse(
    apiClient.post("/api/user-profile/add/", formData, generateConfig(true))
  );
};

export const userProfile = async () => {
  return handleResponse(
    apiClient.get("/api/user-profile/view/", generateConfig())
  );
};

export const updateUserProfile = async (formData) => {
  return handleResponse(
    apiClient.put("/api/user-profile/edit/", formData, generateConfig(true))
  );
};

// ✅ User Interests
export const getInterests = async () => {
  return handleResponse(apiClient.get("/api/interests/"), generateConfig());
};

export const userAddInterest = async (formData) => {
  console.log(formData);
  return handleResponse(
    apiClient.post("/api/add-user-interests/", formData, generateConfig(false))
  );
};

// ✅ Blog Management
export const addBlog = async (formData) => {
  return handleResponse(
    apiClient.post("/api/blogs/", formData, generateConfig(true))
  );
};

export const viewBlogs = async (id = null) => {
  return handleResponse(
    apiClient.get(id ? `/api/blogs/${id}/` : "/api/blogs/", generateConfig())
  );
};

export const updateBlog = async (id, formData) => {
  return handleResponse(
    apiClient.put(`/api/blogs/${id}/`, formData, generateConfig(true))
  );
};

export const deleteBlog = async (id) => {
  return handleResponse(
    apiClient.delete(`/api/blogs/${id}/`, generateConfig())
  );
};

// ✅ Admin Functions
export const viewUsers = async () => {
  return handleResponse(
    apiClient.get("/api/admin-view-users/", generateConfig())
  );
};

export const toggleUserStatus = async (id) => {
  return handleResponse(
    apiClient.patch(
      `/api/toggle-user-activation/${id}/`,
      null,
      generateConfig()
    )
  );
};

// ✅ Advertiser Functions
export const advertiserSignup = async (formData) => {
  return handleResponse(
    apiClient.post("/api/register-advertiser/", formData, generateConfig(true))
  );
};

export const adminViewNewAdvertisers = async () => {
  return handleResponse(
    apiClient.get("/api/admin-view-new-advertisers/", generateConfig())
  );
};

export const toggleUserActivation = async (id) => {
  return handleResponse(
    apiClient.patch(`/api/toggle-user-activation/${id}/`, generateConfig())
  );
};
