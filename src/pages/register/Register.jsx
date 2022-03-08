import React, {useState} from 'react';
import styles from './Register.module.css'
import {useNavigate} from "react-router-dom"
import API from "../../utils/API";

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const {username, email, password} = formData;

    const onChange = (event) => setFormData({...formData, [event.target.name]: event.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        API.register(username, email, password);
    }

    return (
        <div>
            <div className={styles.register__form_wrapper}>
                <h1 className={styles.header__text}>Sign up</h1>
                <p className={styles.header__desc}>Welcome back! login with your data that you entered during
                    registration</p>
                <form className={styles.login__form} onSubmit={onSubmit}>
                    <input className={styles.input} type="text" name="username" placeholder="Username" required
                           onChange={onChange}/>
                    <input className={styles.input} type="email" name="email" placeholder="Email" required
                           onChange={onChange}/>
                    <input className={styles.input} type="password" name="password" placeholder="Password" required
                           onChange={onChange}/>
                    <button className={styles.btn__register} type='submit'>Register</button>
                </form>
                <p>Already a member? <a onClick={() => navigate('/login')} className={styles.login}>Log in</a></p>
            </div>
        </div>
    );
}

export default Register;