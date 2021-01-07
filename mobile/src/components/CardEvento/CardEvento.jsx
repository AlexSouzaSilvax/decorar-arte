import React from "react";
import { Wrapper, Title, TipoServico, NameTipoServico, Tags, Top } from "./CardEvento.styles";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { formatData, tiposServico } from "../../service/helper";
import { colors } from '../../service/colors';
import { Image, Dimensions, Text, View } from 'react-native';

export default function CardEvento({ evento, onPress, onLongPress }) {

  return (
    <Wrapper style={{
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      padding: 10
    }}
      onPress={onPress}
      onLongPress={onLongPress}
    >

      <Top>
        <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", flex: 1 }}>
          <IconAntDesign name="user" color={colors.gray} size={15} />
          <Title style={{ fontSize: 14, paddingStart: 2 }} numberOfLines={1}>{evento.nomeCliente}</Title>
        </View>
        <Tags>
          <TipoServico>
            <IconAntDesign name="tagso" color={evento.pagoCobranca ? "green" : colors.primaryColor} />
            <NameTipoServico style={{ color: evento.pagoCobranca ? "green" : colors.primaryColor }}>{tiposServico[evento.tipoServico].label}</NameTipoServico>
          </TipoServico>
        </Tags>
      </Top>

      <Top style={{ marginTop: 10 }}>
        <Title style={{ fontWeight: '600' }} numberOfLines={2}>{evento.nomeEvento}</Title>
      </Top>

      <Top style={{ marginTop: 10, justifyContent: "center", alingItems: "center" }}>
        <Image
          style={{ width: Dimensions.get('screen').width - 30, height: 200, borderRadius: 8, alignSelf: 'center' }}
          source={
            evento.imagem ? ({ uri: `data:image/jpg;base64,${evento.imagem}` })
              : (
                require('../../../assets/defaultImage.png')
              )
          }
        />
      </Top>

      <Top style={{ marginTop: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 14, alignSelf: "flex-start", color: colors.gray }} numberOfLines={2}>{evento.localEvento}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 14, alignSelf: "flex-end", color: colors.gray }}>{formatData(evento.dataEvento)}</Text>
        </View>
      </Top>

    </Wrapper>
  );
}