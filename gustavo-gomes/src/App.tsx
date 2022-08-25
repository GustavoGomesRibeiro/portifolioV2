import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/styles/css/global';
import './assets/styles/fonts/fonts.css';
import Home from './pages/Home/index';
import light from './assets/styles/theme/light';
import dark from './assets/styles/theme/light';

function App() {
  const [theme, setTheme ] = useState(light);

  const toggleTheme = () => {
    setTheme( theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
  )
}

export default App
