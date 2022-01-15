import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  height: 72px;
  align-items: center;
  flex-direction: row;
  width: 100%;
  background: #fff;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<{ isFocused: boolean }>`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 18px;

  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.6)};
`;

export const Badge = styled.View<{ hasValue: boolean }>`
  height: 20px;
  width: 30px;
  align-items: center;
  justify-content: center;

  background: ${({ theme, hasValue }) =>
    hasValue ? theme.COLORS.SUCCESS_900 : 'transparent'};
  border-radius: 12px;
  margin-left: 9px;

  ${({ hasValue }) =>
    !hasValue &&
    css`
      border-width: 1px;
      border-color: #dcdcdc;
    `}
`;

export const BadgeTitle = styled.Text<{ hasValue: boolean }>`
  font-size: 12px;
  color: ${({ hasValue }) => (hasValue ? '#fff' : '#7A6769')};
`;
