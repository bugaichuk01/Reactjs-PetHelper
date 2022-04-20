import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    imageList: {
        maxWidth: 1200,
        marginTop: 10
    },
    listItem: {
        backgroundColor: '#3f51b5',
        borderRadius: '10px',
        margin: '10px'
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
        height: '10vh'
    }
});

export default useStyles;
