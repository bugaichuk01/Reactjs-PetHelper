import axios from "axios";

const register = async (data) => {
    return axios.post('/api/user/add',
        data
    )
        .then(response => response.data)
        .catch(error => {
            console.error(error)
        })
};

const login = async (username, password) => {
    return await axios.post('/api/auth/login', {
        "username": username,
        "password": password
    }).then(response => {
        if (response.data.token) {
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.user));
        }
        return response.data.user;
    })
};

const activate = async (code) => {
    return await axios.post(`/api/user/activation/${code}`)
};

const logout = () => {
    localStorage.clear();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register,
    login,
    logout,
    activate
};