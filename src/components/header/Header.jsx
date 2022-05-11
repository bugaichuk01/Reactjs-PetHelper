import React, {useState} from "react";
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import DrawerComp from "./Drawer";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

const Header = () => {
    const {user} = useSelector(state => state.userReducer);
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
            <header style={{marginBottom: '100px'}}>
                <AppBar sx={{background: "#1c576c"}}>
                    <Toolbar sx={isMatch && {justifyContent: 'space-between'}}>
                        <PetsIcon sx={{transform: "scale(2) !important"}}/>
                        <Typography sx={isMatch ? {fontSize: "2rem", paddingLeft: "10% !important"} : {
                            fontSize: "2rem",
                            paddingLeft: "2% !important"
                        }}>
                            PetHelper
                        </Typography>
                        {isMatch ? (
                            <>
                                <DrawerComp/>
                            </>
                        ) : (
                            <>
                                <Tabs
                                    sx={{marginLeft: "auto !important"}}
                                    indicatorColor="primary"
                                    textColor="inherit"
                                    value={value}
                                    onChange={(e, value) => {
                                        setValue(value)
                                        navigate(`/${value}`)
                                    }}
                                >
                                    <Tab value='' label="Главная страница"/>
                                    <Tab value='report' label="Создать объявление"/>
                                    <Tab value='posts' label="Объявления"/>
                                    <Tab value='help' label="Помощь"/>
                                </Tabs>
                                {
                                    user
                                        ? (
                                            <Button sx={{
                                                marginLeft: "auto !important",
                                                backgroundColor: '#fbc866',
                                                color: '#000',
                                                fontWeight: 700,
                                                '&:hover': {
                                                    backgroundColor: '#fbc866'
                                                }
                                            }}
                                                    onClick={() => navigate('/profile')}
                                                    variant="contained">
                                                <AccountCircleRoundedIcon sx={{marginRight: '10px'}}/> Профиль
                                            </Button>
                                        )
                                        : (
                                            <>
                                                <Button sx={{
                                                    marginLeft: "auto !important",
                                                    backgroundColor: '#fbc866',
                                                    color: '#000',
                                                    fontWeight: 700,
                                                    '&:hover': {
                                                        backgroundColor: '#fbc866'
                                                    }
                                                }}
                                                        onClick={() => navigate('/login')}
                                                        variant="contained">
                                                    <LoginRoundedIcon sx={{marginRight: '10px'}}/>Вход
                                                </Button>
                                                <Button sx={{
                                                    marginLeft: "10px !important",
                                                    backgroundColor: '#fbc866',
                                                    color: '#000',
                                                    fontWeight: 700,
                                                    '&:hover': {
                                                        backgroundColor: '#fbc866'
                                                    }
                                                }}
                                                        onClick={() => navigate('/register')}
                                                        variant="contained">
                                                    <AppRegistrationRoundedIcon sx={{marginRight: '10px'}}/> Регистрация
                                                </Button>
                                            </>
                                        )
                                }
                            </>
                        )}
                    </Toolbar>
                </AppBar>
            </header>
        </React.Fragment>
    );
};

export default Header;