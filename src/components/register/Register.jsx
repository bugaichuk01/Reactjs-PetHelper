import React, {useState} from 'react';
import styles from './Login.module.css'
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const {username, password} = formData;

    const onChange = (event) => setFormData({...formData, [event.target.name]: event.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', {
                "username": username,
                "password": password
            }).then(response => {
                if (response.data.Token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className={styles.login__form_wrapper}>
                <h1 className={styles.header__text}>Log in to PetHelper</h1>
                <p className={styles.header__desc}>Welcome back! login with your data that you entered during
                    registration</p>
                <form className={styles.login__form} onSubmit={onSubmit}>
                    <input className={styles.input} type="text" name="username" placeholder="Username" required
                           onChange={onChange}/>
                    <input className={styles.input} type="password" name="password" placeholder="Password" required
                           onChange={onChange}/>
                    <button className={styles.btn__login} type='submit'>Login</button>
                </form>
                <p>Don't have an account? <a onClick={() => navigate('/register')} className={styles.register}>Register</a></p>
            </div>
        </div>
    );
}

export default Login;