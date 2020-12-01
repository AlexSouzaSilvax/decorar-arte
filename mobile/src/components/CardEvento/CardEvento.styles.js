import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  background-color: #F3F3F3;  
  width: 95%;
  margin: 10px;
  border-radius: 6px;    
`;

export const Title = styled.Text`
  color: #767676;
  font-size: 18px;
  font-weight: 500;
  align-self: center;
  flex: 1;
`;

export const Top = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const View = styled.View`
  
`;

export const Tags = styled.View`
  justify-content: flex-end;
  align-self: center;  
  flex-direction: row;
`;

export const TipoServico = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 3px;
  background-color: #eee;  
  border-radius: 8px;
`;

export const NameTipoServico = styled.Text`
  color: #ed0059;
  align-self: center;
  padding-right: 2px;
  font-weight: bold;
`;
