import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        marginTop: '20px',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 10px 30px #CECECEFF'
    },
    button: {
        backgroundColor: '#21ba45',
        '&:hover': {
            backgroundColor: '#21ba45'
        },
        height: '48px',
        minHeight: '52px',
        color: '#fff',
        width: '30%',
        border: 'none',
        fontSize: '1rem',
        fontWeight: 600,
        margin: '0 auto',
        padding: '10px 0 10px 0',
        textTransform: 'none',
    },
    fileContainer: {
        display: "flex",
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        borderRadius: 10,
        marginTop: '10px'
    },
    map: {
        width: '100%',
        height: '500px',
        marginTop: '10px'
    }

});

export default useStyles;