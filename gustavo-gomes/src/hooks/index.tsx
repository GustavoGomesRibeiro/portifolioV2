import React from 'react';
import { UseContextApi } from './context';

const AppProvider = ({ children }: {children :any}) => <UseContextApi theme={false} setTheme={function (): void {
    throw new Error('Function not implemented.');
} } toggleTheme={function (): void {
    throw new Error('Function not implemented.');
} }>{children}</UseContextApi>;

export default AppProvider;