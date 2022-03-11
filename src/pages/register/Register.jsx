import React, {useState} from 'react';
import styles from './Register.module.css'
import {useNavigate} from "react-router-dom"
import API from "../../utils/API";
import UiInput from "../../components/UI/UIInput/UIInput";
import {useDispatch} from "react-redux";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const {username, email, password} = formData;
    console.log(formData)

    const onChange = (event) => setFormData({...formData, [event.target.name]: event.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        API.register(username, email, password);
        API.login(username, password, dispatch);
    }

    return (
        <div>
            <div className={styles.register__form_wrapper}>
                <h1 className={styles.header__text}>Sign up</h1>
                <p className={styles.header__desc}>Welcome back! login with your data that you entered during
                    registration</p>
                <form className={styles.login__form} onSubmit={onSubmit}>
                    <UiInput type='text' name='username' placeholder='Username' onChange={onChange} />
                    <UiInput type='email' name='email' placeholder='Email' onChange={onChange} />
                    <UiInput type='password' name='password' placeholder='Password' onChange={onChange} />
                    <button className={styles.btn__register} type='submit'>Register</button>
                </form>
                <p>Already a member? <span onClick={() => navigate('/login')} className={styles.login}>Log in</span></p>
            </div>
        </div>
    );
}

export default Register;