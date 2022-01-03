import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 0 3px 22px;
  margin: 0 24px;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #dcdcdc;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 20px;
`;

export const SizeResults = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 14px;
`;

export const ProductsList = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
} as ScrollViewProps)``;
