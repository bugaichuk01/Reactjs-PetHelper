import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        marginTop: '20px',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 10px 30px #CECECEFF'
    },
    button: {
        backgroundColor: '#3f51b5',
        height: '48px',
        color: '#fff',
        width: '100%',
        border: 'none',
        fontSize: '1rem',
        fontWeight: 600,
        marginTop: 15,
        borderRadius: '10px',
        padding: '10px 0 10px 0',
        textTransform: 'none',
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