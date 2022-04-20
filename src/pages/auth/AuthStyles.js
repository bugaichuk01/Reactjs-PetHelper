import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    logo: {
        maxWidth: 200,
        borderRadius: 25,
        margin: '50px 0 15px 0',
        boxShadow: '0 10px 30px rgba(64, 191, 255, 0.24)'
    },
    welcome: {
        color: '#223263',
        fontWeight: 700,
        letterSpacing: 0.5
    },
    description: {
        color: '#9098B1',
        fontWeight: 400,
        letterSpacing: 0.5,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#3f51b5',
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 600,
        marginTop: 15,
        padding: '10px 0 10px 0',
        textTransform: 'none',
    },
    divider: {
        marginTop: 20,
        backgroundColor: '#EBF0FF',
    },
    links: {
        color: '#9098B1',
        fontWeight: 400,
        letterSpacing: 0.5,
        marginTop: 15
    },
    link: {
        fontWeight: 700,
        letterSpacing: 0.5,
        color: '#3f51b5',
        textDecoration: 'none'
    }
});

export default useStyles;