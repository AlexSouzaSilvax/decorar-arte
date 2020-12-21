import styled from "styled-components/native";
import Constants from "expo-constants";
import { Dimensions } from 'react-native';
import { colors } from "../../service/colors";

export const Wrapper = styled.View`
  padding-top: ${Constants.statusBarHeight};
  background-color: ${colors.primaryColor};
`;

export const Body = styled.View`
  background-color: ${colors.primaryColor};
  flex: 1;
  border-width: 0;  
`;

export const Lista = styled.FlatList`  
  margin-top: -25;
  padding-top: 15;
`;

export const A = styled.View`
  width: ${Dimensions.get('screen').width};
  height: 25;    
  background-color: ${colors.primaryColor};  
`;

export const B = styled.View`
   width: ${Dimensions.get('screen').width};
   height: 30;
   background-color: #efefef;
   border-top-right-radius: 80;
   border-top-left-radius: 80;   
`;

export const FormInfo = styled.View`
  background-color: ${colors.white0};  
  width: ${Dimensions.get("screen").width - 60};
  border-radius: 4;
  justify-content: center;
  align-items: center;
  padding-bottom: 25;
`;

export const TituloFormInfo = styled.Text`
  font-size: 22;
  color: ${colors.gray};
`;