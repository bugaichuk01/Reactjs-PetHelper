import axios from "axios";

const register = async (username, email, password) => {
    return axios.post('/api/user/add', {
        "username": username,
        "email": email,
        "password": password
    }).then(response => response.data)
        .catch(error => {
            console.error(error)
        })
};

const login = (username, password) => {
    return axios.post('/api/auth/login', {
        "username": username,
        "password": password
    }).then(response => {
        if (response.data.token) {
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.user));
        }
        return response.data.user;
    })
        .catch(error => {
            console.error(error)
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