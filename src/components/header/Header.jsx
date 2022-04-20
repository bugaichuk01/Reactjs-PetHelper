import * as React from 'react';
import {
    AppBar, Grid, List, ListItem, SwipeableDrawer,
    Toolbar,
    Typography
} from "@material-ui/core";
import {useState} from "react";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import {Button, Menu, MenuItem} from "@mui/material";
import useStyles from './HeaderStyle';
import useScreenSize from "../../_hooks/useScreenSize";
import {useSelector} from "react-redux";

const Header = () => {
    const classes = useStyles();
    const drawerActivate = useScreenSize();
    const {user} = useSelector(state => state.userReducer);
    const [drawer, setDrawer] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Small Screens
    const createDrawer = () => {
        return (
            <header className={classes.header}>
                <AppBar>
                    <Toolbar>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <MenuIcon
                                className={classes.sideBarIcon}
                                onClick={() => {
                                    setDrawer(true)
                                }}/>

                            <Link className={classes.logoSmall} to='/'>PetHelper</Link>
                            <Typography color="inherit" variant="headline"/>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    open={drawer}
                    onClose={() => {
                        setDrawer(false)
                    }}
                    onOpen={() => {
                        setDrawer(true)
                    }}>

                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => {
                            setDrawer(false)
                        }}
                        onKeyDown={() => {
                            setDrawer(false)
                        }}>

                        <List className={classes.list}>
                            <ListItem button divider>
                                <Link className={classes.linkSmall} to='/'>Lost/Found</Link>
                            </ListItem>
                            <ListItem button divider>
                                <Link className={classes.linkSmall} to='/'>How it works</Link>
                            </ListItem>
                            <ListItem button divider>
                                <Link className={classes.linkSmall} to='/'>Report Pet</Link>
                            </ListItem>
                            <ListItem button divider>
                                {user
                                    ? <Link className={classes.linkSmall} to='/'>Profile</Link>
                                    : <Link className={classes.linkSmall} to='/login'>Join/Login</Link>
                                }
                            </ListItem>
                        </List>

                    </div>
                </SwipeableDrawer>

            </header>
        );
    }

    //Larger Screens
    const destroyDrawer = () => {
        return (
            <header className={classes.header}>
                <AppBar>
                    <Toolbar>
                        <Link className={classes.logoLarge} to='/'>PetHelper</Link>

                        <div>
                            <Button
                                sx={{
                                    fontSize: 16,
                                    textTransform: 'none',
                                    color: '#fff',
                                    fontWeight: 400,
                                    padding: '0 30px 0 0',
                                    lineHeight: 0
                                }}
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                Объявления
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link className={classes.menuItem} to='/posts'>
                                        Все объявления
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link className={classes.menuItem} to='/report'>
                                        Создать объявление
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </div>

                        <Link className={classes.linkLarge} to='/'>Помощь</Link>
                        {user
                            ? <Link className={classes.linkLarge} to='/'>Профиль</Link>
                            : <Link className={classes.linkLarge} to='/login'>Вход/Регистрация</Link>
                        }
                    </Toolbar>
                </AppBar>
            </header>
        )
    }

    return (
        <div>
            {drawerActivate ? createDrawer() : destroyDrawer()}
        </div>
    );
};
export default Header;