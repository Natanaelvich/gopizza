import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import ProductImage from '@/components/ProductImage';

import * as S from './styles';

const imageUri =
  'https://marketup-cdn.s3-us-west-2.amazonaws.com/files/947788/products/be798d44-cf92-4d19-9077-78008fd9b2dd.png';

type Props = TouchableOpacityProps;

const CardProduct: React.FC<Props> = ({ ...res }) => {
  const theme = useTheme();

  return (
    <S.Container {...res}>
      <ProductImage uri={imageUri} width={104} height={104} />
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
