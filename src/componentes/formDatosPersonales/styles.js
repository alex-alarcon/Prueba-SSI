import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2),
  },

  formControl: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
