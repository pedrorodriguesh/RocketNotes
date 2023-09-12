import React from 'react'
import ReactDOM from 'react-dom/client'

import { Details } from './pages/Details/Details' // componente importado

import { ThemeProvider } from 'styled-components' // tema global da página
import theme from "./styles/theme"
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <GlobalStyles />
        <Details />
    </ThemeProvider>
  </React.StrictMode>,
)



