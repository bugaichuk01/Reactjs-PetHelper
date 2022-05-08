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

const Header = () => {
    const {user} = useSelector(state => state.userReducer);
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const theme = useTheme();
    console.log(theme, value);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <React.Fragment>
            <header style={{marginBottom: '100px'}}>
                <AppBar sx={{background: "#063970"}}>
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
                                    indicatorColor="secondary"
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
                                            <Button sx={{marginLeft: "auto !important"}}
                                                    onClick={() => navigate('/profile')}
                                                    variant="contained">
                                                Профиль
                                            </Button>
                                        )
                                        : (
                                            <>
                                                <Button sx={{marginLeft: "auto !important"}}
                                                        onClick={() => navigate('/login')}
                                                        variant="contained">
                                                    Вход
                                                </Button>
                                                <Button sx={{marginLeft: "10px !important"}}
                                                        onClick={() => navigate('/register')}
                                                        variant="contained">
                                                    Регистрация
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