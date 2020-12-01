import styled from "styled-components/native";

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #ed0059;  
  display: flex;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: #fefefe;
  font-size: 22px;
  font-weight: 500;
  align-self: center;
  padding-left: 10;
  flex: 1;
`;

export const BtnFiltro = styled.TouchableOpacity`
  width: 100;
  height: 40;
  justify-content: center;
  align-items: center;
`;
