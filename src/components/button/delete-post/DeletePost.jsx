import React from 'react';
import postService from "../../../_services/post.service";
import AlertDelete from "../../alerts/AlertDelete";

function DeletePost({currentPost}) {
    const onDelete = () => {
        postService.deletePost(currentPost.id)
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