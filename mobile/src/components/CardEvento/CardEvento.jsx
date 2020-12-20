import React from "react";
import { Wrapper, Title, TipoServico, NameTipoServico, Tags, Top, View } from "./CardEvento.styles";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { formatData, tiposServico } from "../../service/helper";
import { colors } from '../../service/colors';

export default function CardEvento({ evento, onPress }) {
  return (
    <Wrapper onPress={onPress} style={{
      shadowColor: colors.black,
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
        <IconAntDesign name="user" color={colors.gray} size={15} />
        <Title style={{ fontSize: 15 }} numberOfLines={1}>{evento.nomeCliente}</Title>
        <Tags>
          <TipoServico>
            <IconAntDesign name="tagso" color={evento.pagoCobranca ? "green" : colors.primaryColor} />
            <NameTipoServico style={{ color: evento.pagoCobranca ? "green" : colors.primaryColor }}>{tiposServico[evento.tipoServico].label}</NameTipoServico>
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
          <Title style={{ fontSize: 15, alignSelf: "flex-end" }}>{formatData(evento.dataEvento)}</Title>
        </View>
      </Top>

    </Wrapper>
  );
}