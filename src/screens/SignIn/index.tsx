import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Input from '@/components/Input';

import * as S from './styles';
import Button from '@/components/Button';
import { images } from '@/assets';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <S.Container>
      <S.Logo source={images.pizzaSignin} />
      <S.Title>Login</S.Title>

      <Input placeholder="E-mail" />
      <Input placeholder="E-mail" />

      <S.ForgotPassword>Esqueci minha senha</S.ForgotPassword>
      <Button title="ENTRAR" onPress={handleLogin} />
    </S.Container>
  );
};

export default SignIn;
