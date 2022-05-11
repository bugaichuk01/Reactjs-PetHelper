import React from 'react';
import postService from "../../../_services/post.service";
import AlertDelete from "../../alerts/AlertDelete";
import {useNavigate} from "react-router-dom";

function DeletePost({currentPost}) {
    const navigate = useNavigate();
    const onDelete = () => {
        postService.deletePost(currentPost.id)
            .then(r => navigate('/posts'))
    }

    return (
        <AlertDelete
            text={'Вы действительно хотите снять объявление с публикации?'}
            btnText={'Удалить'}
            confirm={onDelete}
        />
    );
}

export default DeletePost;