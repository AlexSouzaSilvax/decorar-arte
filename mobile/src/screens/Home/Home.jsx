import React, { useState, useEffect } from "react";

import { Body, Wrapper, A, B, Lista, ViewLoading } from "./Home.styles";
import Header from "../../components/Header";
import CardEvento from "../../components/CardEvento";
import CardVazio from "../../components/CardVazio";
import ActionButton from "react-native-action-button";
import { BASE_URL } from "../../service/api";
import { Spinner } from "native-base";
import { RefreshControl } from 'react-native';
import { colors } from '../../service/colors';

export default function Home({ navigation }) {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEventos();
  }, []);

  async function getEventos() {
    setLoading(true);
    await fetch(`${BASE_URL}/evento/`)
      .then((response) => response.json())
      .then((responseJson) => {
        setEventos(responseJson);        
      })
      .catch((error) => console.error(error));
    setLoading(false);
  }

  return (
    <Body>
      <Wrapper>
        <Header
          title="DecorArte"
          onPressFiltro={() => alert("Em desenvolvimento")}
        />
      </Wrapper>
      <A>
        <B />
      </A>

      {loading ? (
        <ViewLoading>
          <Spinner size="small" color={colors.primaryColor} />
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
            //ListEmptyComponent={<CardVazio msg="Nenhum evento encontrado" />}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={getEventos} />
            }

          />
          <ActionButton
            buttonColor={colors.primaryColor}
            onPress={() => navigation.navigate("DetalheHome")}
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
