import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ selected: boolean }>`
  padding: 16px;
  width: 32%;
  border-radius: 8px;

  ${({ selected }) => css`
    border: 1px solid ${selected ? '#528f33' : '#DCDCDC'};
    background: ${selected ? '#f7fff9' : '#fff'};
  `}
`;

export const RadioContainer = styled.View`
  height: 20px;
  width: 20px;

  border-radius: 10px;
  border: 1px solid #572d31;

  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const RadioContent = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  background: #528f33;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 16px;

  color: #572d31;
`;
