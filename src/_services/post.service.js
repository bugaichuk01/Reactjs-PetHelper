import axios from "axios";

const getAllPosts = async () => {
    return await axios.get(`api/animal/getAll` );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllPosts
}