import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import Input from '@/components/Input';

import * as S from './styles';
import Button from '@/components/Button';
import { images } from '@/assets';
import { useAuth } from '@/hooks/useAuth';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const { signUpOrSignIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signUpOrSignIn({ email, password });
      navigation.navigate('Home');
    } catch (error: any) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Logo source={images.pizzaSignin} />
      <S.Title>Login</S.Title>

      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        type="secondary"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        type="secondary"
        secureTextEntry
      />

      <S.ForgotPassword>Esqueci minha senha</S.ForgotPassword>
      <Button
        title="ENTRAR"
        type="secondary"
        onPress={handleLogin}
        loading={loading}
      />
    </S.Container>
  );
};

export default SignIn;
