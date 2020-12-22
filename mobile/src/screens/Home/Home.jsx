import React, { useState, useEffect } from "react";

import { Body, Wrapper, A, B, Lista, ViewLoading } from "./Home.styles";
import Header from "../../components/Header";
import CardEvento from "../../components/CardEvento";
import CardVazio from "../../components/CardVazio";
import ActionButton from "react-native-action-button";
import { api, BASE_URL } from "../../service/api";
import { Spinner } from "native-base";
import { BackHandler, RefreshControl } from 'react-native';
import { colors } from '../../service/colors';
import { flashMessage } from "../../service/helper";

export default function Home({ navigation }) {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEventos();
  }, []);

  async function getEventos() {
    setLoading(true);
    await api('/evento/')
      .then((response) => {
        setEventos(response.data);
      })
      .catch((error) => console.error(error));
    setLoading(false);
  }

  BackHandler.addEventListener("hardwareBackPress", () => {
    navigation.navigate("Home");
    return true;
  });

  return (
    <Body>
      <Wrapper>
        <Header
          title="DecorArte"
          onPressFiltro={() => flashMessage("Em desenvolvimento", "aaa")}
          onPressMenu={() => flashMessage("Em desenvolvimento", "aaa")}
          styleTitle={{ left: 40 }}
        />
      </Wrapper>
      <A>
        <B />
      </A>

      {loading ? (
        <ViewLoading>
          <Spinner size="large" color={colors.primaryColor} />
        </ViewLoading>
      ) : eventos ? (
        <>
          <Lista
            data={eventos}
            keyExtractor={(e) => e.id.toString()}
            renderItem={({ item }) => (
              <CardEvento
                key={item.id}
                evento={item}
                onPress={() =>
                  navigation.navigate("DetalheHome", { evento: item })
                }
              />
            )}
            ListEmptyComponent={<CardVazio msg="Nenhum evento encontrado" />}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={getEventos} />
            }

          />
          <ActionButton
            buttonColor={colors.primaryColor}
            onPress={() => navigation.navigate("DetalheHome", { evento: {} })}
          />
        </>
      )
          :
          <>
            {/*<CardVazio msg="Nenhum evento encontrado" />*/}
          </>
      }
    </Body>
  );
}
