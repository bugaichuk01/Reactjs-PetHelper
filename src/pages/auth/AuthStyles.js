import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    logo: {
        maxWidth: 200,
        borderRadius: 25,
        margin: '50px 0 15px 0',
        boxShadow: '0 10px 30px rgba(64, 191, 255, 0.24)'
    },
    welcome: {
        color: '#223263',
        fontWeight: 700,
        letterSpacing: 0.5
    },
    description: {
        color: '#9098B1',
        fontWeight: 400,
        letterSpacing: 0.5,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#40BFFF',
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 600,
        marginTop: 15,
        padding: '10px 0 10px 0',
        textTransform: 'none',
        boxShadow: 'none',
    },
    divider: {
        marginTop: 20,
        backgroundColor: '#EBF0FF',
    },
    links: {
        color: '#9098B1',
        fontWeight: 400,
        letterSpacing: 0.5,
        marginTop: 15
    },
    link: {
        fontWeight: 700,
        letterSpacing: 0.5,
        color: '#40BFFF',
    }
});

export default useStyles;


/*
.login__form_wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

.login__form {
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.login__input {
    margin-bottom: 10px;
}

.error__text {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    align-self: flex-start;
    letter-spacing: 0.5px;
    color: #FB7181;
    padding-left: 2px;
    margin-bottom: 10px;
}

.login__helper {
    margin-bottom: 15px;
}

.btn__login {
    margin-top: 5px;
}

.register {
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    /!* identical to box height, or 18px *!/
    text-align: center;
    letter-spacing: 0.5px;
    color: #40BFFF;
}

.login__cross {
    width: 100%;
    display: flex;
    align-items: center;
}

.cross__text {
    text-transform: uppercase;
    color: #9098B1;
    padding: 25px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    /!* identical to box height, or 21px *!/
    letter-spacing: 0.005em;
}

.hr {
    width: 100%;
    height: 2px;
    background-color: #EBF0FF;
}

.icon {
    font-size: 28px !important;
}*/
