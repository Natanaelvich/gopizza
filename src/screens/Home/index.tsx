import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@/hooks/useAuth';

import * as S from './styles';
import Menu from './_components/Menu';
import SearchMenu from './_components/SearchMenu';
import Button from '@/components/Button';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { signOut, user } = useAuth();

  const handleNavigateToRegisterProduct = () => {
    navigation.navigate('RegisterProduct');
  };

  return (
    <S.Container>
      <S.Header>
        <S.WrapperTitleAndButtonExit>
          <S.Title>😁 Olá, {user?.isAdmin ? 'Admin' : 'Garçom'} </S.Title>
          <MaterialIcons
            name="logout"
            size={24}
            color="white"
            onPress={signOut}
          />
        </S.WrapperTitleAndButtonExit>

        <SearchMenu />
      </S.Header>

      <S.Content>
        <Menu />
      </S.Content>

      {user?.isAdmin && (
        <S.WrapperButton>
          <Button
            type="secondary"
            title="Cadastrar pizza"
            onPress={handleNavigateToRegisterProduct}
          />
        </S.WrapperButton>
      )}
    </S.Container>
  );
};

export default Home;
