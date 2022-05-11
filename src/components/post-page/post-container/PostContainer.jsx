import React from 'react';
import {Divider} from "@mui/material";
import checkStatus from "../../../_utils/checkStatus";
import {Box} from "@material-ui/core";
import moment from "moment";
import GoBack from "../../button/go-back/GoBack";
import Text from "../text/Text";
import useStyles from "../../../pages/post/PostStyles";

function PostContainer({currentPost}) {
    const classes = useStyles();
    const eventDate = moment(currentPost.eventDate).format('MMMM Do YYYY');
    const date = moment(currentPost.date).format('MMMM Do YYYY');

    return (
        <Box className={classes.box}>
            <GoBack/>
            <img className={classes.image} src={currentPost?._links?.photoLink?.href} alt=""/>
            <Text
                text={'Имя питомца:'}
                value={currentPost.name}
            />
            <Divider/>
            <Text
                text={'Пол:'}
                value={currentPost?.gender}
            />
            <Divider/>
            <Text
                text={'Статус:'}
                value={
                    currentPost?.species?.slice(-1) === 'а'
                        ? currentPost.status + 'а'
                        : currentPost.status
                }
            />
            <Divider/>
            <Text
                text={'Животное:'}
                value={currentPost?.species}
            />
            <Divider/>
            <Text
                text={'Порода:'}
                value={currentPost?.breed}
            />
            <Divider/>
            <Text
                text={'Стерелизован:'}
                value={currentPost?.castration}
            />
            <Divider/>
            <Text
                text={'Возраст:'}
                value={currentPost?.age}
            />
            <Divider/>
            <Text
                text={'Состояние:'}
                value={currentPost?.health}
            />
            <Divider/>
            <Text
                text={`Дата ${checkStatus(currentPost.status, 'пропажи', 'находки')}:`}
                value={eventDate.charAt(0).toUpperCase() + eventDate.slice(1)}
            />
            <Divider/>
            <Text
                text={`Место ${checkStatus(currentPost.status, 'пропажи', 'находки')}:`}
                value={currentPost?.address?.address}
            />
            <Divider/>
            <Text
                text={`Описание:`}
                value={currentPost?.description}
            />
            <Divider/>
            <Text
                text={`Дата публикации:`}
                value={date.charAt(0).toUpperCase() + date.slice(1)}
            />
        </Box>
    );
}

export default PostContainer;