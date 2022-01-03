import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

export type PropsButton = {
  title: string;
  type?: 'primary' | 'secondary';
  loading?: boolean;
} & RectButtonProps;

const Button: React.FC<PropsButton> = ({
  title,
  type = 'primary',
  loading = false,
  ...res
}) => {
  const theme = useTheme();

  return (
    <S.Container type={type} enabled={!loading} {...res}>
      {loading ? (
        <ActivityIndicator color={theme.COLORS.TITLE} />
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.Container>
  );
};

export default Button;
