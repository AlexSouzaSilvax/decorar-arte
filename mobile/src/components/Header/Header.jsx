import React from "react";
import { Wrapper, Title, BtnFiltro } from "./Header.styles";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../service/colors';

export default function Header({ title, onPressFiltro }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      { onPressFiltro ?
        <BtnFiltro onPress={onPressFiltro}>
          <IconAntDesign name="filter" size={22} style={{ color: colors.white, alignSelf: "flex-end", paddingEnd: 20 }} />
        </BtnFiltro>
        : <></>}
    </Wrapper>
  );
}