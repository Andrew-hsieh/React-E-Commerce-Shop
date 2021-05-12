import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    [theme.breakpoints.down('sm')]: {
      width: 124,
      height: 90,
    },
    width: 138,
    height: 100,
  },
}));
