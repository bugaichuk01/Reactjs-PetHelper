import React, {useCallback, useState} from 'react';
import useStyles from './ReportStyles';
import BasicInfo from "../../components/report/BasicInfo";
import UploadImage from "../../components/report/UploadImage";
import Details from "../../components/report/Details";
import postService from "../../_services/post.service";
import {Box, CircularProgress, Container} from "@mui/material";
import {Link} from "react-router-dom";
import SimpleAlert from "../../components/alerts/SimpleAlert";
import useFormData from "../../_hooks/useFormData";
import GoBack from "../../components/button/go-back/GoBack";


function Report() {
    const classes = useStyles();
    const [postImage, setPostImage] = useState('');
    const [status, setStatus] = useState(null);
    const {formData, setFormData, onChange} = useFormData({
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
        },
        castration: 'Неизвестно',
        age: 'Неизвестно',
        health: '',
        award: '-'
    })

    const sendFile = useCallback((id) => {
        const data = new FormData();
        data.append('file', postImage);
        data.append('id', id);

        postService.postImage(data);
    }, [postImage])

    const onSubmit = (e) => {
        setStatus('loading');
        e.preventDefault();
        postService.addReport(formData).then(r => {
            postImage &&
            sendFile(r.data.id);
            setStatus(r.status);
        })
            .catch(err => setStatus('error'));
    }
    return (
        <Container maxWidth={'md'}>

            <GoBack />
            {status === 'error' && (
                <React.Fragment>
                    <SimpleAlert
                        sx={{marginTop: '15px'}}
                        severity={'error'}
                        title={'Ошибка!'}
                        text={'Ваше объявление не было создано, повторите попытку позже.'}
                    />
                    <div style={{textAlign: 'center', marginTop: '10px'}}>
                        <Link to={'/'}>
                            Главная страница
                        </Link>
                    </div>
                </React.Fragment>
            )}
            {status === 'loading' && (
                <Box sx={{textAlign: 'center'}}>
                    <CircularProgress/>
                </Box>
            )}
            {status === 201 && (
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
            )}
            {status === null && (
                <form onSubmit={onSubmit}>
                    <BasicInfo onChange={onChange} classes={classes} formData={formData} setFormData={setFormData}/>
                    <UploadImage onChange={onChange} classes={classes} postImage={postImage}
                                 setPostImage={setPostImage}/>
                    <Details onChange={onChange} classes={classes} formData={formData} setFormData={setFormData}/>
                    <button className={classes.button} type={'submit'}>Опубликовать</button>
                </form>
            )}
        </Container>
    );
}

export default Report;