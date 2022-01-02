import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import * as S from './styles';

const SearchMenu: React.FC = () => {
  return (
    <S.Container>
      <S.Input />

      <S.ButtonSearch>
        <MaterialIcons name="search" size={24} color="white" />
      </S.ButtonSearch>
    </S.Container>
  );
};

export default SearchMenu;
