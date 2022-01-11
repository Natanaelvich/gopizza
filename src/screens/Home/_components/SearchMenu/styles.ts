import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 37px;
  padding: 0 2px;
`;

export const WrapperInput = styled.View`
  flex: 1;
  margin-right: 7px;
  height: 48px;

  background: #ffffff;
  border: 1px solid #f0f0f0;

  border-radius: 16px;
  flex-direction: row;
  overflow: hidden;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding-left: 16px;
`;

export const ClearInput = styled.TouchableOpacity`
  padding: 6px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonSearch = styled.TouchableOpacity`
  height: 49px;
  width: 49px;

  background: #528f33;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;
