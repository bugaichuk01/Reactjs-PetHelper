import axios from "axios";

const register = async (username, email, mobileNumber, password) => {
    try {
        await axios.post('/api/user/add', {
            "username": username,
            "email": email,
            "mobileNumber": mobileNumber,
            "password": password
        });
    } catch (error) {
        console.log(error)
    }
};

const login = (username, password) => {
    return axios.post('/api/auth/login', {
            "username": username,
            "password": password
        }).then(response => {
            if (response.data.Token) {
                localStorage.setItem("token", JSON.stringify(response.data.Token));
                localStorage.setItem("user", JSON.stringify(response.data.User));
            }
            return response.data.User;
        });
};

const logout = () => {
    localStorage.clear();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register,
    login,
    logout,
};