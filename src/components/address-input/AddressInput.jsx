import React, {useCallback, useEffect, useState} from 'react';
import {Autocomplete} from "@mui/material";
import {TextField} from "@material-ui/core";
import mapService from "../../_services/map.service";
import debounce from 'lodash.debounce';

function AddressInput({address, coordinates, setCoordinates, setFormData, formData}) {
    const [places, setPlaces] = useState([]);
    const [locationDuplicate, setLocationDuplicate] = useState('');

    const onPlacesChange = (e) => {
        e.target.value.length >= 3 && mapService.searchLocation(e.target.value)
            .then(res => setPlaces(res.data.features));
    }

    useEffect(() => {
        coordinates && coordinates.length !== 0 && mapService.geocode(coordinates.reverse())
            .then(r =>
                setFormData({
                    ...formData,
                    address: {
                        address: `${r.data.response.GeoObjectCollection.featureMember[0].GeoObject.name}, ${r.data.response.GeoObjectCollection.featureMember[0].GeoObject.description}`,
                        x: coordinates[0].toString(),
                        y: coordinates[1].toString()
                    }
                }))
    }, [coordinates])

    const debouncedChangeHandler = useCallback(
        debounce(onPlacesChange, 300)
        , []);

    useEffect(() => {
        locationDuplicate && mapService.geocode(locationDuplicate)
            .then(r =>
                setCoordinates(r.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(str => {
                    return Number(str)
                }).reverse()));
    }, [locationDuplicate])

    const onPlacesConfirm = async (e, value) => setLocationDuplicate(value);

    return (
        <Autocomplete
            fullWidth
            id="free-solo-demo"
            value={address?.address}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            onChange={(e, value) => onPlacesConfirm(e, value)}
            options={places.map(item => (item?.properties?.description ? `${item?.properties?.description}, ` : '') + item?.properties?.name)}
            renderInput={(params) =>
                <TextField
                    variant={'outlined'}
                    value={address?.address}
                    required
                    onChange={debouncedChangeHandler}
                    name='location'
                    {...params}
                    label={'Адрес'}/>
            }
        />
    );
}

export default AddressInput;