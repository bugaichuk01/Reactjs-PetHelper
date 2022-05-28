import React from 'react';
import {Map, YMaps} from "react-yandex-maps";

function YMap({setCoordinates, classes, children, defaultState}) {
    const onClickMap = (e) => setCoordinates(e.get('coords'));

    return (
        <YMaps>
            <Map
                onClick={setCoordinates && onClickMap}
                className={classes}
                defaultState={defaultState}
                modules={['control.ZoomControl', 'control.FullscreenControl']}
            >
                {children}
            </Map>
        </YMaps>
    );
}

export default YMap;

