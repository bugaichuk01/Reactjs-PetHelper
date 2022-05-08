import React from 'react';
import Typography from "@mui/material/Typography";
import {Box, Container, Divider} from "@mui/material";
import ProfileCard from "../../components/profile-card/ProfileCard";
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GoBack from "../../components/button/go-back/GoBack";

function Profile() {
    return (
        <div>
            <Container>
                <GoBack />
                <Typography sx={{color: 'text.primary', marginBottom: '5px'}} variant={'h4'}>Ваш аккаунт</Typography>
                <Divider sx={{marginBottom: '25px'}}/>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <ProfileCard
                        text={'Просматривайте и управляйте вашими объявлениями'}
                        icon={<AssignmentIcon color={'disabled'} fontSize={'large'}/>}
                    />
                    <ProfileCard
                        text={'Редактируйте свой профиль и данные учетной записи'}
                        icon={<AccountCircleIcon color={'disabled'} fontSize={'large'}/>}
                        link={'/profile/edit'}
                    />
                    <ProfileCard
                        text={'Просмотр списка сохраненных отчетов'}
                        icon={<BookmarkIcon color={'disabled'} fontSize={'large'}/>}
                    />
                </Box>
            </Container>
        </div>
    );
}

export default Profile;