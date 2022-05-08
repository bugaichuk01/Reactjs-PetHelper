import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import isMyItem from "../../../_utils/isMyItem";
import DeleteComment from "../../button/delete-comment/DeleteComment";

function CommentItem({item}) {
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
                isMyItem(item) && <DeleteComment item={item} />
            }
        </ListItem>
    );
}

export default CommentItem;