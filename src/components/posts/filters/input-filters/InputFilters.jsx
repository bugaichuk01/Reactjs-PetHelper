import React, {useEffect, useState} from 'react';
import {Autocomplete} from "@mui/material";
import {filterPosts} from "../../../../store/actions/posts";
import {TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import postService from "../../../../_services/post.service";

function InputFilters({formData, setFormData, onChange}) {
    const {filtered, posts} = useSelector(state => state.postsReducer);
    const [regions, setRegions] = useState([]);
    const dispatch = useDispatch();

    const mapItems = (arr, item) => {
        const array = arr.map(post => post[item]);
        return array.filter((post, pos) => array
            .indexOf(post) === pos);
    };

    useEffect(() => {
        postService.getRegions().then(r => setRegions(r.data))
    }, [regions])

    return (
        <React.Fragment>

            <Autocomplete
                sx={{margin: '10px'}}
                fullWidth
                id="free-solo-demo"
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onChange={(e, value) => {
                    setFormData({...formData, status: value});
                    dispatch(filterPosts({...formData, status: value}));
                }}
                value={formData.status}
                options={mapItems(posts, 'status').map(item => item)}
                renderInput={(params) =>
                    <TextField
                        value={formData.status}
                        onChange={onChange}
                        variant={'outlined'}
                        name='status'
                        {...params}
                        label="Статус"/>
                }
            />


            <Autocomplete
                sx={{margin: '10px'}}
                fullWidth
                id="free-solo-demo"
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onChange={(e, value) => {
                    setFormData({...formData, species: value});
                    dispatch(filterPosts({...formData, species: value}));
                }}
                value={formData.species}
                options={mapItems(posts, 'species').map(item => item)}
                renderInput={(params) =>
                    <TextField
                        value={formData.species}
                        onChange={onChange}
                        variant={'outlined'}
                        name='species'
                        {...params}
                        label="Вид"/>
                }
            />

            <Autocomplete
                sx={{margin: '10px'}}
                fullWidth
                id="free-solo-demo"
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onChange={(e, value) => {
                    setFormData({...formData, breed: value});
                    dispatch(filterPosts({...formData, breed: value}));
                }}
                value={formData.breed}
                options={mapItems(filtered, 'breed').map(item => item)}
                renderInput={(params) =>
                    <TextField
                        value={formData.breed}
                        onChange={onChange}
                        variant={'outlined'}
                        name='breed'
                        {...params}
                        label="Порода"/>
                }
            />

            <Autocomplete
                sx={{margin: '10px'}}
                fullWidth
                id="free-solo-demo"
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onChange={(e, value) => {
                    setFormData({...formData, address: {region: value}});
                    dispatch(filterPosts({...formData, address: {region: value}}));
                }}
                value={formData.address.region}
                options={regions}
                renderInput={(params) =>
                    <TextField
                        value={formData.address.region}
                        onChange={onChange}
                        variant={'outlined'}
                        name='region'
                        {...params}
                        label="Город"/>
                }
            />

            <Autocomplete
                sx={{margin: '10px'}}
                fullWidth
                id="free-solo-demo"
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onChange={(e, value) => {
                    setFormData({...formData, color: value});
                    dispatch(filterPosts({...formData, color: value}));
                }}
                value={formData.color}
                options={mapItems(posts, 'color').map(item => item)}
                renderInput={(params) =>
                    <TextField
                        value={formData.color}
                        onChange={onChange}
                        variant={'outlined'}
                        name='color'
                        {...params}
                        label="Цвет"/>
                }
            />

            <Autocomplete
                sx={{margin: '10px'}}
                fullWidth
                id="free-solo-demo"
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onChange={(e, value) => {
                    setFormData({...formData, gender: value});
                    dispatch(filterPosts({...formData, gender: value}));
                }}
                value={formData.gender}
                options={mapItems(posts, 'gender').map(item => item)}
                renderInput={(params) =>
                    <TextField
                        value={formData.gender}
                        onChange={onChange}
                        variant={'outlined'}
                        name='gender'
                        {...params}
                        label="Пол"/>
                }
            />

            <Autocomplete
                sx={{margin: '10px'}}
                fullWidth
                id="free-solo-demo"
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onChange={(e, value) => {
                    setFormData({...formData, age: value});
                    dispatch(filterPosts({...formData, age: value}));
                }}
                value={formData.age}
                options={mapItems(posts, 'age').map(item => item)}
                renderInput={(params) =>
                    <TextField
                        value={formData.age}
                        onChange={onChange}
                        variant={'outlined'}
                        name='age'
                        {...params}
                        label="Возраст"/>
                }
            />

            <Autocomplete
                sx={{margin: '10px'}}
                fullWidth
                id="free-solo-demo"
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onChange={(e, value) => {
                    setFormData({...formData, castration: value});
                    dispatch(filterPosts({...formData, castration: value}));
                }}
                value={formData.castration}
                options={mapItems(posts, 'castration').map(item => item)}
                renderInput={(params) =>
                    <TextField
                        fullWidth
                        value={formData.castration}
                        onChange={onChange}
                        variant={'outlined'}
                        name='castration'
                        {...params}
                        label="Стерелизован"/>
                }
            />

            <Autocomplete
                sx={{margin: '10px'}}
                fullWidth
                id="free-solo-demo"
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onChange={(e, value) => {
                    setFormData({...formData, health: value});
                    dispatch(filterPosts({...formData, health: value}));
                }}
                value={formData.health}
                options={mapItems(posts, 'health').map(item => item)}
                renderInput={(params) =>
                    <TextField
                        value={formData.health}
                        onChange={onChange}
                        variant={'outlined'}
                        name='health'
                        {...params}
                        label="Состояние"/>
                }
            />
        </React.Fragment>
    );
}

export default InputFilters;