import axios from "axios";
import authHeader from "./auth-header";

const getAll = async () => {
    return await axios.get(`/api/animal/getAll`)
        .catch(error => {
            console.error(error)
        });
}

const getById = async (id) => {
    return await axios.get(`/api/animal/getById`, {
        params: {id: id}
    })
}

const getMyPosts = async () => {
    return await axios.get(`/api/animal/getMyPosts`, {headers: authHeader()})
        .catch(error => {
            console.error(error)
        });
}

const getRegions = async () => {
    return await axios.get('/api/animal/getRegions')
        .catch(error => console.log(error))
}

const addReport = async (data) => {
    return axios.post('/api/animal/add', data,
        {headers: authHeader()})
}

const getAvatar = async (id) => {
    return await axios.get(`/api/animal/fileserver/get`, {
        params: {id: id}
    })
        .catch(error => {
            console.error(error)
        })
}

const postImage = async (data) => {
    return await axios.post('/api/animal/fileserver/add', data,
        {
            headers: authHeader()
        })
        .catch(error => {
            console.error(error)
        })
}

const deletePost = async (id) => {
    return await axios.delete(`/api/animal/delete/?id=${id}`,
        {
            headers: authHeader()
        })
        .catch(error => {
            console.error(error)
        })
}

const searchPosts = async (text) => {
    return await axios.get(`/api/animal/search?text=${text}`, {headers: authHeader()})
        .catch(error => {
            console.error(error)
        })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll,
    searchPosts,
    getById,
    addReport,
    postImage,
    getAvatar,
    deletePost,
    getMyPosts,
    getRegions

}