import axios from "axios";
import authHeader from "../services/auth-header";

export default {
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