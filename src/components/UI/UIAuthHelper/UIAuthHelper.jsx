import React from 'react';
import styles from "./UIAuthHelper.module.css";
import cn from "classnames";

function UIAuthHelper({src, text, classes}) {
    return (
        <button className={cn(styles.btn, classes)} type='button'>
            <img src={src} alt=""/>
            <span className={styles.btn__text}>{text}</span>
        </button>
    );
}

export default UIAuthHelper;