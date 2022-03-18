import React, {useEffect, useState} from 'react';
import postService from "../../_services/post.service";
import styles from './PostsList.module.css';
import PostItem from "../post-item/PostItem";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function PostsList() {
    const [posts, setPosts] = useState([]);
    const handleDragStart = (e) => e.preventDefault();
    const responsive = {
        0: {
            items: 2
        }
    }

    useEffect(() => {
        postService.getAllPosts().then(response => setPosts(response.data))
    }, [])

    const items = posts.slice(0, 10).map((post) => (
        <PostItem onDragStart={handleDragStart} post={post}/>
    ))

    return (
        <ul className={styles.list}>
            <span className={styles.list__text}>Recently Uploaded Pets</span>
            {posts && (
                <AliceCarousel
                    disableButtonsControls={true}
                    responsive={responsive}
                    mouseTracking
                    items={items}
                />)}
        </ul>
    );
}

export default PostsList;