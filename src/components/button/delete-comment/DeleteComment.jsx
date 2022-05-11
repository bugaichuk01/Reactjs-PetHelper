import React from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import AlertDelete from "../../alerts/AlertDelete";
import {deleteComment} from "../../../store/actions/comment";
import {useDispatch} from "react-redux";

function DeleteComment({item}) {
    const dispatch = useDispatch();

    const onCommentDelete = () => {
        dispatch(deleteComment(item.id));
    }

    return (
        <AlertDelete
            icon={<DeleteIcon />}
            btnText={'Удалить'}
            text={'Вы действительно хотите удалить комментарий? Отменить это действие будет невозможно'}
            confirm={onCommentDelete}
        />
    );
}

export default DeleteComment;