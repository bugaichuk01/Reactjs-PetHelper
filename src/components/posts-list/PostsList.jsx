import React, {useEffect, useState} from 'react';
import postService from "../../_services/post.service";
import styles from './PostsList.module.css';
import PostItem from "../post-item/PostItem";

function PostsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllPosts().then(response => setPosts(response.data))
    }, [])

    return (
        <ul className={styles.list}>
            {posts && (
                posts.slice(0, 6).map((post) => (
                    <PostItem post={post} />
                ))
            )}
        </ul>
    );
}

export default PostsList;