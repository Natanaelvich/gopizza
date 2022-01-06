import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type Props = {
  label: string;
  selected: boolean;
} & TouchableOpacityProps;

const Radio: React.FC<Props> = ({ label, selected, ...res }) => {
  return (
    <S.Container selected={selected} {...res}>
      <S.RadioContainer>{selected && <S.RadioContent />}</S.RadioContainer>

      <S.Title>{label}</S.Title>
    </S.Container>
  );
};

export default Radio;
