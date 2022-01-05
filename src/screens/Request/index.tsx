import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import * as S from './styles';

const imageUri =
  'https://marketup-cdn.s3-us-west-2.amazonaws.com/files/947788/products/be798d44-cf92-4d19-9077-78008fd9b2dd.png';

const Request: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack onPress={goBack}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
        </S.ButtonBack>
      </S.Header>
      <S.WrapperImage>
        <S.ProducImage source={{ uri: imageUri }} />
      </S.WrapperImage>
      <S.Title>Margherita</S.Title>
    </S.Container>
  );
};

export default Request;
