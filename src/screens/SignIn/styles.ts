import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs(
  ({ theme }) =>
    ({
      colors: theme.COLORS.GRADIENT,
      end: { x: 0, y: 0 },
      start: { x: 1, y: 1 },
    } as LinearGradientProps),
)`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding: 0 32px 48px;
`;

export const Logo = styled.Image`
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 32px;
  align-self: flex-start;
  color: #ffff;
  margin-bottom: 23px;
`;

export const ForgotPassword = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 14px;
  color: #fff;
  margin: 4px 0 20px;
  align-self: flex-end;
`;
