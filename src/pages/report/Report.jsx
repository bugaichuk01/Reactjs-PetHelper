import React, {useState} from 'react';
import Header from "../../components/header/Header";
import styles from './Report.module.css'
import UiInput from "../../components/UI/UIInput/UIInput";

function Report() {
    const [report, setReport] = useState(true);

    return (
        <div>
            <Header/>
            <div>
                <div className={styles.select__wrapper}>
                    <button className={report ? styles.button__select_active : styles.button__select} onClick={() => setReport(true)}>I found a pet</button>
                    <button className={report ? styles.button__select : styles.button__select_active} onClick={() => setReport(false)}>I lost a pet</button>
                </div>
                {
                    report && (
                        <form className={styles.report__wrapper}>
                            <UiInput placeholder='Pet name (If known)' />
                            <UiInput placeholder='Last area seen' />
                            <UiInput placeholder='Pet breed' />
                            <UiInput placeholder='Pet gender' />
                            <UiInput placeholder='Description' />
                            <button className={styles.button__submit}>Submit</button>
                        </form>
                    )
                }

                {
                    !report && (
                        <form className={styles.report__wrapper}>
                            <UiInput placeholder='Pet name (If known)' />
                            <UiInput placeholder='Last area seen' />
                            <UiInput placeholder='Pet breed' />
                            <UiInput placeholder='Pet gender' />
                            <UiInput placeholder='Description' />
                            <button className={styles.button__submit}>Submit</button>
                        </form>
                    )
                }
            </div>
        </div>
    );
}

export default Report;