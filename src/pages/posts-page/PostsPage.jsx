import React from 'react';
import {Container} from "@mui/material";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";

function PostsPage() {


    return (
        <Container>
            <Header/>
            <Posts items={4} />
        </Container>
    );
}

export default PostsPage;