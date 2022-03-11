import React from 'react';
import styles from "./UIInput.module.css";

function UiInput({type, name, placeholder, onChange, src}) {
    return (
        <div className={styles.input__wrapper}>
            <img className={styles.icon} src={src} alt=""/>
            <input className={styles.input} type={type} name={name} placeholder={placeholder} required
                   onChange={onChange}/>
        </div>
    );
}

export default UiInput;