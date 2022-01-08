import React from 'react';

import * as S from './styles';

type Props = {
  uri: string;
  width: number;
  height: number;
};

const ProductImage: React.FC<Props> = ({ uri, width, height }) => {
  return (
    <S.WrapperImage style={{ width, height }}>
      <S.Image source={{ uri }} />
    </S.WrapperImage>
  );
};

export default ProductImage;
