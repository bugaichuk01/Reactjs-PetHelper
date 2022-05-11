import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    map: {
        width: '100%',
        padding: '0 10px 10px 10px',
        "@media (max-width: 680px)": {
            padding: '20px 0 0 0'
        }
    }
});

export default useStyles;
