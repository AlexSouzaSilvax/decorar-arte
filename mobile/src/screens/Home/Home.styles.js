import styled from "styled-components/native";
import Constants from "expo-constants";
import { Dimensions } from 'react-native';

export const Wrapper = styled.View`
  padding-top: ${Constants.statusBarHeight};
  background-color: #ed0059;
`;

export const Body = styled.View`
  background-color: #f3f3f3;
  flex: 1;
  border-width: 0;  
`;

export const Lista = styled.FlatList`
  /*  justify-content: center;
  align-items: center;*/
  margin-top: -25;
  padding-top: 15;
`;

export const A = styled.View`
  width: ${Dimensions.get('screen').width};
  height: 30;
  background-color: #ed0059;
`;

export const B = styled.View`
   width: ${Dimensions.get('screen').width};
   height: 30;
   background-color: #F3f3f3;
   border-top-right-radius: 80;
   border-top-left-radius: 80;
`;