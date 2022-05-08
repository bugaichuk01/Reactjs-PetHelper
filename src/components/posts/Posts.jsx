import React, {useEffect, useState} from 'react';
import {Box, ImageList, Pagination, Stack, Typography} from "@mui/material";
import PostItem from "../post-item/PostItem";
import useScreenSize from "../../_hooks/useScreenSize";
import PostsMap from "./posts-map/PostsMap";
import Filters from "./filters/Filters";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/actions/posts";
import _ from "lodash";
import useStyles from "./PostsStyles";


function Posts({items, children}) {
    const classes = useStyles();
    const pageSize = 6;
    const [paginated, setPaginated] = useState([]);

    const drawerActivate = useScreenSize();
    const dispatch = useDispatch();
    const {posts, filtered} = useSelector(state => state.postsReducer);
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    useEffect(() => {
        setPaginated(_(filtered.reverse()).slice(0).take(pageSize).value())
    }, [filtered, pageSize])

    const pageCount = filtered ? Math.ceil(filtered.length / pageSize) : 0;

    const pages = _.range(1, pageCount + 1);

    const pagination = (page) => {
        const startIndex = (page - 1) * pageSize;
        const paginatedPost = _(filtered).slice(startIndex).take(pageSize).value();
        setPaginated(paginatedPost);
    }

    return (
        <React.Fragment>
            <Box className={classes.box}>
                <Filters setDisplay={setDisplay} display={display}/>
                {
                    display
                        ? <PostsMap/>
                        : (
                            <div>
                                <ImageList className={classes.imageList} cols={drawerActivate ? 1 : items}>
                                    {paginated.map((post) => (
                                        <PostItem key={post?.id} {...post} />
                                    ))}
                                </ImageList>

                                <Stack spacing={2}>
                                    <Pagination
                                        sx={{justifyContent: 'center', display: 'flex'}}
                                        onClick={(e) => pagination(e.target.innerText)}
                                        count={pages.length}
                                        variant="outlined"
                                        color="secondary"/>
                                </Stack>
                            </div>
                        )
                }
                {children}
            </Box>
        </React.Fragment>
    );
}

export default Posts;