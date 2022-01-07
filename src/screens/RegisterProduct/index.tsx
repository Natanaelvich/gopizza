import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import Input from '@/components/Input';

import * as S from './styles';
import Photo from './_components/Photo';
import InputPrice from './_components/InputPrice';

const RegisterProduct: React.FC = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();

  const { editMode } = (params as { editMode?: string }) || {};

  const [image, setImage] = useState('');

  const handlePickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack onPress={goBack}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
        </S.ButtonBack>
        <S.Title>Cadastrar</S.Title>

        <S.ButtonDelete>
          <S.ButtonDeleteText>Deletar</S.ButtonDeleteText>
        </S.ButtonDelete>
      </S.Header>

      <S.WrapperUpload>
        <Photo uri={image} />

        {!image && (
          <S.ButtonUpload
            title="Carregar"
            type="secondary"
            onPress={handlePickImage}
          />
        )}
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
        <S.ButtonRegister
          title={`${editMode ? 'Editar' : 'Cadastrar'}  pizza`}
        />
      </S.WrapperForm>
    </S.Container>
  );
};

export default RegisterProduct;
