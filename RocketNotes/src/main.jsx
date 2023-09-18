import React from 'react';
import ReactDOM from 'react-dom/client';

// Importação das Páginas
import { Routes } from './routes'; // react-router-dom, instalado via npm

import { ThemeProvider } from 'styled-components'; // tema global da página 
import GlobalStyles from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render( 
    <React.StrictMode>
        <ThemeProvider theme={theme}> {/* O <ThemeProvider> envelopa a aplicação, ele trás os temas setados por nós em theme.js */}
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    </React.StrictMode>
);
