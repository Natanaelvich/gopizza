import React from 'react';
import CardProduct from '../CardProduct';

import * as S from './styles';

const Menu: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Cardápio</S.Title>
        <S.SizeResults>32 pizzas</S.SizeResults>
      </S.Header>

      <S.ProductsList>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </S.ProductsList>
    </S.Container>
  );
};

export default Menu;
