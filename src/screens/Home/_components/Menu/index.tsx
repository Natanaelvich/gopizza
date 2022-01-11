import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import CardProduct from '../CardProduct';

import * as S from './styles';
import { Product } from '../..';

type Props = {
  products: Product[];
};

const Menu: React.FC<Props> = ({ products }) => {
  const navigation = useNavigation();

  const { user } = useAuth();

  const handleNavigate = () => {
    if (user?.isAdmin) {
      navigation.navigate('RegisterProduct', { editMode: true });
    } else {
      navigation.navigate('Request');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cardápio</S.Title>
        <S.SizeResults>32 pizzas</S.SizeResults>
      </S.Header>

      <S.ProductsList>
        {products.map(p => (
          <CardProduct onPress={handleNavigate} product={p} />
        ))}
      </S.ProductsList>
    </S.Container>
  );
};

export default Menu;
