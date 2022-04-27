import React from 'react';
import {Alert, AlertTitle} from "@mui/material";

function SimpleAlert({title, text, sx, severity}) {
    return (
        <Alert sx={sx} severity={severity}>
            <AlertTitle>{title}</AlertTitle>
            {text}
        </Alert>
    );
}

export default SimpleAlert;