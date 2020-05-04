import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

import { AuthProvider } from './contexts/auth';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </AuthProvider>
    );
};

export default App;