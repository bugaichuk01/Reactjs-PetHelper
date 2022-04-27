import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import commentService from "../../../_services/comment.service";
import {useSelector} from "react-redux";
import AlertDelete from "../../alerts/AlertDelete";

function CommentItem({item, setComments, comments}) {

    const {user} = useSelector(state => state.userReducer);

    const onCommentDelete = () => {
        commentService.deleteComment(item.id)
            .then(setComments(comments.filter(comment => comment.id !== item.id)))
    }

    return (
        <ListItem sx={{paddingRight: '0px'}} key={item.id} alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            </ListItemAvatar>
            <ListItemText
                primary={item.user.username}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body1"
                            color="text.primary"
                        >
                            {`${item.text} `}
                        </Typography>
                        {item.localDateTime.replace('@', ' в ').replaceAll('-', '.')}
                    </React.Fragment>
                }
            />
            {
                item.user.id === user?.id && (
                    <AlertDelete
                        text={'Вы действительно хотите удалить комментарий? Отменить это действие будет невозможно'}
                        confirm={onCommentDelete}
                    />
                )
            }
        </ListItem>
    );
}

export default CommentItem;