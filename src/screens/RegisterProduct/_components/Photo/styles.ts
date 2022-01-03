import styled from 'styled-components/native';

export const Container = styled.View`
  height: 160px;
  width: 160px;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  /* gray */

  border: 1px dashed #572d31;

  border-radius: 80px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 14px;
  max-width: 92px;
  color: #572d31;
  text-align: center;
`;
