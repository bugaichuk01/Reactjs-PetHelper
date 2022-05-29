import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    map: {
        width: '1480px',
        height: '600px',
        "@media (max-width: 680px)": {
            width: '100%',
            height: '500px',
            padding: '20px 0 0 0'
        }
    }
});

export default useStyles;
