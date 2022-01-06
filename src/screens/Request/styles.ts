import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { ImageProps, ScrollViewProps } from 'react-native';
import Button from '@/components/Button';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 27,
  },
} as ScrollViewProps)`
  flex: 1;
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
  padding: 56px 24px 0;
  height: 204px;
`;

export const ButtonBack = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const WrapperImage = styled.View`
  height: 240px;
  width: 240px;
  border-radius: 120px;
  margin-top: -120px;
  elevation: 12;
  align-self: center;
`;

export const ProducImage = styled.Image.attrs({
  resizeMode: 'contain',
} as ImageProps)`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  align-self: center;
  margin-top: 24px;
  line-height: 44px;
  font-size: 32px;
`;

export const WrapperForm = styled.View`
  padding: 0 24px;
  margin-top: 46px;
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

export const WrapperRadios = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const ButtonRegister = styled(Button)`
  margin-top: 16px;
`;
