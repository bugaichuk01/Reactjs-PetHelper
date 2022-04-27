import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function ProfileCard({text, icon, link}) {
    return (
        <Card sx={{ maxWidth: 275, textAlign: 'center' }}>
            <CardContent>
                {icon}
                <Typography sx={{ mt: 1 }} color="text.secondary">
                    {text}
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                <Link to={`${link}`}>
                    <Button size="small">Перейти</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default ProfileCard;