import React, { useState } from 'react';

import {
    Grid,
    Typography,
    ButtonBase
} from '../../components';

const Whiteboard: React.FC = () => {
    const [loading, setLoading] = useState(false);

    function handleButton() {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }


    return (
        <Grid
            flex={1}
            flexDirection='row'
            justifyContent='center'
            backgroundColor='tertiary'
        >
            <Grid
                justifyContent='center'
                alignItems='center'
                backgroundColor='primary'
            >
                <Typography text='KANGOO PARK' fontSize='xxlarge' color='primary' />
                <ButtonBase text='Test' loading={loading} onPress={handleButton} />
            </Grid>
        </Grid>
    );
};

export default Whiteboard;
