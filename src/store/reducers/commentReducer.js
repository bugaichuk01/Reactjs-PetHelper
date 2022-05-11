import {DELETE_COMMENT, FETCHING_COMMENTS, GET_COMMENTS, POST_COMMENT} from "../constants/actionTypes";

const initialState = {
    comments: [],
    isFetching: true
};

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_COMMENTS:
            return {
                ...state,
                isFetching: true,
                comments: null
            };
        case GET_COMMENTS:
            return {
                ...state,
                isFetching: false,
                comments: action.payload
            };
        case POST_COMMENT:
            return {
                ...state,
                isFetching: false,
                comments: [action.payload, ...state.comments]
            };
        case DELETE_COMMENT:
            return {
                ...state,
                isFetching: false,
                comments: state.comments.filter(comment => comment.id !== action.payload)
            };
        default:
            return state;
    }
}
