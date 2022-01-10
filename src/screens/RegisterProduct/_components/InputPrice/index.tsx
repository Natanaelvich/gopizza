import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

type Props = {
  size: string;
} & TextInputProps;

const InputPrice: React.FC<Props> = ({ size, ...res }) => {
  return (
    <S.Container>
      <S.Size>
        <S.SizeLabel>{size}</S.SizeLabel>
      </S.Size>

      <S.PlaceHolder>R$</S.PlaceHolder>

      <S.Input {...res} keyboardType="number-pad" />
    </S.Container>
  );
};

export default InputPrice;
