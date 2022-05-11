import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {filterPosts} from "../../../../store/actions/posts";
import {useDispatch} from "react-redux";

function StatusControls({formData, setFormData}) {
    const dispatch = useDispatch();
    const statusChange = (event) => {
        setFormData({...formData, status: event?.target?.value});
        dispatch(filterPosts({...formData, status: event?.target?.value}))
    };

    return (
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Статус объявления</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={formData.status}
                onChange={statusChange}
            >
                <FormControlLabel value='' control={<Radio/>} label="Все объявления"/>
                <FormControlLabel value="Потерян" control={<Radio/>} label="Потерян"/>
                <FormControlLabel value="Найден" control={<Radio/>} label="Найден"/>
            </RadioGroup>
        </FormControl>
    );
}

export default StatusControls;