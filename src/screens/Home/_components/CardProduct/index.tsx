import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import ProductImage from '@/components/ProductImage';

import * as S from './styles';
import { Product } from '../..';

type Props = {
  product: Product;
} & TouchableOpacityProps;

const CardProduct: React.FC<Props> = ({ product, ...res }) => {
  const theme = useTheme();

  return (
    <S.Container {...res}>
      <ProductImage uri={product.imageUrl} width={104} height={104} />
      <S.WrapperDesc>
        <S.Title>{product.name}</S.Title>
        <S.Description>{product.description}</S.Description>

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
