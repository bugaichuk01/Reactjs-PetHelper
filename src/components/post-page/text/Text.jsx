import React from 'react';
import {Typography} from "@mui/material";
import useStyles from "../../../pages/post/PostStyles";

function Text({text, value}) {
    const classes = useStyles();
    return (
        <Typography className={classes.text} variant={'subtitle1'}>
            <strong>{text}</strong> {value}
        </Typography>
    );
}

export default Text;