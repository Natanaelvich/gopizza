import styled from 'styled-components/native';

export const Container = styled.View`
  height: 56px;

  background: #ffffff;
  border: 1px solid #d7d9e0;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const Size = styled.View`
  height: 56px;
  width: 56px;

  border-right-width: 1px;
  border-right-color: #d7d9e0;
  align-items: center;
  justify-content: center;
`;

export const SizeLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 14px;

  color: #572d31;
`;

export const PlaceHolder = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 14px;

  color: #572d31;
  padding: 0 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
  background: transparent;
`;
