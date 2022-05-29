import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    box: {
        display: 'flex',
        flexDirection: 'column',
        "@media (max-width: 680px)": {
            flexDirection: 'column'
        }
    },
    inputBox: {
        padding: '10px',
        "@media (min-width: 680px)": {
            paddingRight: '10px',
        },
        marginBottom: '10px',
        display: 'flex',
        width: '100%'
    },
    filterBox: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'vertical',
        "@media (max-width: 680px)": {
            width: '100%'
        },
        "@media (min-width: 680px)": {
            marginBottom: '10px',
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
    button: {
        backgroundColor: '#21ba45',
        '&:hover': {
            backgroundColor: '#21ba45'
        },
        height: '48px',
        minHeight: '52px',
        color: '#fff',
        width: '10%',
        border: 'none',
        fontSize: '1rem',
        fontWeight: 600,
        marginTop: '10px',
        marginLeft: '10px',
        textTransform: 'none',
    },
});

export default useStyles;