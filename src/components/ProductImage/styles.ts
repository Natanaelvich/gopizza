import { ImageProps } from 'react-native';
import styled from 'styled-components/native';

export const WrapperImage = styled.View`
  overflow: hidden;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
} as ImageProps)`
  width: 100%;
  height: 100%;
`;
