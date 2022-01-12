import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

type Props = {
  handleSearch: () => void;
  handleClear: () => void;
} & TextInputProps;

const SearchMenu: React.FC<Props> = ({ handleSearch, handleClear, ...res }) => {
  return (
    <S.Container>
      <S.WrapperInput>
        <S.Input {...res} />
        <S.ClearInput onPress={handleClear}>
          <MaterialIcons name="close" size={16} color="black" />
        </S.ClearInput>
      </S.WrapperInput>

      <S.ButtonSearch onPress={handleSearch}>
        <MaterialIcons name="search" size={24} color="white" />
      </S.ButtonSearch>
    </S.Container>
  );
};

export default SearchMenu;
