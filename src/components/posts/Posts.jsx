import React, {useEffect, useState} from 'react';
import {ImageList} from "@mui/material";
import PostItem from "../post-item/PostItem";
import useScreenSize from "../../_hooks/useScreenSize";
import postService from "../../_services/post.service";

function Posts({slice, items, children}) {
    const drawerActivate = useScreenSize();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(response => setPosts(response.data))
    }, []);

    return (
        <React.Fragment>
            <ImageList cols={drawerActivate ? 2 : items}>
                {posts.reverse().slice(0, slice).map((post) => (
                    <PostItem key={post.id} {...post} />
                ))}
            </ImageList>
            {children}
        </React.Fragment>
    );
}

export default Posts;