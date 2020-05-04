import React from 'react';

import { ThemeProvider } from 'styled-components';
import { kangooparkTheme } from './styles/theme';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

import { AuthProvider } from './contexts/auth';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={kangooparkTheme}>
            <NavigationContainer>
                <AuthProvider>

                    <Routes />
                </AuthProvider>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;