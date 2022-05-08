import {DELETE_COMMENT, FETCHING_COMMENTS, GET_COMMENTS, POST_COMMENT} from "../constants/actionTypes";
import commentService from "../../_services/comment.service";

export const getComments = (id) => (dispatch) => {
    dispatch({
        type: FETCHING_COMMENTS
    });

    return commentService.getComments(id).then(
        (response) => {
            dispatch({
                type: GET_COMMENTS,
                payload: response.data.reverse()
            });
            return Promise.resolve();
        }
    );
};

export const postComment = (id, body) => (dispatch) => {
    return commentService.postComment(id, body).then(
        (response) => {
            dispatch({
                type: POST_COMMENT,
                payload: response.data
            });
            return Promise.resolve();
        }
    );
};

export const deleteComment = (id) => (dispatch) => {
    return commentService.deleteComment(id).then(
        () => {
            dispatch({
                type: DELETE_COMMENT,
                payload: id
            });
            return Promise.resolve();
        }
    );
};