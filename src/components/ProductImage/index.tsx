import React from 'react';
import { ViewProps } from 'react-native';

import * as S from './styles';

type Props = {
  uri: string;
  width: number;
  height: number;
} & ViewProps;

const ProductImage: React.FC<Props> = ({ uri, width, height, ...res }) => {
  return (
    <S.WrapperImage style={{ width, height, borderRadius: width / 2 }} {...res}>
      <S.Image source={{ uri }} />
    </S.WrapperImage>
  );
};

export default ProductImage;
