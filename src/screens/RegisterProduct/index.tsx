import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';

import { Alert } from 'react-native';

import Input from '@/components/Input';

import * as S from './styles';
import Photo from './_components/Photo';
import InputPrice from './_components/InputPrice';

const RegisterProduct: React.FC = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();

  const { editMode } = (params as { editMode?: string }) || {};

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceP, setPriceP] = useState('');
  const [priceM, setPriceM] = useState('');
  const [priceG, setPriceG] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    setName('Mussarela');
    setDescription(
      'coberta com molho de tomate, queijo tipo mussarela, azeitonas pretas e orégano e massa com fermentação natural, oferece mais sabor e qualidade à sua mesa.',
    );
    setPriceP('12');
    setPriceM('24');
    setPriceG('35');
  }, []);

  const handleRegisterProduct = async () => {
    try {
      setIsLoading(true);

      if (
        !name.trim() ||
        !description.trim() ||
        !priceP.trim() ||
        !priceM.trim() ||
        !priceG.trim()
      ) {
        Alert.alert('Todos os campos são obrigatórios');
        return;
      }

      let imageUrl = '';
      let imagePath = '';

      if (image) {
        const imageId = uuid.v4();

        const reference = storage().ref(`images/products/${imageId}.png`);

        await reference.putFile(image);

        imageUrl = await reference.getDownloadURL();
        imagePath = reference.fullPath;
      }

      await firestore()
        .collection('products')
        .add({
          name,
          name_insensitive: name.trim().toLowerCase(),
          description,
          priceP: Number(priceP),
          priceM: Number(priceM),
          priceG: Number(priceG),
          imageUrl,
          imagePath,
        });

      Alert.alert('Producto cadastrado com sucesso');
      setIsLoading(false);

      goBack();
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Erro ao tentar cadastrar produto!');
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

        <Input value={name} onChangeText={setName} />

        <S.WrapperLabels>
          <S.LabelInput>Descrição</S.LabelInput>

          <S.LabelMaxCharsInput>Max 60 caracteres</S.LabelMaxCharsInput>
        </S.WrapperLabels>
        <Input multiline value={description} onChangeText={setDescription} />

        <S.WrapperLabels>
          <S.LabelInput>Descrição</S.LabelInput>
        </S.WrapperLabels>

        <InputPrice size="P" value={priceP} onChangeText={setPriceP} />
        <InputPrice size="M" value={priceM} onChangeText={setPriceM} />
        <InputPrice size="G" value={priceG} onChangeText={setPriceG} />
        <S.ButtonRegister
          title={`${editMode ? 'Editar' : 'Cadastrar'}  pizza`}
          onPress={handleRegisterProduct}
          loading={isLoading}
        />
      </S.WrapperForm>
    </S.Container>
  );
};

export default RegisterProduct;
