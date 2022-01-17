import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

import * as S from './styles';
import Radio from './_components/Radio';
import Button from '@/components/Button';
import ProductImage from '@/components/ProductImage';
import { Product } from '../Home';

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
  const { params } = useRoute();

  const [sizeRquestSelected, setSizeRquestSelected] = useState(0);
  const [numberTable, setNumberTable] = useState('');
  const [quantityRequest, setQuantityRequest] = useState('8');
  const [loading, setLoading] = useState(false);

  const { product } = params as { product: Product };

  const total = useMemo(() => {
    if (optionsRadio[sizeRquestSelected].value === 'GRANDE') {
      return product.priceG * Number(quantityRequest);
    }
    if (optionsRadio[sizeRquestSelected].value === 'MÉDIA') {
      return product.priceM * Number(quantityRequest);
    }
    if (optionsRadio[sizeRquestSelected].value === 'PEQUENA') {
      return product.priceP * Number(quantityRequest);
    }

    return 0;
  }, [sizeRquestSelected, product, quantityRequest]);

  const handleSaveRequest = useCallback(async () => {
    try {
      if (!numberTable || !quantityRequest) {
        Alert.alert('Preencha todos os campos');

        return;
      }

      setLoading(true);
      await firestore().collection('requests').add({
        numberTable,
        quantityRequest,
        total,
        productId: product.id,
        productImage: product.imageUrl,
        productName: product.name,
        status: 'PREPARANDO',
      });
      setLoading(false);

      Alert.alert('Pedido realizado com sucesso');
      goBack();
    } catch (error) {
      setLoading(false);
      Alert.alert('Falha ao realizar pedido');
    }
  }, [numberTable, quantityRequest, total, product, goBack]);

  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack onPress={goBack}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
        </S.ButtonBack>
      </S.Header>

      <S.ProductImageWrapper>
        <ProductImage uri={product.imageUrl} width={240} height={240} />
      </S.ProductImageWrapper>
      <S.Title>{product.name}</S.Title>

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

        <S.WrapperInputs>
          <S.InputNumber
            keyboardType="number-pad"
            value={numberTable}
            onChangeText={setNumberTable}
          />
          <S.InputNumber
            keyboardType="number-pad"
            value={quantityRequest}
            onChangeText={setQuantityRequest}
          />
        </S.WrapperInputs>

        <S.Total>Total: R$ {total}</S.Total>

        <Button
          title="Confirmar pedido"
          onPress={handleSaveRequest}
          loading={loading}
        />
      </S.WrapperForm>
    </S.Container>
  );
};

export default Request;
