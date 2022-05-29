import React, {useEffect, useState} from 'react';
import postService from "../../_services/post.service";
import PostItem from "../../components/post-item/PostItem";
import {Container, Divider, ImageList} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getFavourites} from "../../store/actions/favourites";
import Typography from "@mui/material/Typography";

function Favourites() {
    const dispatch = useDispatch();
    const {favourites} = useSelector(state => state.favouritesReducer);

    useEffect(() => {
        dispatch(getFavourites())
    }, [dispatch]);

    return (
        <Container>
            <Typography sx={{color: 'text.primary', marginBottom: '5px'}} variant={'h4'}>Избранные объявления</Typography>
            <Divider sx={{marginBottom: '25px'}}/>
            <ImageList  cols={4}>
                {favourites.map((post) => (
                    <PostItem key={post?.id} {...post} />
                ))}
            </ImageList>
        </Container>
    );
}

export default Favourites;