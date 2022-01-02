import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type Props = {
  title: string;
} & TouchableOpacityProps;

const Button: React.FC<Props> = ({ title, ...res }) => {
  return (
    <S.Container {...res}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Button;
