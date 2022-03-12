import React, {useState} from 'react';
import styles from './Register.module.css'
import {useNavigate} from "react-router-dom"
import UiInput from "../../components/UI/UIInput/UIInput";
import {useDispatch} from "react-redux";
import {register} from "../../store/actions/user";
import usernameIcon from "../../images/user.svg";
import passwordIcon from "../../images/password.svg";
import emailIcon from "../../images/message.svg";
import UIButton from "../../components/UI/UIButton/UIButton";

function Register() {
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const navigate = useNavigate();
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
        <div className={styles.register__wrapper}>
            <div className={styles.register__form_wrapper}>
                <img className={styles.image} src={require(`../../images/logoRegistration.jpeg`)} alt=""/>
                <span className={styles.register__welcome}>Let's Get Started</span>
                <p className={styles.register__desc}>Create an new account</p>

                <form className={styles.register__form} onSubmit={onSubmit}>
                    <UiInput
                        classes={styles.register__input}
                        src={usernameIcon} type='text'
                        name='username'
                        placeholder='Full Name'
                        onChange={onChange} />
                    <UiInput
                        classes={styles.register__input}
                        src={emailIcon}
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        onChange={onChange} />
                    <UiInput
                        classes={styles.register__input}
                        src={passwordIcon}
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={onChange} />
                    <UiInput
                        classes={styles.register__input}
                        src={passwordIcon}
                        type='password'
                        name='passwordConfirm'
                        placeholder='Password Again'
                        onChange={onChange} />

                    {error && <span className={styles.error__text}>The Confirm Password confirmation does not match</span>}
                    <UIButton classes={styles.btn__register} type='submit' text='Sign up' />
                </form>

                <p className={styles.register__desc}>Have a account? <span onClick={() => navigate('/login')} className={styles.register}>Sign in</span></p>
            </div>
        </div>
    );
}

export default Register;