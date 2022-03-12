import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header";
import styles from './Report.module.css'
import UiInput from "../../components/UI/UIInput/UIInput"

function Report() {
    const [report, setReport] = useState(true);
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        gender: '',
        name: '',
        breed: '',
        description: ''
    });

    const {gender, name, breed, description} = formData;

    const onChange = (event) => setFormData({...formData, [event.target.name]: event.target.value});

    const onSubmit = async (e) => {
      e.preventDefault();
      /*await API.addReport(status, gender, name, breed, description);
      setFormData({
          gender: '',
          name: '',
          breed: '',
          description: ''
      });*/
    }

    useEffect(() => {
        report ? setStatus('found') : setStatus('lost') ;
    }, [report])

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
                        <form className={styles.report__wrapper} onSubmit={onSubmit}>
                            <UiInput value={formData.name} name='name' placeholder='Pet name (If known)' onChange={onChange} />
                            {/*<UIButton placeholder='Last area seen' />*/}
                            <UiInput value={formData.breed} name='breed'  placeholder='Pet breed' onChange={onChange}  />
                            <UiInput value={formData.gender} name='gender'  placeholder='Pet gender' onChange={onChange}  />
                            <UiInput value={formData.description} name='description'  placeholder='Description' onChange={onChange}  />
                            <button className={styles.button__submit}>Submit</button>
                        </form>
                    )
                }

                {
                    !report && (
                        <form className={styles.report__wrapper}>
                            <UiInput value={formData.name} name='name' placeholder='Pet name (If known)' onChange={onChange} />
                            {/*<UIButton placeholder='Last area seen' />*/}
                            <UiInput value={formData.breed} name='breed'  placeholder='Pet breed' onChange={onChange}  />
                            <UiInput value={formData.gender} name='gender'  placeholder='Pet gender' onChange={onChange}  />
                            <UiInput value={formData.description} name='description'  placeholder='Description' onChange={onChange}  />
                            <button className={styles.button__submit}>Submit</button>
                        </form>
                    )
                }
            </div>
        </div>
    );
}

export default Report;