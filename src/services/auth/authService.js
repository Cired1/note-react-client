import axios from "axios";

const BASE_URL = "http://localhost:8000/api/auth"

const register = async (userData) => {
    const response = await axios.post(BASE_URL + "/register", userData);
    if (response.data) {
        localStorage.setItem("authToken", JSON.stringify(response.data));
    }
    return response.data;
}

const login = async (userData) => {
    const response = await axios.post(BASE_URL + "/login", userData);
    if (response.data) {
        localStorage.setItem("authToken", JSON.stringify(response.data));
    }
    return response.data;
}

const forgotPassword = async (email) => {
    const response = await axios.post(BASE_URL + "/forgotpassword", email);
    return response.data;
}

const resetPassword = async (token, password) => {
    const response = await axios.put(BASE_URL + "/resetpassword/" + token, password);
    return response.data;
}

const logout = () => {
    localStorage.removeItem("authToken");
}

const authService = {
    register,
    login,
    forgotPassword,
    resetPassword,
    logout
}

export default authService;