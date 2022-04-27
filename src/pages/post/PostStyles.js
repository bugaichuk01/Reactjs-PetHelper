import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    image: {
        width: '100% !important',
        borderRadius: '10px !important',
    },
    container: {
        display: 'flex !important',
        justifyContent: 'space-between'
    },
    rightBar: {
        padding: '20px !important',
        width: '60% !important',
        margin: '20px 0 0 20px !important'
    },
    map: {
        width: '100%',
        height: '45%',
    },
    mapText: {
        color: '#fff',
        fontSize: '18px !important',
        backgroundColor: '#3f51b5',
        textAlign: 'center',
        padding: '5px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    },
    box: {
        marginTop: '20px',
        padding: '20px',
        maxWidth: '60%'
    },
    text: {
        color: '#001B2B !important',
        fontSize: '18px !important',
        padding: '5px 5px 5px 0 !important',
    },
    button: {
        backgroundColor: '#7038B3',
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 600,
        marginTop: '10px',
        marginLeft: '10px',
        textTransform: 'none',
    },
    contacts: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 10px 10px 15px'
    },
    contactsForm: {
        borderRadius: '12px',
        marginTop: '10px'
    }
});

export default useStyles;