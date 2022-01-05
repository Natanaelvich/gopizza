import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import CardProduct from '../CardProduct';

import * as S from './styles';

const Menu: React.FC = () => {
  const navigation = useNavigation();

  const { user } = useAuth();

  const handleNavigate = () => {
    if (user?.isAdmin) {
      navigation.navigate('RegisterProduct', { editMode: true });
    } else {
      navigation.navigate('RegisterProduct');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cardápio</S.Title>
        <S.SizeResults>32 pizzas</S.SizeResults>
      </S.Header>

      <S.ProductsList>
        <CardProduct onPress={handleNavigate} />
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
