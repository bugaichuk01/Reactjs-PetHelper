import React from 'react';
import styles from "./UIButton.module.css";
import cn from 'classnames';

function UIButton({type, text, classes}) {
    return (
        <button className={cn(styles.btn, classes)} type={type}>{text}</button>
    );
}

export default UIButton;