import axios from "axios";
import authHeader from "./auth-header";

const getComments = async (id) => {
    return await axios.get(`/api/comment/${id}`, {headers: authHeader()})
        .catch(error => {
            console.error(error)
        });
}

const postComment = async (id, body) => {
    return await axios.post(`/api/comment/${id}`, {text: body},{headers: authHeader()})
        .catch(error => {
            console.error(error)
        });
}

const deleteComment = async (id) => {
    return await axios.delete(`/api/comment/${id}`,{headers: authHeader()})
        .catch(error => {
            console.error(error)
        });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getComments,
    postComment,
    deleteComment
}

