import React from 'react';
import {Container} from "@mui/material";
import Posts from "../../components/posts/Posts";
import GoBack from "../../components/button/go-back/GoBack";


function PostsPage() {
    return (
        <Container>
            <GoBack />
            <Posts items={3} />
        </Container>
    );
}

export default PostsPage;