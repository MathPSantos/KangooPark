import React from 'react';

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
            <Typography text='Whiteboard' fontSize='large' color='secondary' />
        </Grid>
    );  
};

export default Whiteboard;
