import React from 'react';

import * as S from './styles';

type Props = {
  uri: string | null;
};

const Photo: React.FC<Props> = ({ uri }) => {
  if (uri) {
    return (
      <S.WrapperImage>
        <S.ProducImage source={{ uri }} />
      </S.WrapperImage>
    );
  }

  return (
    <S.Container>
      <S.Title>Nenhuma foto carregada</S.Title>
    </S.Container>
  );
};

export default Photo;
