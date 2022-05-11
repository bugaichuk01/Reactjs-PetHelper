import axios from "axios";
import authHeader from "./auth-header";

const edit = async (id, data) => {
    return await axios.put(`/api/user/edit/${id}`, data, {headers: authHeader()})
        .catch(error => console.error(error))
};

const getById = async (id) => {
    return await axios.get(`/api/user/getById/?id=${id}`, {headers: authHeader()})
        .catch(error => console.error(error))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    edit,
    getById
}