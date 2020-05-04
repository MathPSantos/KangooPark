import React from 'react';
import { View, Text } from 'react-native';

import {
    Grid,
    Typography,
} from '../../components';

const Whiteboard: React.FC = () => {
    return(
        <Grid
            flex={1}
            justifyContent='center'
            alignItems='center'
        >
            <Typography text='Whiteboard' fontSize='medium' color='secondary' />
        </Grid>
    );  
};

export default Whiteboard;
