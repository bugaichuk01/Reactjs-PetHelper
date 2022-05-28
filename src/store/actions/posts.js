import {
    FETCHING_POSTS, FILTER_POSTS,
    GET_POSTS, SET_POSTS
} from "../constants/actionTypes";
import postService from "../../_services/post.service";

export const getPosts = () => (dispatch) => {
    dispatch({
        type: FETCHING_POSTS
    });

    return postService.getAll().then(
        (response) => {
            dispatch({
                type: GET_POSTS,
                payload: response.data
            });
            return Promise.resolve();
        }
    );
};

export const setPosts = (item) => (dispatch) => {
    return dispatch({
        type: SET_POSTS,
        payload: item
    });
};

export const filterPosts = (item) => (dispatch) => {
    return dispatch({
        type: FILTER_POSTS,
        payload: Object.fromEntries(Object.entries(item).filter(([_, v]) => v != null && v !== '' && Object.values(v).length !== 1))
    });
};

