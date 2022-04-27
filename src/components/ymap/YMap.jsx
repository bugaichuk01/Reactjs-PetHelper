import React from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";

function YMap({setCoordinates, classes, geometry, defaultState}) {
    const onClickMap = (e) => setCoordinates(e.get('coords'));

    return (
        <YMaps>
            <Map onClick={onClickMap}
                 className={classes}
                 defaultState={defaultState}>
                <Placemark geometry={geometry}/>
            </Map>
        </YMaps>
    );
}

export default YMap;