import React from 'react';
import {Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {TextField} from "@material-ui/core";
import {animalsArray, animalsObject} from "../../_constants";
import {Autocomplete} from '@mui/material';

function BasicInfo({onChange, classes, formData, setFormData}) {
    const {
        status,
        species,
        breed,
        gender,
        castration,
        age,
        health
    } = formData;

    return (
        <Container maxWidth='md' className={classes.container}>
            <Typography color={'#001B2B'} fontWeight={'500'}>Шаг 1: Основная информация</Typography>
            <TextField
                variant='outlined'
                label='Имя питомца (Если известно)'
                name='name'
                onChange={onChange}
            />
            <Box sx={{width: '100%'}}>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Grid item xs={4}>
                        <FormControl>
                            <InputLabel>Статус</InputLabel>
                            <Select
                                name='status'
                                label="Статус"
                                required
                                value={status}
                                onChange={onChange}
                            >
                                <MenuItem value={'Потерян'}>Потерян</MenuItem>
                                <MenuItem value={'Найден'}>Найден</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <Autocomplete
                            id="free-solo-demo"
                            value={species}
                            isOptionEqualToValue={(option, value) => option.value === value.value}
                            onChange={(e, value) => setFormData({...formData, species: value})}
                            options={animalsArray.map(item => item)}
                            renderInput={(params) =>
                                <TextField
                                    variant={'outlined'}
                                    value={species}
                                    required
                                    onChange={onChange}
                                    name='species'
                                    {...params}
                                    label="Вид"/>
                            }
                        />
                    </Grid>
                    <Grid item xs={4}>
                        {((species !== 'Кошка') && (species !== 'Собака'))
                            ? <TextField
                                disabled={!species}
                                variant='outlined'
                                label={species ? 'Порода' : 'Сперва выберите вид'}
                                required
                                name='breed'
                                value={breed}
                                onChange={onChange}
                            />
                            :
                            <Autocomplete
                                disabled={!species}
                                id="free-solo-demo"
                                value={breed ?? ""}
                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                onChange={(e, value) => setFormData({...formData, breed: value})}
                                options={species && animalsObject[species].breeds.map(item => item)}
                                renderInput={(params) =>
                                    <TextField
                                        variant={'outlined'}
                                        value={species}
                                        required
                                        onChange={onChange}
                                        name='breed'
                                        {...params}
                                        label={species ? 'Порода' : 'Сперва выберите вид'}/>
                                }
                            />
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel>Пол</InputLabel>
                            <Select
                                name='gender'
                                label="Пол"
                                required
                                value={gender}
                                onChange={onChange}
                            >
                                <MenuItem value={'Мужской'}>Мужской</MenuItem>
                                <MenuItem value={'Женский'}>Женский</MenuItem>
                                <MenuItem value={'Неизвестно'}>Я не знаю</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel>Стерилизован</InputLabel>
                            <Select
                                name='castration'
                                required
                                label="Стерилизован"
                                value={castration}
                                onChange={onChange}
                            >
                                <MenuItem value={'Да'}>Да</MenuItem>
                                <MenuItem value={'Нет'}>Нет</MenuItem>
                                <MenuItem value={'Неизвестно'}>Я не знаю</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel>Возраст</InputLabel>
                            <Select
                                name='age'
                                required
                                label="Возраст"
                                fullWidth
                                value={age}
                                onChange={onChange}
                            >
                                <MenuItem value={'Неизвестно'}>Я не знаю</MenuItem>
                                <MenuItem value={'До 1 года'}>До 1 года</MenuItem>
                                <MenuItem value={'От 1 до 3 лет'}>От 1 до 3 лет</MenuItem>
                                <MenuItem value={'От 3 до 7 лет'}>От 3 до 7 лет</MenuItem>
                                <MenuItem value={'Старше 7 лет'}>Старше 7 лет</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel>Состояние</InputLabel>
                            <Select
                                name='health'
                                fullWidth
                                required
                                label="Состояние"
                                value={health}
                                onChange={onChange}
                            >
                                <MenuItem value={'Здоров'}>Здоров</MenuItem>
                                <MenuItem value={'Болен'}>Болен</MenuItem>
                                <MenuItem value={'Ранен'}>Ранен</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            label='Описание'
                            name='description'
                            onChange={onChange}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default BasicInfo;