import React, {useEffect, useState} from 'react';
import {
    Autocomplete,
    Container,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography
} from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {Button, TextField} from "@material-ui/core";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import axios from "axios";
import {DatePicker} from "@mui/lab";
import moment from "moment";


function Details({onChange, classes, formData, setFormData}) {
    const {
        cash,
        eventDate,
        location
    } = formData;
    const [places, setPlaces] = useState([]);
    const [locationDuplicate, setLocationDuplicate] = useState('');
    const [coordinates, setCoordinates] = useState([]); // user.location ????

    console.log(location + ' ---> ' + coordinates)
    useEffect(() => {
        const request = async () => {
            await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.REACT_APP_YANDEX_GEOCODER}&format=json&geocode=${coordinates.reverse()}`)
                .then(r => setFormData({
                    ...formData,
                    location: `${r.data.response.GeoObjectCollection.featureMember[0].GeoObject.name} ${r.data.response.GeoObjectCollection.featureMember[0].GeoObject.description}`
                }))
        }
        coordinates.length !== 0 && request();
    }, [coordinates])

    useEffect(() => {
        const request = async () => {
            await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.REACT_APP_YANDEX_GEOCODER}&format=json&geocode=${locationDuplicate}`)
                .then(r => setCoordinates(r.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(str => {
                    return Number(str)
                }).reverse()));
        }
        locationDuplicate && request();
    }, [locationDuplicate])

    const onPlacesChange = async (e) => {
        e.target.value.length >= 3 &&
        await axios.get(`https://search-maps.yandex.ru/v1/?apikey=${process.env.REACT_APP_YANDEX_SEARCH}&text=${e.target.value}&lang=ru_RU`)
            .then(res => setPlaces(res.data.features));
    }

    const onClickMap = async (e) => {
        setCoordinates(e.get('coords'));
        console.log(coordinates)
    }

    const onPlacesConfirm = async (e, value) => {
        setLocationDuplicate(value);
    }

    return (
        <Container maxWidth='md' sx={{marginTop: 5}} className={classes.container}>
            <Typography color={'#001B2B'} fontWeight={'500'}>Шаг 3: Дополнительные детали</Typography>
            <Grid marginTop={'2px'} container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Дата находки/пропажи"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={eventDate}
                            maxDate={new Date()}
                            onChange={(newValue) => {
                                setFormData({
                                    ...formData,
                                    eventDate: moment(newValue).format('MM-DD-yyyy')
                                });
                            }}
                            renderInput={(params) => <TextField required {...params} />}
                        />

                    </LocalizationProvider>
                </Grid>

                <Grid item xs={6}>
                    <FormControl variant="outlined">
                        <InputLabel>Вознаграждение</InputLabel>
                        <OutlinedInput
                            value={cash}
                            name='cash'
                            label='Вознаграждение'
                            onChange={onChange}
                            endAdornment={<InputAdornment position="end">₽</InputAdornment>}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Autocomplete
                        id="free-solo-demo"
                        value={location}
                        isOptionEqualToValue={(option, value) => option.value === value.value}
                        onChange={(e, value) => onPlacesConfirm(e, value)}
                        options={places.map(item => (item.properties.description ?  `${item.properties.description}, ` : '') + item.properties.name )}
                        renderInput={(params) =>
                            <TextField
                                variant={'outlined'}
                                value={location}
                                onChange={onPlacesChange}
                                name='location'
                                {...params}
                                label={'Адрес'}/>
                        }
                    />
                </Grid>
            </Grid>

            <YMaps>
                <Map onClick={onClickMap}
                     className={classes.map}
                     defaultState={{center: [55.75, 37.57], zoom: 9}} /* -> user.location*/>
                    <Placemark geometry={coordinates}/>
                </Map>
            </YMaps>

            <Button
                fullWidth
                className={classes.button}
                variant="contained"
                component="span"
                type='submit'
            >
                Опубликовать
            </Button>
        </Container>
    );
}

export default Details;
