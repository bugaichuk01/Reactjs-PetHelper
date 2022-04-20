import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/actions/user";
import {
    Box, Button, Container, Divider,
    TextField, Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Alert} from "@mui/material";
import useStyles from './AuthStyles';

const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.userReducer)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const {username, password} = formData;

    const onChange = (event) => setFormData({...formData, [event.target.name]: event.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    }

    return (
        <Container maxWidth='sm'>
            <Box textAlign={'center'}>
                <img
                    className={classes.logo}
                    src={require('../../images/logoLogin.png')}
                    alt="Puppy logo"/>
                <Typography
                    className={classes.welcome}
                    variant={"subtitle1"}>
                    PetHelper
                </Typography>
                <Typography
                    className={classes.description}
                    variant={"body2"}>
                    Войдите, чтобы продолжить
                </Typography>
                <form onSubmit={onSubmit}>
                    <TextField
                        fullWidth
                        required
                        error={!!error}
                        variant='outlined'
                        label='Username'
                        name='username'
                        onChange={onChange}
                    />
                    <TextField
                        fullWidth
                        required
                        error={!!error}
                        variant='outlined'
                        label='Пароль'
                        name='password'
                        type='password'
                        onChange={onChange}
                    />

                    {error && <Alert sx={{marginTop: '10px'}} severity="error"><strong>Error: </strong>Username or password is incorrect</Alert> }

                    <Button
                        fullWidth
                        variant="contained"
                        className={classes.button}
                        type='submit'
                    >
                        Войти
                    </Button>
                </form>
                <Divider className={classes.divider}/>
                <Typography className={classes.links} variant='body2'>
                    <Link className={classes.link} to='/'>Забыли пароль?</Link>
                </Typography>
                <Typography className={classes.links} variant='body2'>Не зарегестрированы в системе?
                    <Link className={classes.link} to='/register'> Регистрация</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default Login;
