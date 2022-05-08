import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import postService from "../../_services/post.service";
import useStyles from "../post/PostStyles";
import {
    Container
} from "@mui/material";
import 'moment/locale/ru';
import PostContainer from "../../components/post-page/post-container/PostContainer";
import PostComments from "../../components/post-page/post-comments/PostComments";
import RightBar from "../../components/post-page/right-bar/RightBar";

function Post() {
    const classes = useStyles();
    const {post} = useParams();
    let navigate = useNavigate();
    const [currentPost, setCurrentPost] = useState({});
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        postService.getById(post)
            .then(r => setCurrentPost(r.data))
            .catch(() =>  navigate('/unknown'))
        currentPost?.address?.x && currentPost?.address?.y && setCoordinates([currentPost?.address?.y, currentPost?.address?.x])
    }, [currentPost?.address?.x, currentPost?.address?.y])

    return (
        <React.Fragment>
            <Container className={classes.container} maxWidth={'lg'}>
                <PostContainer currentPost={currentPost} classes={classes} />
                <RightBar classes={classes} currentPost={currentPost} coordinates={coordinates} />
            </Container>
            <PostComments pageSize={10} currentPost={currentPost} classes={classes} />
        </React.Fragment>
    );
}

export default Post;