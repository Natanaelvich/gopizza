import React, { useState } from 'react';
import { Alert } from 'react-native';

import Input from '@/components/Input';
import * as S from './styles';
import Button from '@/components/Button';
import { images } from '@/assets';
import { useAuth } from '@/hooks/useAuth';

const SignIn: React.FC = () => {
  const { signUpOrSignIn, forgotPassword } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signUpOrSignIn({ email, password });
    } catch (error) {
      Alert.alert(error.message);
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    forgotPassword(email);
  };

  return (
    <S.Container>
      <S.Content>
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

        <S.ForgotPassword onPress={handleForgotPassword}>
          Esqueci minha senha
        </S.ForgotPassword>
        <Button
          title="ENTRAR"
          type="secondary"
          onPress={handleLogin}
          loading={loading}
        />
      </S.Content>
    </S.Container>
  );
};

export default SignIn;
