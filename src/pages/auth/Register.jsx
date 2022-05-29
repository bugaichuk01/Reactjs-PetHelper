import React, {useEffect, useState} from 'react';
import {Box, Container, TextField, Typography} from "@material-ui/core";
import useStyles from './AuthStyles';
import {Link} from "react-router-dom";
import AddressInput from "../../components/address-input/AddressInput";
import YMap from "../../components/ymap/YMap";
import authService from "../../_services/auth.service";
import {useGeolocation} from "react-use";
import useFormData from "../../_hooks/useFormData";
import SimpleAlert from "../../components/alerts/SimpleAlert";
import {Placemark} from "react-yandex-maps";
import {Button} from 'react-bootstrap';

function Register() {
    const classes = useStyles();
    const {formData, setFormData, onChange} = useFormData({
        name: '',
        username: '',
        email: '',
        mobileNumber: '',
        address: {
            address: '',
            x: '',
            y: ''
        },
        password: ''
    })

    const [error, setError] = useState(false);
    const [dataError, setDataError] = useState(false);

    const [coordinates, setCoordinates] = useState([]);
    const [status, setStatus] = useState(null);
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const currentGeolocation = useGeolocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            currentGeolocation.latitude && currentGeolocation.longitude && setCoordinates([currentGeolocation.latitude, currentGeolocation.longitude])
        }, 1000);
        return () => clearTimeout(timer);
    }, [currentGeolocation.latitude, currentGeolocation.longitude])


    const onSubmit = (e) => {
        e.preventDefault();
        if (passwordConfirm !== formData.password) {
            setError(true);
        } else {
            setError(false);
            authService.register(formData)
                .then(r => setStatus(r.status))
                .catch(error => console.error(setDataError(true)))
            ;
        }
    }

    return (
        <Container maxWidth='sm'>
            <Box textAlign='center'>
                {
                    status && status === 'ACTIVE'
                        ? (
                            <SimpleAlert
                                sx={{marginTop: '10px', textAlign: 'start'}}
                                severity='info'
                                title={'Подтверждение почты'}
                                text={'Чтобы активировать вашу учетную запись, требуется подтвердить адрес электронной почты.' +
                                    'Письмо активации отправлено на почту, введенную при регистрации'}
                            />
                        )
                        : (
                            <React.Fragment>
                                <form onSubmit={onSubmit}>
                                    <input onChange={onChange} type="text" required className={'form-control'} placeholder={'Имя'} name='name'/>
                                    <input onChange={onChange} type="text" required className={'form-control mt-2'} placeholder={'Username'} name='username'/>
                                    <input onChange={onChange} type="email" required className={'form-control mt-2'} placeholder={'Email'} name='email'/>
                                    <input onChange={onChange} type="text" required className={'form-control mt-2'} placeholder={'Номер телефона'} name='mobileNumber'/>

                                    <AddressInput address={formData.address} setFormData={setFormData} formData={formData}
                                                  coordinates={coordinates} setCoordinates={setCoordinates}/>

                                    <YMap
                                        setCoordinates={setCoordinates}
                                        classes={classes.map}
                                        defaultState={{center: [55.75, 37.57], zoom: 9}}
                                    >
                                        <Placemark geometry={coordinates}/>
                                    </YMap>
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
                                    <TextField
                                        fullWidth
                                        required
                                        error={!!error}
                                        variant='outlined'
                                        label='Подтверждение пароля'
                                        name='passwordConfirm'
                                        type='password'
                                        onChange={(e) => setPasswordConfirm(e.target.value)}
                                    />
                                    {
                                        dataError &&
                                        <SimpleAlert
                                            sx={{marginTop: '10px', textAlign: 'start'}}
                                            severity='error'
                                            title={'Ошибка регистрации'}
                                            text={'Пользователь с таким юзернеймом или почтой уже существует.'}
                                        />
                                    }
                                    <Button
                                        type={'submit'}
                                        fullWidth
                                        variant="contained"
                                        className={classes.button}
                                    >
                                        Регистрация
                                    </Button>
                                </form>
                                <Typography className={classes.links} variant='body2'>Уже зарегестрированы?
                                    <Link className={classes.link} to='/login'> Войти</Link>
                                </Typography>
                            </React.Fragment>
                        )
                }
            </Box>
        </Container>
    );
}

export default Register;