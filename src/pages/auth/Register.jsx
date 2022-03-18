import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {register} from "../../store/actions/user";
import {Box, Button, Container, TextField, Typography} from "@material-ui/core";
import useStyles from './AuthStyles';
import {Link} from "react-router-dom";

function Register() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const {username, email, password, passwordConfirm} = formData;

    const onChange = (event) => setFormData({...formData, [event.target.name]: event.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();
        if (passwordConfirm !== password) {
            setError(true);
        } else {
            setError(false);
            dispatch(register(username, email, password));
        }
    }

    return (
        <Container maxWidth='sm'>
            <Box textAlign='center'>
                <img
                    className={classes.logo}
                    src={require('../../images/logoRegistration.jpeg')}
                    alt="Puppy logo"/>
                <Typography
                    className={classes.welcome}
                    variant={"subtitle1"}>
                    Let's Get Started
                </Typography>
                <Typography
                    className={classes.description}
                    variant={"body2"}>
                    Create an new account
                </Typography>
                <form onSubmit={onSubmit}>
                    <TextField
                        fullWidth
                        required
                        variant='outlined'
                        label='Your Username'
                        name='username'
                        onChange={onChange}
                    />
                    <TextField
                        fullWidth
                        required
                        variant='outlined'
                        label='Your Email'
                        name='email'
                        onChange={onChange}
                    />
                    <TextField
                        fullWidth
                        required
                        error={!!error}
                        variant='outlined'
                        label='Password'
                        name='password'
                        type='password'
                        onChange={onChange}
                    />
                    <TextField
                        fullWidth
                        required
                        error={!!error}
                        variant='outlined'
                        label='Password again'
                        name='passwordConfirm'
                        type='password'
                        onChange={onChange}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        className={classes.button}
                        type='submit'
                    >
                        Sign In
                    </Button>
                </form>
                <Typography className={classes.links} variant='body2'>Have a account?
                    <Link className={classes.link} to='/login'> Sign in</Link>
                </Typography>
            </Box>
        </Container>
    );
}

export default Register;