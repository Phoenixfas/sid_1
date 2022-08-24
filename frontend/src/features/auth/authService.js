import axios from "axios";

const API_URL = "http://localhost:5000/api/admins/";

// Register admin
const register = async (adminData) => {
  const response = await axios.post(API_URL, adminData);

  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};

// Login admin
const login = async (adminData) => {
  const response = await axios.post(API_URL + "login", adminData);

  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};

//Logout admin
const logout = () => {
  localStorage.removeItem("admin");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
