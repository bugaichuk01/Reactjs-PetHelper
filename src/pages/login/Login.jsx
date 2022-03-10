import React, {useState} from 'react';
import styles from './Login.module.css'
import {useNavigate} from "react-router-dom"
import API from "../../utils/API";
import UiInput from "../../components/UI/UIInput/UIInput";
import {useDispatch} from "react-redux";

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
        API.login(username, password, dispatch);
    }

    return (
        <div>
            <div className={styles.login__form_wrapper}>
                <h1 className={styles.header__text}>Log in</h1>
                <p className={styles.header__desc}>Welcome back! login with your data that you entered during
                    registration</p>
                <form className={styles.login__form} onSubmit={onSubmit}>
                    <UiInput type='text' name='username' placeholder='Username' onChange={onChange} />
                    <UiInput type='password' name='password' placeholder='Password' onChange={onChange} />
                    <span className={styles.recovery}>Recovery Password</span>
                    <button className={styles.btn__login} type='submit'>Login</button>
                </form>
                <p>Don't have an account? <span onClick={() => navigate('/register')} className={styles.register}>Register</span></p>
            </div>
        </div>
    );
}

export default Login;