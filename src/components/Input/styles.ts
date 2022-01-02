import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TextInput.attrs({
  placeholderTextColor: '#FFFFFF',
} as TextInputProps)`
  border: 1px solid #d16470;
  border-radius: 12px;
  width: 100%;
  height: 56px;
  margin-bottom: 16px;
  padding: 0 20px;

  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 14px;
`;

export const Title = styled.Text``;
