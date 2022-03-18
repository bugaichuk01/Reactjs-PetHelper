import React from 'react';
import styles from './Header.module.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className={styles.header}>
            <Link to='/'>Home</Link>
            <Link to='/'>How it works</Link>
            <Link to='/'>Lost/Found</Link>
            <Link to='/report'>Report pet</Link>
        </div>

    );
}

export default Header;