import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { orange } from '@material-ui/core/colors';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';



import store from './redux/store';

import App from './components/App/App';


const theme = createTheme({
  palette: {
    primary: {
      main: '#181818',
    },
    secondary: {
      main: '#ff7961',
    },
  },
});


// <ThemeProvider theme={theme}>
// <CustomCheckbox />
// </ThemeProvider>

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Provider store={store}>
    <App />
  </Provider>
  </ThemeProvider>,
  document.getElementById('react-root'),
);
