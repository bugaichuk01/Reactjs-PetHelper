import React, {useState} from 'react';
import {
    Box, Container,
    TextField
} from "@material-ui/core";
import useStyles from './AuthStyles';
import useFormData from "../../_hooks/useFormData";
import {Button} from "@mui/material";
import authService from "../../_services/auth.service";
import SimpleAlert from "../../components/alerts/SimpleAlert";

const ForgetPassword = () => {
    const classes = useStyles();
    const [error, setError] = useState(false);
    const {formData, onChange} = useFormData({
        email: ''
    })
    const onSubmit = (e) => {
        e.preventDefault();
        setError(false)
        authService.forget(formData.email)
            .catch(err => setError(true));
    }

    return (
        <Container maxWidth='sm'>
            <Box textAlign={'center'}>
                <form onSubmit={onSubmit}>
                    <TextField
                        fullWidth
                        required
                        variant='outlined'
                        label='Почта'
                        name='email'
                        type='email'
                        onChange={onChange}
                    />

                   {
                        error &&
                        <SimpleAlert
                            sx={{marginTop: '10px', textAlign: 'start'}}
                            severity='error'
                            title={'Ошибка'}
                            text={'Введенная почта не существует.'}
                        />
                    }

                    <Button
                        fullWidth
                        variant="contained"
                        className={classes.button}
                        type='submit'
                    >
                        Отправить
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default ForgetPassword;
