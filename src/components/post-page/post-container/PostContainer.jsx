import React from 'react';
import {Avatar, Divider, Typography} from "@mui/material";
import checkStatus from "../../../_utils/checkStatus";
import {Box} from "@material-ui/core";
import moment from "moment";
import GoBack from "../../button/go-back/GoBack";

function PostContainer({currentPost, classes}) {
    const eventDate = moment(currentPost.eventDate).format('MMMM Do YYYY');
    const date = moment(currentPost.date).format('MMMM Do YYYY');

    return (
        <Box className={classes.box}>
            <GoBack />
            <img className={classes.image} src={currentPost?._links?.photoLink?.href} alt=""/>
            <Typography className={classes.text} variant={'subtitle1'}>
                <strong>Имя питомца:</strong> {currentPost.name}
            </Typography>
            <Divider/>
            <Typography className={classes.text} variant={'subtitle1'}>
                <strong>Пол:</strong> {currentPost.gender}
            </Typography>
            <Divider/>
            <Typography className={classes.text} variant={'subtitle1'}>
                <strong>Статус:</strong> {
                currentPost?.species?.slice(-1) === 'а'
                    ? currentPost.status + 'а'
                    : currentPost.status
            }
            </Typography>
            <Divider/>
            <Typography className={classes.text} variant={'subtitle1'}>
                <strong>Животное:</strong> {currentPost.species}
            </Typography>
            <Divider/>
            <Typography className={classes.text} variant={'subtitle1'}>
                <strong>Порода:</strong> {currentPost.breed}
            </Typography>
            <Divider/>
            <Typography className={classes.text} variant={'subtitle1'}>
                <strong>Стерелизован:</strong> {currentPost.castration}
            </Typography>
            <Divider/>
            <Typography className={classes.text} variant={'subtitle1'}>
                <strong>Возраст:</strong> {currentPost.age}
            </Typography>
            <Divider/>
            <Typography className={classes.text} variant={'subtitle1'}>
                <strong>Состояние:</strong> {currentPost.health}
            </Typography>
            <Divider/>
            <Typography className={classes.text} variant={'subtitle1'}>
                <strong>Дата {checkStatus(currentPost.status, 'пропажи', 'находки')}:</strong> {eventDate.charAt(0).toUpperCase() + eventDate.slice(1)}
            </Typography>
            <Divider/>
            <Typography className={classes.text} variant={'subtitle1'}>
                <strong>Место {checkStatus(currentPost.status, 'пропажи', 'находки')}:</strong> {currentPost?.address?.address}
            </Typography>
            <Divider/>
            <Typography className={classes.text} variant={'subtitle1'}>
                <strong>Описание:</strong> {currentPost.description}
            </Typography>
            <Typography className={classes.text} variant={'subtitle1'}>
                <strong>Дата публикации:</strong> {date.charAt(0).toUpperCase() + date.slice(1)}
            </Typography>
        </Box>
    );
}

export default PostContainer;