import React from 'react';
import {Avatar, Box, Container, Divider, Typography} from "@mui/material";
import YMap from "../../ymap/YMap"
import isMyItem from "../../../_utils/isMyItem";
import DeletePost from "../../button/delete-post/DeletePost";
import {Placemark} from "react-yandex-maps";

function RightBar({classes, currentPost, coordinates}) {
    return (
        <Container className={classes.rightBar}>
            <Typography className={classes.mapText} variant={'subtitle1'}>
                Контакты и место, где в последний раз видели питомца:
            </Typography>

            <Box className={classes.contacts}>
                <Avatar sx={{marginRight: '10px'}} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                <Typography className={classes.text} variant={'subtitle1'}>
                    {currentPost?.user?.name}
                </Typography>
            </Box>
            <Divider/>
            <Box className={classes.contacts}>
                <Typography className={classes.text} variant={'subtitle1'}>
                    <strong>Номер для связи:</strong>
                </Typography>
                <Typography className={classes.text} variant={'subtitle1'}>
                    {currentPost?.user?.mobileNumber}
                </Typography>
            </Box>
            <Divider/>
            <Box className={classes.contacts}>
                <Typography className={classes.text} variant={'subtitle1'}>
                    <strong>Почта автора:</strong>
                </Typography>
                <Typography className={classes.text} variant={'subtitle1'}>
                    {currentPost?.user?.email}
                </Typography>
            </Box>
            <Divider/>
            <Box className={classes.contacts}>
                <Typography className={classes.text} variant={'subtitle1'}>
                    <strong> Вознагражение:</strong>
                </Typography>
                <Typography className={classes.text} variant={'subtitle1'}>
                    {currentPost?.award}
                </Typography>
            </Box>

            <YMap
                defaultState={{center: coordinates, zoom: 12}}
                classes={classes.map}
            >
                <Placemark geometry={coordinates}/>
            </YMap>

            {
                isMyItem(currentPost) && (
                    <DeletePost currentPost={currentPost} />
                )
            }
        </Container>
    );
}

export default RightBar;