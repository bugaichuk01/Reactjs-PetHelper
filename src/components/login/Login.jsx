import React, {useState} from 'react';
import styles from './Login.module.css'
import {useNavigate} from "react-router-dom"
import API from "../../utils/API";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const {username, password} = formData;

    const onChange = (event) => setFormData({...formData, [event.target.name]: event.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        API.login(username, password);
    }

    return (
        <div>
            <div className={styles.login__form_wrapper}>
                <h1 className={styles.header__text}>Log in</h1>
                <p className={styles.header__desc}>Welcome back! login with your data that you entered during
                    registration</p>
                <form className={styles.login__form} onSubmit={onSubmit}>
                    <input className={styles.input} type="text" name="username" placeholder="Username" required
                           onChange={onChange}/>
                    <input className={styles.input} type="password" name="password" placeholder="Password" required
                           onChange={onChange}/>
                    <p className={styles.recovery}>Recovery Password</p>
                    <button className={styles.btn__login} type='submit'>Login</button>
                </form>
                <p>Don't have an account? <a onClick={() => navigate('/register')} className={styles.register}>Register</a></p>
            </div>
        </div>
    );
}

export default Login;