import {Container, Input, Typography, Button} from "@mui/material";
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';

function UploadImage({setPostImage, classes, postImage}) {
    return (
        <Container maxWidth='md' sx={{marginTop: 5}} className={classes.container}>
            <Typography color={'#001B2B'} fontWeight={'500'}>Шаг 2: Загрузка фото</Typography>
            <Typography marginTop={'10px'} textAlign={'center'} variant={'body2'}>Добавление фотографии приведет
                к большему
                количеству просмотров для вашего объявления и поможет людям узнать вашего питомца.</Typography>
            <Typography textAlign={'center'} color={'#000'} fontWeight={'500'} variant={'subtitle1'}>Обратите
                внимание:</Typography>
            <Typography textAlign={'center'} variant={'body2'}>Лучше, если вы попытаетесь загрузить фотографию
                хорошего качества. Старайтесь избегать фильтров на фотографии.</Typography>
            {
                postImage && (
                    <img className={classes.image} src={URL.createObjectURL(postImage)} alt=""/>
                )
            }
            <label className={classes.fileContainer} htmlFor="contained-button-file">
                <Input
                    id="contained-button-file"
                    sx={{display: 'none !important'}}
                    accept="image/*"
                    onChange={(e) =>
                        setPostImage(e.target.files[0])
                    }
                    name='file'
                    multiple
                    type="file"/>
                <Button
                    sx={{marginTop: '15px !important'}}
                    fullWidth
                    className={classes.button}
                    variant="contained"
                    component="span"
                >
                    <PhotoCameraRoundedIcon sx={{marginRight: '15px'}} />Выбрать фото
                </Button>
            </label>
        </Container>
    );
}

export default UploadImage;