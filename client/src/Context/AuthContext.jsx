import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { checkLoginStatus, logout } from "../Services/apiService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(checkLoginStatus());
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for login/logout changes
    const handleAuthChange = () => {
      setIsAuthenticated(checkLoginStatus());
    };

    window.addEventListener("loginStatusChanged", handleAuthChange);
    
    return () => {
      window.removeEventListener("loginStatusChanged", handleAuthChange);
    };
  }, []);
 
  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    navigate("/admin-login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);

