import React, {useEffect, useState} from 'react';
import postService from "../../_services/post.service";
import PostItem from "../../components/post-item/PostItem";
import {Container, ImageList} from "@mui/material";

function MyPosts() {
    const [myPosts, setMyPosts] = useState([]);
    useEffect(() => {
        postService.getMyPosts().then(r => setMyPosts(r.data));
    }, [])

    return (
        <Container>
            <ImageList  cols={4}>
                {myPosts.map((post) => (
                    <PostItem key={post?.id} {...post} />
                ))}
            </ImageList>
        </Container>
    );
}

export default MyPosts;