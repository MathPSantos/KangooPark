import React from 'react';
import { View, Button, Text } from 'react-native';

import { useAuth } from '../../contexts/auth';

const Home: React.FC = () => {
    const { user, signOut } = useAuth();

    function handleSignOut() {
        signOut();
    }

    return (
        <View>
            <Text >{user?.name}</Text>
            <Button title='Sign Out' onPress={handleSignOut} />
        </View>
    );

};

export default Home;