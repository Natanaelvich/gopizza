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
  padding: 65px 0 0;
`;

export const Header = styled.View`
  padding: 0 20px;
  z-index: 10;
`;

export const WrapperTitleAndButtonExit = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 20px;
  color: #fff;
`;

export const Content = styled.View`
  background: #f7f7f7;
  flex: 1;
  margin-top: -24px;
  padding-top: 50px;
`;
