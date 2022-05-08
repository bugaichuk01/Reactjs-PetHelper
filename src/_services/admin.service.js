import axios from "axios";
import authHeader from "./auth-header";

const getAllUsers = async () => {
    return await axios.get(`/api/user/getAll`, {headers: authHeader()})
        .catch(error => console.error(error))
};

const deleteUser = async (id) => {
    return await axios.delete(`/api/admin/delete/?id=${id}`, {headers: authHeader()})
        .catch(error => console.error(error))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    getAllUsers,
    deleteUser
}