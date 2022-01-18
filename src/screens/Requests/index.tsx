import React from 'react';
import ProductImage from '@/components/ProductImage';

import * as S from './styles';
import { useRequests } from '@/hooks/useRequests';

const Requests: React.FC = () => {
  const { requests } = useRequests();

  return (
    <S.Container>
      <S.Header>
        <S.Title>Pedidos feitos</S.Title>
      </S.Header>

      <S.RequestsList>
        {requests.map((r, index) => (
          <S.Request
            key={r.id}
            borderRight={(index + 1) % 2 !== 0}
            borderBottom={
              (requests.length % 2 !== 0 && index < requests.length - 1) ||
              index < requests.length - 2
            }
          >
            <ProductImage uri={r.productImage} width={104} height={104} />
            <S.RequesTitle>{r.productName}</S.RequesTitle>
            <S.RequestDescription>{`Mesa ${r.numberTable} • Qnt: ${r.quantityRequest}`}</S.RequestDescription>

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
