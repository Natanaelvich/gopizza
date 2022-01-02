import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
import { PropsButton } from '.';

export const Container = styled(RectButton)<Omit<PropsButton, 'title'>>`
  border-radius: 12px;
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;

  ${({ theme, type }) => css`
    background: ${type === 'primary'
      ? theme.COLORS.SUCCESS_900
      : theme.COLORS.PRIMARY_800};
  `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;
