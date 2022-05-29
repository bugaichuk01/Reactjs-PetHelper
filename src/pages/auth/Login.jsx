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
import {Button} from 'react-bootstrap';

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
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} type="text" required className={'form-control'} placeholder={'Username'} name='username'/>
                    <input onChange={onChange} type="password" required className={'form-control mt-2'} placeholder={'Пароль'} name='password'/>

                    {
                        error &&
                        <SimpleAlert
                            sx={{marginTop: '10px', textAlign: 'start'}}
                            severity='error'
                            title={'Ошибка авторизации'}
                            text={'Юзернейм или пароль введены некорректно.'}
                        />
                    }

                    <Button className={'btn btn-primary w-100 mt-2'} type='submit'>
                        Войти
                    </Button>
                </form>
                <p className={'mt-4'}>
                    <Link to='/forgetPass'>Забыли пароль?</Link>
                </p>
                <p>Еще не зарегистрированы ?
                    <Link to='/register'> Регистрация</Link>
                </p>
            </Box>
        </Container>
    );
};

export default Login;
