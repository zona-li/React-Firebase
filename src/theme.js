import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { cyan, teal } from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: cyan,
  },
  typography: {
    fontFamily: [
      'Dosis',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  status: {
    blue: 'steelblue',
  },
});

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  leftSpacing: {
    marginLeft: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
}));

export { theme, useStyles };
