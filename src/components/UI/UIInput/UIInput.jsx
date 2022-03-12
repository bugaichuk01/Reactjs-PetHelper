import React from 'react';
import styles from "./UIInput.module.css";
import cn from "classnames";

function UiInput({type, name, placeholder, onChange, src, classes}) {
    return (
        <div className={cn(styles.input__wrapper, classes)}>
            <img className={styles.icon} src={src} alt=""/>
            <input className={styles.input} type={type} name={name} placeholder={placeholder} required
                   onChange={onChange}/>
        </div>
    );
}

export default UiInput;