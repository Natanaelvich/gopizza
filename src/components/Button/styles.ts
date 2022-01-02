import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: #e03f50;
  border-radius: 12px;
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 14px;
  color: #fff;
`;
