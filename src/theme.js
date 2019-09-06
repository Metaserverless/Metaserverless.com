import { amber } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#121212',
    },
    primary: {
      main: amber[700],
    },
  },
});

export default theme;
