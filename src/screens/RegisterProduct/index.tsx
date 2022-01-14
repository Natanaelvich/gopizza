import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';

import { Alert, View } from 'react-native';

import Input from '@/components/Input';

import * as S from './styles';
import Photo from './_components/Photo';
import InputPrice from './_components/InputPrice';
import { Product } from '../Home';

const RegisterProduct: React.FC = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();

  const { editMode, product } =
    (params as { editMode: string; product: Product }) || {};

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
    if (!editMode && !product) {
      setName('Mussarela');
      setDescription(
        'coberta com molho de tomate, queijo tipo mussarela, azeitonas pretas e orégano e massa com fermentação natural, oferece mais sabor e qualidade à sua mesa.',
      );
      setPriceP('12');
      setPriceM('24');
      setPriceG('35');
    } else {
      setImage(product.imageUrl);
      setName(product.name);
      setDescription(product.description);
      setPriceP(String(product.priceP));
      setPriceM(String(product.priceM));
      setPriceG(String(product.priceG));
    }
  }, [editMode, product]);

  function validateForm() {
    if (
      !name.trim() ||
      !description.trim() ||
      !priceP.trim() ||
      !priceM.trim() ||
      !priceG.trim()
    ) {
      Alert.alert('Todos os campos são obrigatórios');
      return false;
    }

    return true;
  }

  const handleRegisterProduct = async () => {
    try {
      setIsLoading(true);

      const formValid = validateForm();

      if (!formValid) {
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

      Alert.alert('Produto cadastrado com sucesso');
      setIsLoading(false);

      goBack();
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Erro ao tentar cadastrar produto!');
    }
  };

  const handleEditProduct = async () => {
    try {
      setIsLoading(true);

      const formValid = validateForm();

      if (!formValid) {
        return;
      }

      let imageUrl = '';
      let imagePath = '';

      if (image && image !== product.imageUrl) {
        const imageId = uuid.v4();

        const reference = storage().ref(`images/products/${imageId}.png`);

        await reference.putFile(image);

        imageUrl = await reference.getDownloadURL();
        imagePath = reference.fullPath;
      } else {
        imageUrl = product.imageUrl;
        imagePath = product.imagePath;
      }

      await firestore()
        .collection('products')
        .doc(product.id)
        .update({
          name,
          name_insensitive: name.trim().toLowerCase(),
          description,
          priceP: Number(priceP),
          priceM: Number(priceM),
          priceG: Number(priceG),
          imageUrl,
          imagePath,
        });

      Alert.alert('Produto atualizado com sucesso');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Erro ao tentar atualizar produto!');
    }
  };

  const handleDeleteProduct = async () => {
    try {
      await firestore().collection('products').doc(product.id).delete();

      Alert.alert('Produto deletado com sucesso');

      goBack();
    } catch (error) {
      Alert.alert('Erro ao tentar deletar produto!');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack onPress={goBack}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
        </S.ButtonBack>
        <S.Title>Cadastrar</S.Title>

        {editMode ? (
          <S.ButtonDelete onPress={handleDeleteProduct}>
            <S.ButtonDeleteText>Deletar</S.ButtonDeleteText>
          </S.ButtonDelete>
        ) : (
          <View style={{ width: 40 }} />
        )}
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
          onPress={editMode ? handleEditProduct : handleRegisterProduct}
          loading={isLoading}
        />
      </S.WrapperForm>
    </S.Container>
  );
};

export default RegisterProduct;
