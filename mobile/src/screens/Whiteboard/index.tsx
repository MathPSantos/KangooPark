import React from 'react';
import { View, Text } from 'react-native';

import {
    Typography,
} from '../../components';

const Whiteboard: React.FC = () => {
    return(
        <View>
            <Typography text='Whiteboard' fontSize='medium' color='primary' />
        </View>
    );  
};

export default Whiteboard;
