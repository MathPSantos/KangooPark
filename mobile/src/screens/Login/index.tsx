import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { useAuth } from '../../contexts/auth';

const Login: React.FC = () => {
    const { signIn } = useAuth();

    function handleSignIn() {
        signIn();
    }

    return (
        <View>
            <Button title='SignIn' onPress={handleSignIn} />
        </View>
    );
}

export default Login;