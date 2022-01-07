import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { ScrollViewProps } from 'react-native';
import Button from '@/components/Button';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 27,
  },
} as ScrollViewProps)`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(
  ({ theme }) =>
    ({
      colors: theme.COLORS.GRADIENT,
      end: { x: 0, y: 0 },
      start: { x: 1, y: 1 },
    } as LinearGradientProps),
)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 64px 24px 32px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const ButtonBack = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const ButtonDelete = styled.TouchableOpacity``;

export const ButtonDeleteText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 14px;

  color: #ffffff;
`;

export const WrapperUpload = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 32px 46px;
`;

export const ButtonUpload = styled(Button)`
  width: 90px;
  margin-left: auto;
`;

export const WrapperForm = styled.View`
  padding: 0 24px;
`;

export const WrapperLabels = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const LabelInput = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 14px;

  color: #572d31;
`;

export const LabelMaxCharsInput = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 10px;

  color: #572d31;
`;

export const ButtonRegister = styled(Button)`
  margin-top: 16px;
`;
