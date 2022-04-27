import React, {useEffect, useState} from 'react';
import {
    Container, Divider,
    List,
    Pagination,
    Stack,
} from "@mui/material";
import {Button, TextField} from "@material-ui/core";
import _ from "lodash";
import commentService from "../../../_services/comment.service";
import CommentItem from "../comment-item/CommentItem";
import {useSelector} from "react-redux";
import SimpleAlert from "../../alerts/SimpleAlert";

function PostComments({pageSize, currentPost, classes}) {
    const [paginated, setPaginated] = useState();
    const [value, setValue] = useState('');
    const [comments, setComments] = useState([]);

    const {user} = useSelector(state => state.userReducer);

    useEffect(() => {
        currentPost.id && commentService.getComments(currentPost.id)
            .then(r => setComments(r.data.reverse()));
        setPaginated(_(comments).slice(0).take(pageSize).value())
    }, [currentPost.id, comments.length])

    const onCommentPost = (e) => {
        e.preventDefault();
        commentService.postComment(currentPost.id, value)
            .then(r => setComments([r.data, ...comments]));
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
        <Container sx={{marginTop: '20px', marginBottom: '100px'}} maxWidth={'lg'}>
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
                        Отправить
                    </Button>
                </form>
                <List sx={{width: '100%'}}>
                    {
                        paginated && paginated.map((item) => (
                            <React.Fragment key={item.id}>
                                <CommentItem item={item} setComments={setComments} comments={comments}/>
                                {
                                    paginated.indexOf(item) !== paginated.length - 1 && (<Divider/>)
                                }
                            </React.Fragment>
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