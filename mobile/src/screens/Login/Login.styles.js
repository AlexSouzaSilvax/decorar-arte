import styled from "styled-components/native";
import { Dimensions } from 'react-native';
import { colors } from "../../service/colors";

export const Wrapper = styled.View`
  background-color: ${colors.primaryColor};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;        
`;

export const Header = styled.View`
  width: 100%;
  height: ${Dimensions.get("screen").height - 450};
  background-color: ${colors.primaryColor};
  border-bottom-right-radius: 150;
  display: flex;
  align-items: center;  
  justify-content: flex-start;        
`;

export const Header2 = styled.View`
  width: 100%;
  height: ${Dimensions.get("screen").height - 200};
  background-color: ${colors.white};
  border-top-right-radius: 65;
  display: flex;
  align-items: center;  
  justify-content: flex-start;        
`;

export const ViewTitle = styled.View`
  margin-top: 25%;
`;

export const Title = styled.Text`
  color: ${colors.white};
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
  background-color: ${colors.primaryColor};
  width: ${Dimensions.get("screen").width - 100};
  height: 50px;
  border-radius: 4px;
  align-items: center;  
  justify-content: center;
`;

export const TxtBtn = styled.Text`
  color: ${colors.white};
  font-size: 22px;
`;