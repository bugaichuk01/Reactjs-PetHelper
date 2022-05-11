import { combineReducers } from 'redux';
import {userReducer} from "./userReducer";
import {commentReducer} from "./commentReducer";
import {postsReducer} from "./postsReducer";

export default combineReducers({
    userReducer: userReducer,
    commentReducer: commentReducer,
    postsReducer: postsReducer
});