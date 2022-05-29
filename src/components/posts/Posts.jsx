import React, {useEffect, useState} from 'react';
import {Box, ImageList, Pagination, Stack, Typography} from "@mui/material";
import PostItem from "../post-item/PostItem";
import useScreenSize from "../../_hooks/useScreenSize";
import PostsMap from "./posts-map/PostsMap";
import Filters from "./filters/Filters";
import {useDispatch, useSelector} from "react-redux";
import {getPosts, setPosts} from "../../store/actions/posts";
import _ from "lodash";
import useStyles from "./PostsStyles";
import {TextField} from "@material-ui/core";
import {Button} from 'react-bootstrap';
import postService from "../../_services/post.service";


function Posts({items, children}) {
    const classes = useStyles();
    const pageSize = 6;
    const [paginated, setPaginated] = useState([]);

    const drawerActivate = useScreenSize();
    const dispatch = useDispatch();
    const {filtered} = useSelector(state => state.postsReducer);
    const [display, setDisplay] = useState(true);
    const [elasticValue, setElasticValue] = useState('');

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

    const onChange = (e) => {
        e.preventDefault();
        setElasticValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postService.searchPosts(elasticValue)
            .then(r => dispatch(setPosts(r.data)));
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <Box className={classes.inputBox}>
                    <TextField
                        fullWidth
                        variant='outlined'
                        value={elasticValue}
                        label='Поиск...'
                        onChange={onChange}
                        name='text'
                    />
                    <Button className={'btn btn-primary w-25 ml-5 mt-2'} type='submit'>
                        Поиск
                    </Button>
                </Box>
            </form>
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