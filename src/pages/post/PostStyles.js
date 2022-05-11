import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    image: {
        width: '100% !important',
        boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)'
    },
    imageBox: {
        boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
        border: '1px solid #dbdbdb',
        padding: '10px 10px 20px 10px',
        marginBottom: '10px'
    },
    name: {
        textAlign: "center",
        marginTop: '10px',
        color: '#696969',
        fontFamily: 'Lobster, cursive !important'
    },
    status: {
        position: 'absolute',
        color: '#fff',
        fontWeight: 700,
        fontSize: '16px !important',
        textTransform: 'uppercase',
        marginTop: '20px',
        padding: '10px 20px 10px 20px',
    },
    container: {
        display: 'flex !important',
        justifyContent: 'space-between',
    },
    rightBar: {
        boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
        border: '1px solid #dbdbdb',
        padding: '0',
        margin: '20px 0 20px 20px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        height: 'max-content'
    },
    map: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '15px 15px 10px 15px',
    },
    mapPosition: {
        color: '#5d6769',
        padding: '0 15px 10px 15px',
        fontWeight: 'bolder',
    },
    mapText: {
        color: '#fff',
        fontSize: '18px !important',
        backgroundColor: '#1c576c',
        textAlign: 'center',
        padding: '5px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    },
    box: {
        padding: '20px 20px 20px 0',
        display: 'flex',
        maxWidth: '60%',

    },
    text: {
        color: '#001B2B !important',
        padding: '5px 5px 5px 0 !important',
    },
    button: {
        backgroundColor: '#e36f73',
        '&:hover' : {
            backgroundColor: '#e36f73'
        },
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
        padding: '5px 10px 5px 15px'
    },
    contactsForm: {
        borderRadius: '12px',
        marginTop: '10px'
    },
    postInfo: {
        padding: '20px'
    },
    headerButton: {
        backgroundColor: '#fbc866',
        color: '#000',
        marginLeft: "auto !important",
        '&:hover': {
            backgroundColor: '#fbc866'
        }
    }
});

export default useStyles;