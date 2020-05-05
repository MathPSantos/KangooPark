import React from 'react';

import { ActivityIndicator, GestureResponderEvent } from 'react-native';

import colors from '../../../styles/theme/colors';

import { ButtonProps, StyledProps } from './interface';

import { Container, Label } from './styles';

/**
    ```
      Example: <ButtonBase text="Button Base" loading={false} onPress={() => {}} />
    ```
*/

const ButtonBase = (props: ButtonProps) => {
  const { onPress, text, variant = 'def', loading } = props;

  const callOnPress = (e: GestureResponderEvent) => {
    if (!loading) {
      onPress(e);
    }
  };

  return (
    <Container 
      variant={variant} 
      onPress={callOnPress}
    >
      {loading ? (
        <ActivityIndicator size='large' color={colors.white} />
      ) : (
        <Label variant={variant}>{text}</Label>
      )}
    </Container>
  );
};

export default ButtonBase;
