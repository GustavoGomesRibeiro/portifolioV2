import React from 'react';
import { UseContextApi } from './context';

const AppProvider = ({ children }) => <UseContextApi theme={false}>{children}</UseContextApi>;

export default AppProvider;