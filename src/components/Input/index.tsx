import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

export type PropsInput = {
  type: 'primary' | 'secondary';
} & TextInputProps;

const Input: React.FC<PropsInput> = ({ type = 'primary', ...res }) => {
  return <S.Container type={type} {...res} />;
};

export default Input;
