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
            backgroundColor='primary'
            paddingLeft='xSmall'
            paddingRight='xSmall'
        >
            <Grid
                flex={1}
                justifyContent='center'
                alignItems='center'
                backgroundColor='tertiary'
            >
                <Typography text='KANGOO PARK' fontSize='xxxLarge' color='primary' />
                <ButtonBase variant='warn' text='Test' loading={loading} onPress={handleButton} />
            </Grid>
        </Grid>
    );
};

export default Whiteboard;
