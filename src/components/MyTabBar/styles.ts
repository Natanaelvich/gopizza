import styled from 'styled-components/native';

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

export const Badge = styled.View`
  height: 20px;
  width: 30px;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.SUCCESS_900};
  border-radius: 12px;
  margin-left: 9px;
`;

export const BadgeTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 12px;
`;
