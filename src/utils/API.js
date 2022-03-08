import axios from "axios";
import authHeader from "../services/auth-header";

export default {

    login: async (username, password) => {
        try {
            await axios.post('/api/auth/login', {
                "username": username,
                "password": password
            }).then(response => {
                if (response.data.Token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
        } catch (error) {
            console.log(error)
        }
    },

    register: async (username, email, password) => {
        try {
            await axios.post('/api/user/add', {
                "username": username,
                "email": email,
                "password": password
            });
        } catch (error) {
            console.log(error)
        }
},

    getUsers: async () => {
        return await axios.get('api/user/getAll', {headers: authHeader()});
    }

}