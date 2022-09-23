import React, { createContext, ReactNode, useState } from 'react';
import persistedState from '../utils/persistedState';

import { ThemeProvider } from 'styled-components';
import light from '../assets/styles/theme/light';
import dark from '../assets/styles/theme/dark';

interface IContext{
    theme: boolean;
    setTheme(): void;
    toggleTheme(): void;
    children?: ReactNode;
}

const ContextApi = createContext({
    theme: false,
    setTheme: (_prev: boolean) => {},
    toggleTheme: (_prev: boolean) => {},
});

function UseContextApi({children}: IContext) {

    const [theme, setTheme] = persistedState('theme', false);

    const toggleTheme = () => {
        setTheme(event => !event);
    }

    


    return (
        <ThemeProvider theme={theme === false ? dark : light}>
            <ContextApi.Provider
                value={{
                    theme,
                    setTheme,
                    toggleTheme
                }}
            >
                {children}
            </ContextApi.Provider>
        </ThemeProvider>
    )
}

export {ContextApi, UseContextApi}