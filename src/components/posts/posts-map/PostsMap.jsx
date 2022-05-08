import React from 'react';
import YMap from "../../ymap/YMap";
import {Clusterer} from "react-yandex-maps";
import MarkItem from "../mark-item/MarkItem";
import useStyles from './PostsMapStyles'
import {useSelector} from "react-redux";

function PostsMap() {
    const classes = useStyles();
    const {filtered} = useSelector(state => state.postsReducer);

    return (
        <YMap
            defaultState={{center: [55.75, 37.57], zoom: 9}}
            classes={classes.map}
        >
            <Clusterer
                options={{
                    preset: 'islands#invertedVioletClusterIcons',
                    groupByCoordinates: false,
                }}
            >
                {
                    filtered.map((post) => (
                        <MarkItem key={post.id} post={post} />
                    ))}
            </Clusterer>
        </YMap>
    );
}

export default PostsMap;