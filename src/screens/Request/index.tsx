import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import * as S from './styles';
import Radio from './_components/Radio';

const imageUri =
  'https://marketup-cdn.s3-us-west-2.amazonaws.com/files/947788/products/be798d44-cf92-4d19-9077-78008fd9b2dd.png';

const optionsRadio = [
  {
    id: 0,
    label: 'Pequena',
    value: 'PEQUENA',
  },
  {
    id: 1,
    label: 'Média',
    value: 'MÉDIA',
  },
  {
    id: 2,
    label: 'Grande',
    value: 'GRANDE',
  },
];

const Request: React.FC = () => {
  const { goBack } = useNavigation();
  const [sizeRquestSelected, setSizeRquestSelected] = useState(0);

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

      <S.WrapperForm>
        <S.WrapperLabels>
          <S.LabelInput>Selecione um tamanho</S.LabelInput>
        </S.WrapperLabels>

        <S.WrapperRadios>
          {optionsRadio.map(o => (
            <Radio
              key={o.id}
              label={o.label}
              selected={o.id === sizeRquestSelected}
              onPress={() => setSizeRquestSelected(o.id)}
            />
          ))}
        </S.WrapperRadios>

        <S.WrapperLabels>
          <S.LabelInput>Número da mesa</S.LabelInput>
          <S.LabelInput>Quantidade</S.LabelInput>
        </S.WrapperLabels>
      </S.WrapperForm>
    </S.Container>
  );
};

export default Request;
