import { TextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { PropsInput } from '.';

export const Container = styled.TextInput.attrs<PropsInput>(
  ({ theme, type }) =>
    ({
      placeholderTextColor:
        type === 'primary'
          ? theme.COLORS.SECONDARY_900
          : theme.COLORS.PRIMARY_50,
    } as TextInputProps),
)<PropsInput>`
  border-radius: 12px;
  width: 100%;
  margin-bottom: 16px;
  padding: 0 20px;

  font-size: 14px;

  ${({ theme, type, multiline }) => css`
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid ${theme.COLORS.SHAPE};
    color: ${type === 'primary'
      ? theme.COLORS.SECONDARY_900
      : theme.COLORS.SECONDARY_900};
    background: ${type === 'primary' ? '#fff' : 'transparent'};
    height: ${multiline ? 80 : 56}px;
  `}
`;

export const Title = styled.Text``;
