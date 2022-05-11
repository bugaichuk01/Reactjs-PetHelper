import React from 'react';
import {Container, Typography} from "@mui/material";
import Posts from "../../components/posts/Posts";
import {useNavigate} from "react-router-dom";
import useStyles from "../report/ReportStyles";
import {Button} from "@mui/material";

function Home() {
    const classes = useStyles();
    let navigate = useNavigate();

    return (
        <React.Fragment>
            <Container maxWidth={'xl'}>
                <Typography textAlign={'center'} variant='h6'>Последние потерянные и найденные домашние животные:</Typography>
                {/*<Posts slice={10} items={5}>*/}
                    <Container sx={{textAlign: 'center', width: '300px'}}>
                        <Button
                            fullWidth
                            onClick={() => navigate('/posts')}
                            className={classes.button}
                            variant={'contained'}
                        >
                            Смотреть все объявления
                        </Button>
                    </Container>
                {/*</Posts>*/}
            </Container>
        </React.Fragment>
    );
}

export default Home;