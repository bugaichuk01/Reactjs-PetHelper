import React from 'react';
import {Avatar, Box, Container, Divider, Typography} from "@mui/material";
import YMap from "../../ymap/YMap";

function RightBar({classes, currentPost, coordinates }) {
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
            <Divider />
            <Box className={classes.contacts}>
                <Typography className={classes.text} variant={'subtitle1'}>
                    <strong>Номер для связи:</strong>
                </Typography>
                <Typography className={classes.text} variant={'subtitle1'}>
                    {currentPost?.user?.mobileNumber}
                </Typography>
            </Box>
            <Divider />
            <Box className={classes.contacts}>
                <Typography className={classes.text} variant={'subtitle1'}>
                    <strong>Почта автора:</strong>
                </Typography>
                <Typography className={classes.text} variant={'subtitle1'}>
                    {currentPost?.user?.email}
                </Typography>
            </Box>
            <Divider />
            <Box className={classes.contacts}>
                <Typography className={classes.text} variant={'subtitle1'}>
                    <strong> Вознагражение:</strong>
                </Typography>
                <Typography className={classes.text} variant={'subtitle1'}>
                    8000000
                </Typography>
            </Box>

            <YMap
                geometry={coordinates}
                defaultState={{center: coordinates, zoom: 12}}
                classes={classes.map}
            />

        </Container>
    );
}

export default RightBar;