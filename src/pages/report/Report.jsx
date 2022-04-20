import React, {useCallback, useState} from 'react';
import Header from "../../components/header/Header";
import useStyles from './ReportStyles';
import BasicInfo from "../../components/report/BasicInfo";
import UploadImage from "../../components/report/UploadImage";
import Details from "../../components/report/Details";
import postService from "../../_services/post.service";


function Report() {
    const classes = useStyles();
    const [postImage, setPostImage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        status: '',
        species: 'Кошка',
        breed: '',
        gender: '',
        description: '',
        eventDate:  null,
        location:  '',
        /*castration: '',
        age: '',
        location:  '',
        city: '',
        cash: ''*/
    });
    const onChange = (event) => setFormData({...formData, [event.target.name]: event.target.value});

    const sendFile = useCallback((id) => {
        const data = new FormData();
        data.append('file', postImage);
        data.append('id', id);

        postService.postImage(data);
    }, [postImage])

    const onSubmit = (e) => {
        e.preventDefault();

        postService.addReport(formData).then(r => {
            postImage && sendFile(r.data.id);
        });

    }
    return (
        <div>
            <Header/>
            <form onSubmit={onSubmit}>
                <BasicInfo onChange={onChange} classes={classes} formData={formData} setFormData={setFormData}/>
                <UploadImage onChange={onChange} classes={classes} postImage={postImage} setPostImage={setPostImage}/>
                <Details onChange={onChange} classes={classes} formData={formData} setFormData={setFormData}/>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
}

export default Report;