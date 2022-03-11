import axios from "axios";
import authHeader from "../services/auth-header";
import {loginFailure, loginStart, loginSuccess} from "../store/actions/user";

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    login: async (username, password, dispatch) => {
        dispatch(loginStart());
        try {
            await axios.post('/api/auth/login', {
                "username": username,
                "password": password
            }).then(response => {
                if (response.data.Token) {
                    localStorage.setItem("token", JSON.stringify(response.data.Token));
                    localStorage.setItem("user", JSON.stringify(response.data.User));
                    dispatch(loginSuccess(response.data.User));
                }
            });
        } catch (error) {
            dispatch(loginFailure(error));
        }
    },

    register: async (username, email, mobileNumber, password) => {
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
},

    getByUsername: async (username) => {
        return await axios.get(`api/user/getByUsername?username=${username}`, {headers: authHeader()});
    },

    getAllUsers: async () => {
        return await axios.get(`api/user/getAll`, {headers: authHeader()});
    },

    getAllPosts: async () => {
        return await axios.get(`api/animal/getAll` );
    }

}