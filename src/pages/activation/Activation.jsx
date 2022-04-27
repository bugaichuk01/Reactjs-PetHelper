import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import authService from "../../_services/auth.service";
import {Container} from "@mui/material";
import SimpleAlert from "../../components/alerts/SimpleAlert";

function Activation() {
    const {code} = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        authService.activate(code)
            .then(r => setError(r.data))
    }, [code])

    return (
        <Container>
            {
                error
                    ? (
                        <React.Fragment>
                            <SimpleAlert
                                sx={{marginTop: '50px'}}
                                severity={'success'}
                                title={'Выполнено!'}
                                text={'Ваша учетная запись подтверждена, можете продолжить работу на сайте.'}
                            />
                            <div style={{textAlign: 'center', marginTop: '10px'}}>
                                <Link to={'/login'}>
                                    Войти в аккаунт
                                </Link>
                            </div>
                        </React.Fragment>
                    )
                    : (
                        <SimpleAlert
                            sx={{marginTop: '50px'}}
                            severity={'error'}
                            title={'Упс, что-то пошло не так'}
                            text={'Данные обработаны некорректно, повторите попытку позже.'}
                        />
                    )
            }
        </Container>
    );
}

export default Activation;