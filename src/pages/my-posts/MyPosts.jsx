import React, {useEffect, useState} from 'react';
import postService from "../../_services/post.service";
import PostItem from "../../components/post-item/PostItem";
import {Container, Divider, ImageList} from "@mui/material";
import Typography from "@mui/material/Typography";

function MyPosts() {
    const [myPosts, setMyPosts] = useState([]);
    useEffect(() => {
        postService.getMyPosts().then(r => setMyPosts(r.data));
    }, [])

    return (
        <Container>
            <Typography sx={{color: 'text.primary', marginBottom: '5px'}} variant={'h4'}>Ваши объявления</Typography>
            <Divider sx={{marginBottom: '25px'}}/>
            <ImageList  cols={4}>
                {myPosts.map((post) => (
                    <PostItem key={post?.id} {...post} />
                ))}
            </ImageList>
        </Container>
    );
}

export default MyPosts;