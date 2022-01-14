import { ImageProps } from 'react-native';
import styled from 'styled-components/native';

export const WrapperImage = styled.View`
  elevation: 12;
  overflow: hidden;
  background: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
} as ImageProps)`
  width: 100%;
  height: 100%;
`;
