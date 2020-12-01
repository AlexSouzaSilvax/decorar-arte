import styled from "styled-components/native";
import { Dimensions } from 'react-native';

export const Wrapper = styled.View`
  background-color: #ed0059;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;        
`;

export const Header = styled.View`
  width: 100%;
  height: ${Dimensions.get("screen").height - 450};
  background-color: #ed0059;
  border-bottom-right-radius: 150;
  display: flex;
  align-items: center;  
  justify-content: flex-start;        
`;

export const Header2 = styled.View`
  width: 100%;
  height: ${Dimensions.get("screen").height - 200};
  background-color: #fefefe;
  border-top-right-radius: 65;
  display: flex;
  align-items: center;  
  justify-content: flex-start;        
`;

export const ViewTitle = styled.View`
  margin-top: 25%;
`;

export const Title = styled.Text`
  color: #FeFeFe;
  font-size: 45px;
  font-weight: bold;
`;

export const Img = styled.Image`
  width: 200;
  height: 200;
  margin-top: 60;
`;

export const Btn = styled.TouchableOpacity`
  margin-top: 50;
  background-color: #ed0059;
  width: ${Dimensions.get("screen").width - 100};
  height: 50px;
  border-radius: 4px;
  align-items: center;  
  justify-content: center;
`;

export const TxtBtn = styled.Text`
  color: #FeFeFe;
  font-size: 22px;
`;