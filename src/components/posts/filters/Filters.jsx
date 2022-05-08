import React from 'react';
import {Box, Divider} from "@mui/material";
import useFormData from "../../../_hooks/useFormData";
import Display from "./display/Display";
import StatusControls from "./status-controls/StatusControls";
import InputFilters from "./input-filters/InputFilters";
import useStyles from "../PostsStyles";

function Filters({setDisplay, display}) {
    const classes = useStyles();
    const {formData, setFormData, onChange} = useFormData({
        status: '',
        species: '',
        breed: '',
        gender: ''
    })

    return (
        <React.Fragment>
            <Box className={classes.filterBox}>
                <Display setDisplay={setDisplay} display={display}/>
                <Divider sx={{marginTop: '10px'}} />
                <StatusControls formData={formData} setFormData={setFormData} />
                <Divider />
                <InputFilters formData={formData} setFormData={setFormData} onChange={onChange} />
            </Box>
        </React.Fragment>
    );
}

export default Filters;