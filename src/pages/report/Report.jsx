import React, {useCallback, useState} from 'react';
import Header from "../../components/header/Header";
import useStyles from './ReportStyles';
import BasicInfo from "../../components/report/BasicInfo";
import UploadImage from "../../components/report/UploadImage";
import Details from "../../components/report/Details";
import postService from "../../_services/post.service";
import {Container} from "@mui/material";
import {Link} from "react-router-dom";
import SimpleAlert from "../../components/alerts/SimpleAlert";
import useFormData from "../../_hooks/useFormData";


function Report() {
    const classes = useStyles();
    const [postImage, setPostImage] = useState('');
    const [status, setStatus] = useState(null);
    const data = useFormData({
        name: '-',
        status: '',
        species: 'Кошка',
        breed: '',
        gender: '',
        description: '-',
        eventDate: null,
        address: {
            address: '',
            x: '',
            y: ''
        }
        /*
        castration: 'Неизвестно',
        age: '-',
        cash: '-'
        */
    })
    const {formData, setFormData, onChange} = data;

    const sendFile = useCallback((id) => {
        const data = new FormData();
        data.append('file', postImage);
        data.append('id', id);

        postService.postImage(data);
    }, [postImage])

    const onSubmit = (e) => {
        e.preventDefault();
        postService.addReport(formData).then(r => {
            postImage &&
            sendFile(r.data.id);
            setStatus(r.status);
        });
    }
    return (
        <Container maxWidth={'md'}>
            <Header/>

            {
                status === 201
                    ? (
                        <React.Fragment>
                            <SimpleAlert
                                sx={{marginTop: '50px'}}
                                severity={'success'}
                                title={'Объявление создано!'}
                                text={'Ваше объявление создано, вы можете просмотреть его в профиле и на главной странице сайта.'}
                            />
                            <div style={{textAlign: 'center', marginTop: '10px'}}>
                                <Link to={'/'}>
                                    Главная страница
                                </Link>
                            </div>
                        </React.Fragment>
                    )
                    : (
                        <form onSubmit={onSubmit}>
                            <BasicInfo onChange={onChange} classes={classes} formData={formData} setFormData={setFormData}/>
                            <UploadImage onChange={onChange} classes={classes} postImage={postImage}
                                         setPostImage={setPostImage}/>
                            <Details onChange={onChange} classes={classes} formData={formData} setFormData={setFormData}/>
                            <button className={classes.button} type={'submit'}>Опубликовать</button>
                        </form>
                    )
            }
        </Container>
    );
}

export default Report;