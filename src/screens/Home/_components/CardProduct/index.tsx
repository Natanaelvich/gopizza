import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

const imageUri =
  'https://marketup-cdn.s3-us-west-2.amazonaws.com/files/947788/products/be798d44-cf92-4d19-9077-78008fd9b2dd.png';

const CardProduct: React.FC = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.WrapperImage>
        <S.ProducImage source={{ uri: imageUri }} />
      </S.WrapperImage>
      <S.WrapperDesc>
        <S.Title>Margherita</S.Title>
        <S.Description>
          Mussarela, manjericão fresco, parmesão e tomate.
        </S.Description>

        <S.WrapperIconArrowRight>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={theme.COLORS.SECONDARY_900}
          />
        </S.WrapperIconArrowRight>
      </S.WrapperDesc>
    </S.Container>
  );
};

export default CardProduct;
