import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { useAuth } from '@/hooks/useAuth';

import * as S from './styles';
import Menu from './_components/Menu';
import SearchMenu from './_components/SearchMenu';
import Button from '@/components/Button';

export type Product = {
  id: string;
  description: string;
  imagePath: string;
  imageUrl: string;
  name: string;
  name_insensitive: string;
  priceG: number;
  priceM: number;
  priceP: number;
};

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { signOut, user } = useAuth();

  const [products, setProducts] = useState<Product[]>([]);

  const handleNavigateToRegisterProduct = () => {
    navigation.navigate('RegisterProduct');
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('products')
      .onSnapshot(documentSnapshot => {
        const productsFirestore = documentSnapshot.docs.map(p => ({
          id: p.id,
          description: p.data().description,
          imagePath: p.data().imagePath,
          imageUrl: p.data().imageUrl,
          name: p.data().name,
          name_insensitive: p.data().name_insensitive,
          priceGname_insensitive: p.data().priceG,
          priceM: p.data().priceM,
          priceP: p.data().priceP,
          priceG: p.data().priceG,
        }));

        setProducts(productsFirestore as Product[]);
      });

    return () => subscriber();
  }, []);

  async function fetchProducts(value: string) {
    const formatedValue = value.toLocaleLowerCase().trim();

    const response = await firestore()
      .collection('products')
      .orderBy('name_insensitive')
      .startAt(formatedValue)
      .endAt(`${formatedValue}\uf8ff`)
      .get();

    const data = response.docs.map(d => {
      return {
        id: d.id,
        ...d.data(),
      };
    });

    setProducts(data as Product[]);
  }

  return (
    <S.Container>
      <S.Header>
        <S.WrapperTitleAndButtonExit>
          <S.Title>😁 Olá, {user?.isAdmin ? 'Admin' : 'Garçom'} </S.Title>
          <MaterialIcons
            name="logout"
            size={24}
            color="white"
            onPress={signOut}
          />
        </S.WrapperTitleAndButtonExit>

        <SearchMenu />
      </S.Header>

      <S.Content>
        <Menu products={products} />
      </S.Content>

      {user?.isAdmin && (
        <S.WrapperButton>
          <Button
            type="secondary"
            title="Cadastrar pizza"
            onPress={handleNavigateToRegisterProduct}
          />
        </S.WrapperButton>
      )}
    </S.Container>
  );
};

export default Home;
