import axios from "axios";

const BASE_URL = "http:localhost:8000/api/auth"

const register = async (userData) => {
    const response = await axios.post(BASE_URL + "/register", userData);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

const login = async (userData) => {
    const response = await axios.post(BASE_URL + "/login", userData);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

const forgotPassword = async () => {

}

const resetPassword = async () => {

}

const authService = {
    register,
    login,
    forgotPassword,
    resetPassword
}

export default authService;