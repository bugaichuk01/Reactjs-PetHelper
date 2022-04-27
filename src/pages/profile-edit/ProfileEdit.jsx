import React, {useEffect, useState} from 'react';
import {TextField} from "@material-ui/core";
import Header from "../../components/header/Header";
import {Container, Divider} from "@mui/material";
import {useSelector} from "react-redux";
import userService from "../../_services/user.service";
import useStyles from "../report/ReportStyles";
import AddressInput from "../../components/address-input/AddressInput";
import YMap from "../../components/ymap/YMap";
import Typography from "@mui/material/Typography";
import SimpleAlert from "../../components/alerts/SimpleAlert";
import useFormData from "../../_hooks/useFormData";

function ProfileEdit() {
    const classes = useStyles();
    const {user} = useSelector(state => state.userReducer)
    const data = useFormData({
        name: user.name,
        email: user.email,
        mobileNumber: user.mobileNumber,
        address: user.address
    })
    const {formData, setFormData, onChange} = data;
    const [updated, setUpdated] = useState(false);
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            userService.getById(user.id).then(r => setCoordinates([r.data?.address?.y, r.data?.address?.x]))
        }, 1000);
        return () => clearTimeout(timer);
    }, [user.id])

    const onSubmit = (e) => {
        e.preventDefault();
        userService.edit(user.id, formData)
            .then(r => {
                userService.getById(user.id)
                    .then(r => {
                        localStorage.setItem("user", JSON.stringify(r.data));
                        setUpdated(true);
                    })
            })
    }

    return (
        <div>
            <Header/>
            <Container maxWidth={'md'}>
                <Typography sx={{color: 'text.primary', marginBottom: '5px'}} variant={'h4'}>Ваши данные</Typography>
                <Divider sx={{marginBottom: '25px'}}/>
                {
                    updated && (
                        <SimpleAlert
                            sx={{marginBottom: '20px', alignItems: 'center'}}
                            severity='success'
                            text={'Ваши данные были успешно обновлены.'}
                        />
                    )
                }
                <form onSubmit={onSubmit}>
                    <TextField
                        style={{marginBottom: '10px'}}
                        fullWidth
                        required
                        variant='outlined'
                        label='Ваше имя'
                        name='name'
                        onChange={onChange}
                        value={formData?.name}
                    />
                    <TextField
                        style={{marginBottom: '10px'}}
                        fullWidth
                        required
                        variant='outlined'
                        label='Ваш email'
                        name='email'
                        onChange={onChange}
                        value={formData?.email}
                    />
                    {/*<TextField
                        style={{marginBottom: '10px'}}
                        fullWidth
                        required
                        variant='outlined'
                        label='Ваш username'
                        name='username'
                        onChange={onChange}
                        value={formData?.username}
                    />*/}
                    <TextField
                        style={{marginBottom: '10px'}}
                        fullWidth
                        required
                        variant='outlined'
                        label='Ваш номер'
                        name='mobileNumber'
                        onChange={onChange}
                        value={formData?.mobileNumber}
                    />

                    <AddressInput address={formData?.address} setFormData={setFormData} formData={formData}
                                  coordinates={coordinates} setCoordinates={setCoordinates}/>

                    <YMap
                        geometry={coordinates}
                        setCoordinates={setCoordinates}
                        classes={classes.map}
                        defaultState={{center: [55.75, 37.57], zoom: 9}}
                    />

                    <button className={classes.button} type={'submit'}>
                        Обновить
                    </button>
                </form>
            </Container>
        </div>
    );
}

export default ProfileEdit;