import React from 'react';
import {Typography} from "@mui/material";
import checkStatus from "../../../_utils/checkStatus";
import {Box} from "@material-ui/core";
import useStyles from "../../../pages/post/PostStyles";
import Share from "../share/Share";

function PostContainer({currentPost}) {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            {/*<GoBack/>*/}
            <Box>
                <Box
                    sx={{backgroundColor: checkStatus(currentPost?.status, '#f2711c', '#b5cc18')}}
                    className={classes.status}
                >
                    <Typography sx={{fontWeight: 700, fontSize: '15px'}}
                                variant={'subtitle2'}>{currentPost?.status}</Typography>
                </Box>
                <Box className={classes.imageBox}>
                    <img className={classes.image} src={currentPost?._links?.photoLink?.href} alt=""/>
                    <Typography className={classes.name} variant={'h4'}>{currentPost?.name}</Typography>
                </Box>
                <Share currentPost={currentPost}/>
            </Box>
        </Box>
    );
}

export default PostContainer;