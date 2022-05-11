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
                    <Button sx={{
                        textTransform: 'none',
                        padding: '5px 20px 5px 20px',
                        backgroundColor: '#fbc866',
                        color: '#000',
                        '&:hover': {
                            backgroundColor: '#fbc866'
                        }
                    }}>Перейти</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default ProfileCard;