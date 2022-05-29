import {ADD_FAVOURITES, DELETE_FAVOURITES, GET_FAVOURITES} from "../constants/actionTypes";
import _ from 'lodash';

const initialState = {
    favourites: []
};

export const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            };
        case GET_FAVOURITES:
            return {
                ...state,
                favourites: action.payload
            };
        case DELETE_FAVOURITES:
            return {
                ...state,
                favourites: state.favourites.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}

