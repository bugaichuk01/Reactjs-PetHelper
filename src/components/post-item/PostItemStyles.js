import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    listItem: {
        backgroundColor: '#3f51b5',
        borderRadius: '10px',
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
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        width: '100%',
        objectFit: "cover",
        height: '20vh'
    },
    imageSmall: {
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        width: '100%',
        objectFit: "cover",
/*        height: '10vh'*/
    },
});

export default useStyles;
