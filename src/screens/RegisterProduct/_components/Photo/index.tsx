import React from 'react';
import ProductImage from '@/components/ProductImage';

import * as S from './styles';

type Props = {
  uri: string | null;
};

const Photo: React.FC<Props> = ({ uri }) => {
  if (uri) {
    return <ProductImage uri={uri} width={160} height={160} />;
  }

  return (
    <S.Container>
      <S.Title>Nenhuma foto carregada</S.Title>
    </S.Container>
  );
};

export default Photo;
