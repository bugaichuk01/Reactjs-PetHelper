import React, {useEffect, useState} from 'react';
import {Container, ImageList, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import useStyles from "../report/ReportStyles";
import {Button} from "@mui/material";
import axios from 'axios';
import {useGeolocation} from "react-use";
import PostItem from "../../components/post-item/PostItem";

function Home() {
    const classes = useStyles();
    let navigate = useNavigate();
    const location = useGeolocation();
    const [nearPosts, setNearPosts] = useState([]);
    useEffect(() => {
        axios.post('/api/animal/getNear', {
                "x": location.longitude,
                "y": location.latitude
        }
        ).then(r => setNearPosts(r.data))

    }, [location.latitude, location.longitude])

    return (
        <React.Fragment>
            <Container maxWidth={'xl'}>
                <Typography textAlign={'center'} variant='h6'>Ближайшие объявления:</Typography>
                <ImageList  cols={4}>
                    {nearPosts.map((post) => (
                        <PostItem key={post?.id} {...post} />
                    ))}
                </ImageList>
                <Container sx={{textAlign: 'center', width: '600px'}}>
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