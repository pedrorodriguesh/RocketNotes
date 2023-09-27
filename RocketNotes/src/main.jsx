import React from 'react';
import ReactDOM from 'react-dom/client';

// Importação das Páginas
import { Routes } from './routes'; // react-router-dom, instalado via npm

import { ThemeProvider } from 'styled-components'; // Definição dos temas e cores gerais
import GlobalStyles from './styles/global'; // CSS Global da página, background-color, reset css, font-family, etc.
import theme from './styles/theme';

import { AuthProvider } from './hooks/auth';

ReactDOM.createRoot(document.getElementById('root')).render( 
    <React.StrictMode>
        <ThemeProvider theme={theme}> {/* O <ThemeProvider> envelopa a aplicação, ele trás os temas setados por nós em theme.js */}
            <GlobalStyles />
                <AuthProvider>
                    <Routes />
                </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);
