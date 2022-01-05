import { ImageProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const WrapperImage = styled.View`
  height: 104px;
  width: 104px;
  elevation: 12;
  border-radius: 52px;
`;

export const ProducImage = styled.Image.attrs({
  resizeMode: 'contain',
} as ImageProps)`
  width: 100%;
  height: 100%;
`;

export const WrapperDesc = styled.View`
  position: relative;
  margin-left: 20px;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 20px;
  color: #572d31;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 12px;

  color: #7a6769;
  max-width: 163px;
  margin-top: 8px;
`;

export const WrapperIconArrowRight = styled.View`
  position: absolute;
  right: 0;
  top: 0;
`;
