import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    position: 'relative',
  },
  media: {
    [theme.breakpoints.down('sm')]: {
      width: 124,
      height: 90,
    },
    width: 138,
    height: 100,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 0,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '20px',
  },
  cartActions: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },

  btn: {
    cursor: 'pointer',
    fontWeight: 1000,
    position: 'absolute',
    right: 5,
    top: 5,
  },
}));
