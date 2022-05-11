import React from 'react';
import {Avatar, Box, Container, Divider, Typography} from "@mui/material";
import YMap from "../../ymap/YMap"
import isMyItem from "../../../_utils/isMyItem";
import DeletePost from "../../button/delete-post/DeletePost";
import {Placemark} from "react-yandex-maps";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Text from "../text/Text";
import Share from "./share/Share";

function RightBar({classes, currentPost, coordinates}) {
    const {user} = useSelector(state => state.userReducer);

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
                <Text text={`Номер для связи:`}/>
                <Typography className={classes.text} variant={'subtitle1'}>
                    {user ? currentPost?.user?.mobileNumber :
                        <Link to={'/login'}>{currentPost?.user?.mobileNumber.slice(0, 2) + '*********'}</Link>}
                </Typography>
            </Box>
            <Divider/>
            <Box className={classes.contacts}>
                <Text text={`Почта автора:`}/>
                <Typography className={classes.text} variant={'subtitle1'}>
                    {currentPost?.user?.email}
                </Typography>
            </Box>
            <Divider/>
            <Box className={classes.contacts}>
                <Text text={`Вознагражение:`}/>
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
            <Share currentPost={currentPost} />
            {
                isMyItem(currentPost) && (
                    <DeletePost currentPost={currentPost}/>
                )
            }
        </Container>
    );
}

export default RightBar;