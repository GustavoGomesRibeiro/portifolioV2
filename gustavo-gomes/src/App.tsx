import React, { useState } from 'react';

import './assets/styles/fonts/fonts.css';
import GlobalStyle from './assets/styles/css/global';
import Home from './pages/Home/index';
import AppProvider from './hooks/index';

function App() {

  return (
    <>
      <AppProvider>
        <GlobalStyle/>
        <Home/>
      </AppProvider>
    </>
  )
}

export default App
