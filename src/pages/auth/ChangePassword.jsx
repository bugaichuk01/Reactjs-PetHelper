import React, {useEffect, useState} from 'react';
import {
    Box, Container,
    TextField
} from "@material-ui/core";
import useStyles from './AuthStyles';
import useFormData from "../../_hooks/useFormData";
import {Button} from "@mui/material";
import authService from "../../_services/auth.service";
import SimpleAlert from "../../components/alerts/SimpleAlert";
import {useNavigate, useParams} from "react-router-dom";

const ChangePassword = () => {
    const classes = useStyles();
    const {code} = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const {formData, onChange} = useFormData({
        password: '',
        confirmPassword: '',
    })
    const onSubmit = (e) => {
        e.preventDefault();
        setError(false);
        if (formData.password !== formData.confirmPassword) setError(true)
        else authService.changePassword(code, formData.password)
            .then(r => setSuccess(true));
    }

    useEffect(() => {
        success && setTimeout(() => {
            navigate('/login');
        }, 1500);
    }, [navigate, success])

    return (
        <Container maxWidth='sm'>
            <Box textAlign={'center'}>
                {
                    success
                        ? <SimpleAlert
                            sx={{marginTop: '10px', textAlign: 'start'}}
                            severity='success'
                            title={'Выполнено'}
                            text={'Пароль успешно обновлен.'}
                        />
                        : (
                            <form onSubmit={onSubmit}>
                                <TextField
                                    fullWidth
                                    required
                                    variant='outlined'
                                    label='Новый пароль'
                                    name='password'
                                    type='password'
                                    onChange={onChange}
                                />

                                <TextField
                                    fullWidth
                                    required
                                    variant='outlined'
                                    label='Подтвердите пароль'
                                    name='confirmPassword'
                                    type='password'
                                    onChange={onChange}
                                />
                                {
                                    error &&
                                    <SimpleAlert
                                        sx={{marginTop: '10px', textAlign: 'start'}}
                                        severity='error'
                                        title={'Ошибка'}
                                        text={'Пароли не совпадают.'}
                                    />
                                }

                                <Button
                                    fullWidth
                                    variant="contained"
                                    className={classes.button}
                                    type='submit'
                                >
                                    Обновить пароль
                                </Button>
                            </form>
                        )
                }
            </Box>
        </Container>
    );
};

export default ChangePassword;
