import React from 'react';

import * as S from './styles';

const requests = [
  {
    id: 1,
    title: '4 Queijos',
    description: 'Mesa 01  • Qnt: 1',
    status: 'Pronto',
    image:
      'https://marketup-cdn.s3-us-west-2.amazonaws.com/files/947788/products/be798d44-cf92-4d19-9077-78008fd9b2dd.png',
  },
  {
    id: 2,
    title: 'Gauchesca',
    description: 'Mesa 01  • Qnt: 1',
    status: 'Preparando',
    image:
      'https://marketup-cdn.s3-us-west-2.amazonaws.com/files/947788/products/be798d44-cf92-4d19-9077-78008fd9b2dd.png',
  },
  {
    id: 3,
    title: 'Margherita',
    description: 'Mesa 01  • Qnt: 1',
    status: 'Entregue',
    image:
      'https://marketup-cdn.s3-us-west-2.amazonaws.com/files/947788/products/be798d44-cf92-4d19-9077-78008fd9b2dd.png',
  },
];

const Requests: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Pedidos feitos</S.Title>
      </S.Header>

      <S.RequestsList>
        {requests.map((r, index) => (
          <S.Request
            borderRight={(index + 1) % 2 !== 0}
            borderBottom={
              (requests.length % 2 !== 0 && index < requests.length - 1) ||
              index < requests.length - 2
            }
          >
            <S.WrapperImage>
              <S.RequestImage source={{ uri: r.image }} />
            </S.WrapperImage>
            <S.RequesTitle>{r.title}</S.RequesTitle>
            <S.RequestDescription>{r.description}</S.RequestDescription>

            <S.StatusBadge status={r.status}>
              <S.StatusBadgeLabel status={r.status}>
                {r.status}
              </S.StatusBadgeLabel>
            </S.StatusBadge>
          </S.Request>
        ))}
      </S.RequestsList>
    </S.Container>
  );
};

export default Requests;
