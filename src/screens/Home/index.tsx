import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import * as S from './styles';
import Menu from './_components/Menu';
import SearchMenu from './_components/SearchMenu';

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.WrapperTitleAndButtonExit>
          <S.Title>😁 Olá, Garçom</S.Title>
          <MaterialIcons name="logout" size={24} color="white" />
        </S.WrapperTitleAndButtonExit>

        <SearchMenu />
      </S.Header>

      <S.Content>
        <Menu />
      </S.Content>
    </S.Container>
  );
};

export default Home;
