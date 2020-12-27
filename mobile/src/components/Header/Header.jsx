import React from "react";
import { Wrapper, Title, BtnFiltro } from "./Header.styles";
import { Icon } from 'native-base';
import { colors } from '../../service/colors';

export default function Header({ title, onPressPesquisa, onPressVoltar, styleTitle }) {
  return (
    <Wrapper>
      {/*BTNVOLTAR*/}
      { onPressVoltar ?
        <BtnFiltro onPress={onPressVoltar}>
          <Icon name="chevron-left" type="Entypo" style={{ color: colors.white, alignSelf: "flex-start", paddingStart: 10 }} />
        </BtnFiltro>
        : <></>}
      <Title style={styleTitle} >{title}</Title>
      { onPressPesquisa ?
        <BtnFiltro onPress={onPressPesquisa}>
          <Icon name="search" type="MaterialIcons" style={{ color: colors.white, alignSelf: "flex-end", paddingEnd: 25 }} />
        </BtnFiltro>
        : <></>}
    </Wrapper>
  );
}