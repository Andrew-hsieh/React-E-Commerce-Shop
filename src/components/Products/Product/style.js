import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    opacity: 1,
    cursor: 'pointer',
  },
  shadowImage: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  textContent: {
    padding: '8px 10px',
  },
}));
