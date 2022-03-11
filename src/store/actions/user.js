import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS} from "../constants/actionTypes";
import AuthService from "../../services/auth.service";

export const login = (username, password) => (dispatch) => {
    dispatch({
       type: LOGIN_START
    });

    return AuthService.login(username, password).then(
        (response) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {user: response}
            });
            return Promise.resolve();
        },
        (error) => {
            const message = error?.response?.data?.message || error?.message || error?.toString();
            dispatch({
                type: LOGIN_FAILURE,
                payload: message
            });
            return Promise.reject();
        }
    );
};