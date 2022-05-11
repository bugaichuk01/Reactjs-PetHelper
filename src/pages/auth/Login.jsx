import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/actions/user";
import {
    Box, Container, Divider,
    TextField, Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";
import useStyles from './AuthStyles';
import useFormData from "../../_hooks/useFormData";
import SimpleAlert from "../../components/alerts/SimpleAlert";
import {Button} from "@mui/material";

const Login = () => {
    const classes = useStyles();
    const {formData, onChange} = useFormData({
        username: '',
        password: '',
    })
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.userReducer)

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData.username, formData.password));
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

                    {
                        error &&
                        <SimpleAlert
                            sx={{marginTop: '10px', textAlign: 'start'}}
                            severity='error'
                            title={'Ошибка авторизации'}
                            text={'Юзернейм или пароль введены некорректно.'}
                        />
                    }

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
                    <Link className={classes.link} to='/forgetPass'>Забыли пароль?</Link>
                </Typography>
                <Typography className={classes.links} variant='body2'>Не зарегестрированы в системе?
                    <Link className={classes.link} to='/register'> Регистрация</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default Login;
