import React, {useEffect, useState} from 'react';
import {
    Button,
    Container, Divider,
    List,
    Pagination,
    Stack,
} from "@mui/material";
import {TextField} from "@material-ui/core";
import _ from "lodash";
import CommentItem from "../comment-item/CommentItem";
import {useDispatch, useSelector} from "react-redux";
import SimpleAlert from "../../alerts/SimpleAlert";
import {getComments, postComment} from "../../../store/actions/comment";
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';

function PostComments({pageSize, currentPost, classes}) {
    const dispatch = useDispatch();

    const [paginated, setPaginated] = useState([]);
    const [value, setValue] = useState('');

    const {comments, isFetching} = useSelector(state => state.commentReducer);
    const {user} = useSelector(state => state.userReducer);

    useEffect(() => {
        currentPost.id && dispatch(getComments(currentPost.id));
    }, [currentPost.id, dispatch])

    useEffect(() => {
        setPaginated(_(comments).slice(0).take(pageSize).value())
    }, [currentPost.id, comments, pageSize])

    const onCommentPost = (e) => {
        e.preventDefault();
        dispatch(postComment(currentPost.id, value));
        setValue('');
    }

    const pageCount = comments ? Math.ceil(comments.length / pageSize) : 0;

    const pages = _.range(1, pageCount + 1);

    const pagination = (page) => {
        const startIndex = (page - 1) * pageSize;
        const paginatedPost = _(comments).slice(startIndex).take(pageSize).value();
        setPaginated(paginatedPost);
    }

    return (
        <Container sx={{marginTop: '20px', marginBottom: '100px', padding: '0 !important'}} maxWidth={'lg'}>
            <SimpleAlert
                sx={{alignItems: 'center'}}
                severity='info'
                text={'Вы можете разместить здесь сообщение, если у вас есть какая-либо информация об этом животном. ' +
                    'Владелец будет автоматически уведомлен.'}
            />
            {
                !user && (
                    <SimpleAlert
                        sx={{marginTop: '10px', alignItems: 'center'}}
                        severity='error'
                        text={'Войдите или зарегистрируйтесь чтобы отправлять комментарии.'}
                    />
                )
            }
            <Container sx={{padding: '0 !important'}} maxWidth={'lg'}>
                <form style={{width: '100%', display: 'flex'}} onSubmit={onCommentPost}>
                    <TextField
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        disabled={!user}
                        required
                        fullWidth
                        variant='outlined'
                        label='Комментарий'
                        name='comment'
                    />
                    <Button
                        className={classes.button}
                        variant="contained"
                        type='submit'
                        disabled={!user}
                    >
                        <ForwardToInboxRoundedIcon sx={{marginRight: '5px'}} /> Отправить
                    </Button>
                </form>
                <List sx={{width: '100%'}}>
                    {
                        !isFetching &&
                        (
                            paginated && paginated.map((item) => (
                                    <React.Fragment key={item.id}>
                                        <CommentItem item={item}/>
                                        {
                                            paginated.indexOf(item) !== paginated.length - 1 && (<Divider/>)
                                        }
                                    </React.Fragment>
                                )
                            ))
                    }
                </List>
                <Stack spacing={2}>
                    <Pagination
                        onClick={(e) => pagination(e.target.innerText)}
                        count={pages.length}
                        variant="outlined"
                        color="secondary"/>
                </Stack>
            </Container>
        </Container>
    );
}

export default PostComments;