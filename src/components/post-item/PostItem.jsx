import React from 'react';
import {Link} from "react-router-dom";
import {ImageListItem, ImageListItemBar, Typography} from "@mui/material";
import moment from "moment";
import 'moment/locale/ru';
import useStyles from "./PostItemStyles";
import useScreenSize from "../../_hooks/useScreenSize";

function PostItem({id, breed, name, status, eventDate, links}) {
    const classes = useStyles();
    const drawerActivate = useScreenSize();

    return (
        <Link to={`/posts/${id}`}>
            <ImageListItem className={classes.listItem} key={id}>
                <div>
                    <img
                        src={links?.[2]?.href}
                        alt={breed}
                        loading="lazy"
                        className={drawerActivate ? classes.imageSmall : classes.image}
                    />
                </div>
                <ImageListItemBar
                    title={<Typography sx={{fontWeight: 600}} variant='h6'>{name}</Typography>}
                    subtitle={<Typography
                        variant='body2'>{status}: {moment(eventDate).format('MMMM Do YYYY')}</Typography>}
                    position="below"
                    className={classes.itemBar}
                />
            </ImageListItem>
        </Link>
    );
}

export default PostItem;