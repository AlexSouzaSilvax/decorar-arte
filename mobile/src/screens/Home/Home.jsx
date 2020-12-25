import React, { useState, useEffect } from "react";

import { Body, Wrapper, A, B, Lista, ViewLoading } from "./Home.styles";
import Header from "../../components/Header";
import CardEvento from "../../components/CardEvento";
import CardVazio from "../../components/CardVazio";
import ActionButton from "react-native-action-button";
import { api, BASE_URL } from "../../service/api";
import { Spinner } from "native-base";
import { BackHandler, RefreshControl, Alert } from 'react-native';
import { colors } from '../../service/colors';
import { flashMessage } from "../../service/helper";

export default function Home({ navigation }) {
  const [eventos, setEventos] = useState([]);
  const [eventoImagem, setEventoImagem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tamanhoLista, setTamanhoLista] = useState(0);
  const [tamanhoLista2, setTamanhoLista2] = useState(0);
  const [btnNovo, setBtnNovo] = useState(true);

  useEffect(() => {
    getEventos();
  }, []);

  useEffect(() => {
    if (tamanhoLista > 0) {
      setBtnNovo(false);
    }
    if (tamanhoLista === 0 || tamanhoLista2 > tamanhoLista) {
      setBtnNovo(true);
    }
    setTamanhoLista2(tamanhoLista);
  }, [tamanhoLista]);

  async function getEventos() {
    setLoading(true);
    await api('/evento/')
      .then((response) => {
        setEventos(response.data);
        getEventoImagem();
      })
      .catch((error) => {
        console.error(error);
        flashMessage("Falha ao conectar com o banco de dados.", "danger");
      });
    // setLoading(false);
  }

  async function getEventoImagem() {
    //setLoading(true);
    await api("/evento/imagens")
      .then((response) => {
        const { base64 } = response.data[1];
        setEventoImagem(base64);
      })
      .catch((error) => {
        console.error(error);
        flashMessage("Falha ao conectar com o banco de dados.", "danger");
      });
    setLoading(false);
  }

  async function apagarEvento(id) {
    setLoading(true);
    await api.post('/evento/apagar',
      {},
      {
        headers: {
          id: id
        },
      }
    ).then((response) => {
      if (response.status !== 200) {
        flashMessage("Houve um problema, tente novamente", "danger");
      } else {
        flashMessage(response.data, "success");
      }
    })
      .catch((error) => {
        console.error(error);
        flashMessage("Falha ao conectar com o banco de dados.", "danger");
      });
    getEventos();
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
            showsVerticalScrollIndicator={false}
            data={eventos}
            keyExtractor={(e) => e.id.toString()}
            renderItem={({ item }) => (
              <CardEvento
                key={item.id}
                evento={item}
                eventoImagem={`data:image/jpg;base64,${eventoImagem}`}
                onPress={() =>
                  navigation.navigate("DetalheHome", { evento: item, eventoImagem: eventoImagem })
                }
                onLongPress={() =>
                  Alert.alert(
                    'Deseja realmente apagar ?',
                    'Esta ação não pode ser disfeita.',
                    [
                      {
                        text: 'Não',
                        onPress: () => { },
                        style: 'cancel'
                      },
                      { text: 'Sim', onPress: () => apagarEvento(item.id) }
                    ],
                    { cancelable: false }
                  )}
              />
            )}
            ListEmptyComponent={<CardVazio msg="Nenhum evento encontrado" />}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={getEventos} />
            }
            onScroll={event => setTamanhoLista(event.nativeEvent.contentOffset.y)}
          />
          {btnNovo ?
            <ActionButton
              buttonColor={colors.primaryColor}
              onPress={() => navigation.navigate("DetalheHome", { evento: {} })}
            />
            :
            null
          }
        </>
      )
          :
          <>
            <CardVazio msg="Nenhum evento encontrado" />
          </>
      }
    </Body>
  );
}
