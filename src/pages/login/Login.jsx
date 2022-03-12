import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/actions/user";
import styles from './Login.module.css'
import UiInput from "../../components/UI/UIInput/UIInput";
import UIButton from "../../components/UI/UIButton/UIButton";
import UIAuthHelper from "../../components/UI/UIAuthHelper/UIAuthHelper";
import usernameIcon from '../../images/user.svg'
import passwordIcon from '../../images/password.svg'
import googleIcon from '../../images/google.svg'
import facebookIcon from '../../images/facebook.svg'

function Login() {
    const navigate = useNavigate();
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
        <div className={styles.login__wrapper}>
            <div className={styles.login__form_wrapper}>
                <img className={styles.image} src={require(`../../images/logoLogin.png`)} alt=""/>
                <span className={styles.login__welcome}>Welcome back to PetHelper</span>
                <p className={styles.login__desc}>Sign in to continue</p>

                <form className={styles.login__form} onSubmit={onSubmit}>
                    <UiInput
                        classes={styles.login__input}
                        src={usernameIcon}
                        type='text'
                        name='username'
                        placeholder='Username'
                        onChange={onChange} />
                    <UiInput
                        classes={styles.login__input}
                        src={passwordIcon}
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={onChange} />

                    {error && <span className={styles.error__text}>Oops! Your Username or Password Is Not Correct</span>}

                    <UIButton
                        classes={styles.btn__login}
                        type='submit'
                        text='Sign in' />
                </form>

                <div className={styles.login__cross}>
                    <div className={styles.hr}/>
                    <span className={styles.cross__text}>or</span>
                    <div className={styles.hr}/>
                </div>

                <UIAuthHelper
                    classes={styles.login__helper}
                    src={googleIcon}
                    text='Login with Google' />
                <UIAuthHelper
                    classes={styles.login__helper}
                    src={facebookIcon}
                    text='Login with Facebook' />

                <span className={styles.register}>Forgot your password?</span>
                <p className={styles.login__desc}>Don't have an account? <span onClick={() => navigate('/register')} className={styles.register}>Register</span></p>
            </div>
        </div>
    );
}

export default Login;