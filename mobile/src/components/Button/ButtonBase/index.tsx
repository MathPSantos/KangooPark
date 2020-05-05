import React from 'react';

import { ActivityIndicator, GestureResponderEvent } from 'react-native';

import colors from '../../../styles/theme/colors';

import { Props } from './interface';

import { Container, Label } from './styles';

const ButtonBase = (props: Props) => {
  const { onPress, text, variant = 'base', loading } = props;

  const callOnPress = (e: GestureResponderEvent) => {
    if (!loading) {
      onPress(e);
    }
  };

  return (
    <Container variant={variant} onPress={callOnPress}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Label variant={variant}>{text}</Label>
      )}
    </Container>
  );
};

export default ButtonBase;
