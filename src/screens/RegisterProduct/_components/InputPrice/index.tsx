import React from 'react';

import * as S from './styles';

const InputPrice: React.FC = () => {
  return (
    <S.Container>
      <S.Size>
        <S.SizeLabel>P</S.SizeLabel>
      </S.Size>

      <S.PlaceHolder>R$</S.PlaceHolder>

      <S.Input />
    </S.Container>
  );
};

export default InputPrice;
