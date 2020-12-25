import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from '../../service/colors';

export const View = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 50;
    width: ${Dimensions.get("screen").width};
`;

export const Text = styled.Text`
    margin-top: 10;
    font-size: 17;
    color: ${colors.gray};
    margin-start: 10;
    align-self: center;
`;

export const Image = styled.Image`

`;