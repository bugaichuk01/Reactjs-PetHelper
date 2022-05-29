import React, {useEffect, useState} from 'react';
import {Button, Typography} from "@mui/material";
import checkStatus from "../../../_utils/checkStatus";
import {Box} from "@material-ui/core";
import useStyles from "../../../pages/post/PostStyles";
import Share from "../share/Share";
import axios from "axios";
import authHeader from "../../../_services/auth-header";
import favouritesService from "../../../_services/favourites.service";
import {useDispatch, useSelector} from "react-redux";
import {addFavourites, deleteFavourites, getFavourites} from "../../../store/actions/favourites";

function PostContainer({currentPost}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {favourites} = useSelector(state => state.favouritesReducer);

    function containsObject(obj, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                return true;
            }
        }
        return false;
    }


    useEffect(() => {
        dispatch(getFavourites())
    }, [dispatch]);

    const onFavClick = () => {
        containsObject(currentPost, favourites)
            ? dispatch(deleteFavourites(currentPost.id))
            : dispatch(addFavourites(currentPost.id, currentPost))
    }

    return (
        <Box className={classes.box}>
            {/*<GoBack/>*/}
            <Box>
                <Box
                    sx={{backgroundColor: checkStatus(currentPost?.status, '#f2711c', '#b5cc18')}}
                    className={classes.status}
                >
                    <Typography sx={{fontWeight: 700, fontSize: '15px'}}
                                variant={'subtitle2'}>{currentPost?.status}</Typography>
                </Box>
                <Box className={classes.imageBox}>
                    <img className={classes.image} src={currentPost?._links?.photoLink?.href} alt=""/>
                    <Typography className={classes.name} variant={'h4'}>{currentPost?.name}</Typography>
                </Box>
                <Button sx={{
                    marginBottom: '15px', backgroundColor: '#21ba45',
                    '&:hover': {
                        backgroundColor: '#21ba45'
                    },
                }} onClick={onFavClick} fullWidth type={'submit'} variant={'contained'}>
                    {containsObject(currentPost, favourites) ? 'Удалить из избранного' : 'Добавить в избранное'}
                </Button>
                <Share currentPost={currentPost}/>
            </Box>
        </Box>
    );
}

export default PostContainer;