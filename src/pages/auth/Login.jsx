import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/actions/user";
import {
    Box, Button, Container, Divider,
    TextField, Typography
} from "@material-ui/core";
import useStyles from './AuthStyles';
import {Link} from "react-router-dom";

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
                    Welcome back to PetHelper
                </Typography>
                <Typography
                    className={classes.description}
                    variant={"body2"}>
                    Sign in to continue
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
                        label='Password'
                        name='password'
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
                <Divider className={classes.divider}/>
                <Typography className={classes.links} variant='body2'>
                    <Link className={classes.link} to='/'>Forgot your password?</Link>
                </Typography>
                <Typography className={classes.links} variant='body2'>Don't have an account?
                    <Link className={classes.link} to='/register'> Register</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default Login;
