import React from "react";
import { Wrapper, Title, TipoServico, NameTipoServico, Tags, Top, View } from "./CardEvento.styles";
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export default function CardEvento({ evento, onPress }) {
  return (
    <Wrapper onPress={onPress} style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      padding: 10
    }}>

      <Top>
        <IconAntDesign name="user" color={"#767676"} size={15} />
        <Title style={{ fontSize: 15 }} numberOfLines={1}>{evento.nomeCliente}</Title>
        <Tags>
          <TipoServico>
            <IconAntDesign name="tagso" color={evento.eventoConfirmado ? "green" : "#ed0059"} />
            <NameTipoServico style={{ color: evento.eventoConfirmado ? "green" : "#ed0059" }}>{evento.tipoServico}</NameTipoServico>
          </TipoServico>
        </Tags>
      </Top>

      <Top style={{ marginTop: 10 }}>
        <Title numberOfLines={2}>{evento.nomeEvento}</Title>
      </Top>

      <Top style={{ marginTop: 10 }}>
        <View style={{ flex: 1 }}>
          <Title style={{ fontSize: 15, alignSelf: "flex-start" }} numberOfLines={2}>{evento.localEvento}</Title>
        </View>
        <View>
          <Title style={{ fontSize: 15, alignSelf: "flex-end" }}>{evento.dataEvento}</Title>
        </View>
      </Top>

    </Wrapper>
  );
}