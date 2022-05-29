import {
    GET_FAVOURITES, ADD_FAVOURITES, DELETE_FAVOURITES
} from "../constants/actionTypes";
import favouritesService from "../../_services/favourites.service";

export const getFavourites = () => (dispatch) => {
    return favouritesService.getAll().then(
        (response) => {
            dispatch({
                type: GET_FAVOURITES,
                payload: response.data
            });
            return Promise.resolve();
        }
    );
};

export const addFavourites = (id, item) => (dispatch) => {
    return favouritesService.addToFavourites(id, item).then(
        () => {
            dispatch({
                type: ADD_FAVOURITES,
                payload: item
            });
            return Promise.resolve();
        });
};

export const deleteFavourites = (id) => (dispatch) => {
    return favouritesService.deleteFromFavourites(id).then(
        () => {
            dispatch({
                type: DELETE_FAVOURITES,
                payload: id
            });
            return Promise.resolve();
        });
};

