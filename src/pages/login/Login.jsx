import React, {useState} from 'react';
import styles from './Login.module.css'
import {useNavigate} from "react-router-dom"
import UiInput from "../../components/UI/UIInput/UIInput";
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/user";
import usernameIcon from '../../images/user.svg'
import passwordIcon from '../../images/password.svg'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
        <div>
            <div className={styles.login__form_wrapper}>
                <img className={styles.image} src={require(`../../images/logo.png`)} alt=""/>
                <span className={styles.login__welcome}>Welcome back to PetHelper</span>
                <p className={styles.login__desc}>Sign in to continue</p>
                <form className={styles.login__form} onSubmit={onSubmit}>
                    <UiInput src={usernameIcon} type='text' name='username' placeholder='Username' onChange={onChange} />
                    <UiInput src={passwordIcon} type='password' name='password' placeholder='Password' onChange={onChange} />
                    <button className={styles.btn__login} type='submit'>Sign in</button>
                </form>
                <div className={styles.login__cross}>
                    <div className={styles.hr}/>
                    <span className={styles.cross__text}>or</span>
                    <div className={styles.hr}/>
                </div>
                <span className={styles.register}>Forgot your password?</span>
                <p className={styles.login__desc}>Don't have an account? <span onClick={() => navigate('/register')} className={styles.register}>Register</span></p>
            </div>
        </div>
    );
}

export default Login;