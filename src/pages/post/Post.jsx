import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import postService from "../../_services/post.service";
import Header from "../../components/header/Header";

function Post() {
    const {post} = useParams();
    const [currentPost, setCurrentPost] = useState({});

    useEffect(() => {
        postService.getById(post).then(r => setCurrentPost(r.data))
    }, [post])

    console.log(currentPost)

    return (
        <React.Fragment>
            <Header/>
            <img src={currentPost?._links?.photoLink?.href} alt=""/>
            <h1>{currentPost.name}</h1>
        </React.Fragment>
    );
}

export default Post;