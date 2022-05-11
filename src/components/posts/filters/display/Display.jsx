import React from 'react';
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

function Display({display, setDisplay}) {
    const switchHandler = (event, value) => {
        setDisplay(value);
    };

    return (
        <ToggleButtonGroup
            value={display}
            color="primary"
            exclusive
            onChange={switchHandler}
        >
            <ToggleButton value={true}>
                <LocationOnIcon />
            </ToggleButton>
            <ToggleButton value={false}>
                <ViewModuleIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default Display;