import React from 'react';
import ReactDOM from 'react-dom/client';

// Importação das Páginas
import { Home } from './pages/Home';
import { Details } from './pages/Details'
import { SignIn } from './pages/Signin';
import { SignUp } from './pages/SignUp';
import { Profile } from './pages/Profile';

import { ThemeProvider } from 'styled-components'; // tema global da página
import theme from './styles/theme';
import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Profile />
        </ThemeProvider>
    </React.StrictMode>
);
