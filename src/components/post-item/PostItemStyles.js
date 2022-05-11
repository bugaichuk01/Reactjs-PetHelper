import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    listItem: {
        textAlign: 'center',
        boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
        border: '1px solid #dbdbdb',
        borderRadius: '5px',
        margin: '0 10px 10px 10px',
        "@media (max-width: 680px)": {
            marginTop: '10px',
            width: '100%%'
        }
    },
    itemBar: {
        padding: '10px',
        color: '#fff'
    },
    image: {
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        width: '100%',
        objectFit: "cover",
        height: '20vh'
    },
    topText: {
        color: '#4183c4',
        fontWeight: 600
    },
    bottomText: {
        color: '#5d6769'
    },
    imageSmall: {
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        width: '100%',
        objectFit: "cover",
    },
    status: {
        position: 'absolute',
        color: '#fff',
        fontWeight: 700,
        fontSize: '11px !important',
        marginTop: '10px',
        padding: '5px 10px 5px 10px',
    },
});

export default useStyles;
