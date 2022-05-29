import axios from "axios";
import authHeader from "./auth-header";

const getAll = async () => {
    return await axios.get(`/api/animal/getFavorites`, {headers: authHeader()})
        .catch(error => {
            console.error(error)
        });
}

const addToFavourites = async (id, item) => {
    return await axios.post(`/api/animal/addToFavorites/${id}`, {item}, {headers: authHeader()})
}

const deleteFromFavourites = async (id) => {
    return await axios.delete(`/api/animal/deleteFromFavorites/${id}`, {headers: authHeader()})
        .catch(error => {
            console.error(error)
        });
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll,
    addToFavourites,
    deleteFromFavourites,
}