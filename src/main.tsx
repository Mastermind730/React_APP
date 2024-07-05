import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'; // Import Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Ensures consistent baseline styling */}
    <App />
  </ThemeProvider>
);
