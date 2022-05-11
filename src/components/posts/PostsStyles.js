import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    box: {
        display: 'flex',
        "@media (max-width: 680px)": {
            flexDirection: 'column'
        }
    },
    filterBox: {
        flexDirection: 'vertical',
        width: '450px',
        "@media (max-width: 680px)": {
            width: '100%'
        },
        "@media (min-width: 680px)": {
            padding: '20px',
            marginBottom: '10px',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            borderRadius: '5px',
        }
    },
    imageList: {
        marginTop: '0',
        maxWidth: '1200px',
        "@media (max-width: 680px)": {
            maxWidth: '100%'
        }
    },
});

export default useStyles;