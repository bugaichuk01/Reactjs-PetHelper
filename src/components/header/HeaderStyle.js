import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    list : {
        width : 200,
    },
    logoLarge: {
        flexGrow: 1,
        color: 'white',
        textDecoration: 'none',
        fontWeight: 700,
        fontSize: 20
    },
    linkLarge : {
        paddingRight : 30,
        color: 'white',
        textDecoration: 'none'
    },
    logoSmall: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 700,
        fontSize: 20
    },
    linkSmall : {
        paddingRight : 30,
        color: '#0077B5',
        textDecoration: 'none'
    },
    sideBarIcon : {
        padding : 0,
        color : "white",
        cursor : "pointer",
    },
    menuItem: {
        textDecoration: 'none',
        color: '#505050'
    },
    header: {
        marginBottom: '80px'
    }
});

export default useStyles;
