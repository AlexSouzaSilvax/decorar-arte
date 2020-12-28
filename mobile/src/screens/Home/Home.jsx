import React, { useState, useEffect } from "react";
import { Spinner } from "native-base";
import { BackHandler, RefreshControl, Alert, Keyboard } from 'react-native';
import { createFilter } from "react-native-search-filter";
import ActionButton from "react-native-action-button";

import Header from "../../components/Header";
import CardEvento from "../../components/CardEvento";
import CardVazio from "../../components/CardVazio";
import Pesquisa from "../../components/Pesquisa";
import { Body, Wrapper, A, B, Lista, ViewLoading } from "./Home.styles";
import { colors } from '../../service/colors';
import { flashMessage } from "../../service/helper";
import { api } from "../../service/api";

export default function Home({ navigation }) {
  const [eventos, setEventos] = useState([]);
  const [eventos2, setEventos2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tamanhoLista, setTamanhoLista] = useState(0);
  const [tamanhoLista2, setTamanhoLista2] = useState(0);
  const [btnNovo, setBtnNovo] = useState(true);
  const [pesquisa, setPesquisa] = useState("");
  const [cardPesquisa, setCardPesquisa] = useState(false);
  const parametrosPesquisa = [
    "nomeCliente",
    "nomeEvento",
    "localEvento",
    "dataEvento"
  ];

  useEffect(() => {
    getEventos();
  }, []);

  useEffect(() => {
    Keyboard.dismiss();
    if (tamanhoLista > 0) {
      setBtnNovo(false);
    }
    if (tamanhoLista === 0 || tamanhoLista2 > tamanhoLista) {
      setBtnNovo(true);
    }
    setTamanhoLista2(tamanhoLista);
  }, [tamanhoLista]);

  async function getEventos() {
    setCardPesquisa(false);
    Keyboard.dismiss();

    setLoading(true);
    await api('/evento/')
      .then((response) => {
        setEventos(response.data);
        setEventos2(response.data);
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

  function showCardPesquisa() {
    setCardPesquisa(!cardPesquisa);
    setPesquisa("");
    Keyboard.dismiss();
  }

  function pesquisar(p) {
    setPesquisa(p);
    if (pesquisa.length == 0) {
      setEventos(eventos);
    } else {
      setEventos(eventos2.filter(createFilter(p, parametrosPesquisa)));
    }
  }


  BackHandler.addEventListener("hardwareBackPress", () => {
    BackHandler.exitApp();
    return true;
  });

  return (
    <Body>
      <Wrapper>
        {!cardPesquisa ? (
          <Header
            title="Decorar Arte"
            onPressPesquisa={() => setCardPesquisa(!cardPesquisa)}
          />
        ) : (
            <Pesquisa
              placeHolder="Pesquisar eventos"
              valor={pesquisa}
              onChangeText={p => pesquisar(p)}
              onPressBackPesquisa={() => showCardPesquisa()}
            />
          )}
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
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            data={eventos}
            keyExtractor={(e) => e.id.toString()}
            renderItem={({ item }) => (
              <CardEvento
                key={item.id}
                evento={item}
                onPress={() =>
                  navigation.navigate("DetalheHome", { evento: item })
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
