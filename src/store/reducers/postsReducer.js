import {FETCHING_POSTS, FILTER_POSTS, GET_POSTS} from "../constants/actionTypes";
import _ from 'lodash';
import moment from "moment";

const initialState = {
    posts: [],
    filtered: [],
    isFetching: false,
    error: false
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_POSTS:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                filtered: action.payload,
                isFetching: false,
                error: false
            };
        case FILTER_POSTS:
            return {
                ...state,
                filtered: _.filter(state.posts, action.payload),
                isFetching: false,
                error: false
            };
        default:
            return state;
    }
}
