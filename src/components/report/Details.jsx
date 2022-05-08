import React, {useState} from 'react';
import {
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
import {TextField} from "@material-ui/core";
import {DatePicker} from "@mui/lab";
import moment from "moment";
import YMap from "../ymap/YMap";
import AddressInput from "../address-input/AddressInput";
import {Placemark} from "react-yandex-maps";

function Details({onChange, classes, formData, setFormData}) {
    const {
        award,
        eventDate,
        address,
    } = formData;
    const [coordinates, setCoordinates] = useState([]);

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
                            value={award}
                            name='award'
                            label='Вознаграждение'
                            onChange={onChange}
                            endAdornment={<InputAdornment position="end">₽</InputAdornment>}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                   <AddressInput address={address} setFormData={setFormData} formData={formData} coordinates={coordinates} setCoordinates={setCoordinates} />
                </Grid>
            </Grid>
            <YMap
                setCoordinates={setCoordinates}
                classes={classes.map}
                defaultState={{center: [55.75, 37.57], zoom: 9}}
            >
                <Placemark geometry={coordinates}/>
            </YMap>
        </Container>
    );
}

export default Details;
