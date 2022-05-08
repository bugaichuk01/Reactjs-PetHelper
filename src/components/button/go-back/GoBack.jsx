import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from "@mui/material";

function GoBack() {
    const navigate = useNavigate();
    return (
        <Button onClick={() => navigate(-1)}>{'< '} Назад</Button>
    );
}

export default GoBack;