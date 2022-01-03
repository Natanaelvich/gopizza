import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import Input from '@/components/Input';

import * as S from './styles';
import Photo from './_components/Photo';
import InputPrice from './_components/InputPrice';

const RegisterProduct: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
        </S.ButtonBack>
        <S.Title>Cadastrar</S.Title>

        <S.ButtonDelete>
          <S.ButtonDeleteText>Deletar</S.ButtonDeleteText>
        </S.ButtonDelete>
      </S.Header>

      <S.WrapperUpload>
        <Photo />

        <S.ButtonUpload title="Carregar" type="secondary" />
      </S.WrapperUpload>

      <S.WrapperForm>
        <S.WrapperLabels>
          <S.LabelInput>Nome</S.LabelInput>
        </S.WrapperLabels>

        <Input />

        <S.WrapperLabels>
          <S.LabelInput>Descrição</S.LabelInput>

          <S.LabelMaxCharsInput>Max 60 caracteres</S.LabelMaxCharsInput>
        </S.WrapperLabels>
        <Input multiline />

        <S.WrapperLabels>
          <S.LabelInput>Descrição</S.LabelInput>
        </S.WrapperLabels>

        <InputPrice />
        <InputPrice />
        <InputPrice />
        <InputPrice />
        <S.ButtonRegister title="Cadastrar pizza" />
      </S.WrapperForm>
    </S.Container>
  );
};

export default RegisterProduct;
