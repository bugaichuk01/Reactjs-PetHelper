import {useEffect, useState} from "react";

function useScreenSize() {
    const [drawerActivate, setDrawerActivate] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 600) {
            setDrawerActivate(true);
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                setDrawerActivate(true);
            } else {
                setDrawerActivate(false);
            }
        });
    }, []);

    return drawerActivate;
}

export default useScreenSize;