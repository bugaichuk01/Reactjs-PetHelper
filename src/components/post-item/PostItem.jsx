import React from 'react';
import {Link} from "react-router-dom";
import {ImageListItem, ImageListItemBar, Typography} from "@mui/material";
import moment from "moment";
import 'moment/locale/ru';
import useStyles from "./PostItemStyles";
import useScreenSize from "../../_hooks/useScreenSize";
import {Box} from "@material-ui/core";
import checkStatus from "../../_utils/checkStatus";

function PostItem({id, name, status, eventDate, links, species}) {
    const classes = useStyles();
    const drawerActivate = useScreenSize();
    return (
        <Link className={classes.listItem} to={`/posts/${id}`}>
            <ImageListItem key={id}>
                <div>
                    <Box
                        sx={{backgroundColor: checkStatus(status, '#f2711c', '#b5cc18')}}
                        className={classes.status}
                    >
                        <Typography sx={{fontWeight: 700, fontSize: '15px'}}
                                    variant={'subtitle2'}>{status}</Typography>
                    </Box>
                    <img
                        src={links?.[2]?.href}
                        alt={name}
                        loading="lazy"
                        className={drawerActivate ? classes.imageSmall : classes.image}
                    />
                </div>
                <ImageListItemBar
                    title={<Typography className={classes.topText} variant='subtitle2'>{species} по кличке
                        «{name}»</Typography>}
                    subtitle={<Typography className={classes.bottomText}
                        variant='body2'>{status}: {moment(eventDate).format('MMMM Do YYYY')}</Typography>}
                    position="below"
                    className={classes.itemBar}
                />
            </ImageListItem>
        </Link>
    );
}

export default PostItem;