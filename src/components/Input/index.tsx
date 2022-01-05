import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

export type PropsInput = {
  type?: 'primary' | 'secondary';
} & TextInputProps;

const Input: React.FC<PropsInput> = ({
  type = 'primary',
  multiline,
  ...res
}) => {
  return (
    <S.Container
      type={type}
      maxLength={multiline ? 60 : undefined}
      multiline={multiline}
      {...res}
    />
  );
};

export default Input;
