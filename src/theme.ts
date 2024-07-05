import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize primary color
    },
    secondary: {
      main: '#dc004e', // Customize secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Customize typography
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Customize button border radius
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '8px', // Customize margin for text fields
        },
      },
    },
  },
});

export default theme;
