import React from 'react';
import {Avatar, Box, Button, Container, Divider, Typography} from "@mui/material";
import YMap from "../../ymap/YMap"
import isMyItem from "../../../_utils/isMyItem";
import DeletePost from "../../button/delete-post/DeletePost";
import {Placemark} from "react-yandex-maps";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Text from "../text/Text";
import checkStatus from "../../../_utils/checkStatus";

function RightBar({classes, currentPost, coordinates}) {
    const {user} = useSelector(state => state.userReducer);
    
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', width: '24%'}}>

            <Container className={classes.rightBar}>
                <Typography className={classes.mapText} variant={'subtitle1'}>
                    Контакты
                </Typography>

                <Box className={classes.contacts}>
                    <Avatar sx={{marginRight: '10px'}} alt={user?.username.toUpperCase()} src={'noImage'} />
                    <Typography className={classes.text} variant={'subtitle1'}>
                        {currentPost?.user?.name}
                    </Typography>
                </Box>
                <Divider/>
                <Box className={classes.contacts}>
                    <Text text={`Номер:`}/>
                    <Typography className={classes.text} variant={'subtitle1'}>
                        {user ? currentPost?.user?.mobileNumber :
                            <Link to={'/login'}>{currentPost?.user?.mobileNumber.slice(0, 2) + '*********'}</Link>}
                    </Typography>
                </Box>
                <Divider/>
                <Box className={classes.contacts}>
                    <Text text={`Почта:`}/>
                    <Typography className={classes.text} variant={'subtitle1'}>
                        {currentPost?.user?.email}
                    </Typography>
                </Box>
                <Divider/>
            </Container>
            <Container className={classes.rightBar}>
                <Typography className={classes.mapText} variant={'subtitle1'}>
                    {checkStatus(currentPost.status, 'Место, где питомец был потерян', 'Место, где нашли питомца')}
                </Typography>

                <Box>
                    <Box className={classes.map}>
                        <YMap
                            defaultState={{
                                center: coordinates,
                                zoom: 12,
                                controls: ['zoomControl', 'fullscreenControl']
                            }}
                        >
                            <Placemark geometry={coordinates}/>
                        </YMap>
                    </Box>
                    <Typography className={classes.mapPosition}
                                textAlign={'center'}>{currentPost?.address?.address}</Typography>
                </Box>


            </Container>

{/*            {
                isMyItem(currentPost) && (
                    <DeletePost currentPost={currentPost}/>
                )
            }*/}
        </Box>
    );
}

export default RightBar;