import React from 'react';
import styles from "./UIInput.module.css";

function UiInput({type, name, placeholder, onChange}) {
    return (
        <input className={styles.input} type={type} name={name} placeholder={placeholder} required
               onChange={onChange}/>
    );
}

export default UiInput;