import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  topSpace: {
    [theme.breakpoints.up('xs')]: {
      marginTop: '18%',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '10%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '8%',
    },
  },
  itemContainer: {
    backgroundColor: 'blue',
  },
  title: {
    marginTop: '20%',
  },
  emptyButton: {
    marginRight: '20px',
    [theme.breakpoints.up('xs')]: {
      width: '120px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '150px',
    },
  },
  checkoutButton: {
    [theme.breakpoints.up('xs')]: {
      width: '120px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '150px',
    },
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    display: 'flex',
    margin: '5% 0 10%',
    width: '95%',
  },
  btnContainer: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around',
      padding: '10px',
    },
  },
}));
