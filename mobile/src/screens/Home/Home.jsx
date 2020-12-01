import React, { useState } from "react";

import {
    Body, Wrapper, A, B, Lista
} from "./Home.styles";
import Header from '../../components/Header';
import CardEvento from '../../components/CardEvento';
import ActionButton from 'react-native-action-button';

export default function Home({ navigation }) {

    const eventos = [
        {
            id: 0,
            nomeEvento: 'Festa do Alex hoje vai ter uma festaa aa aa aaa a, bolo e guaraná',
            tipoServico: "Pegue e Monte",
            nomeCliente: 'Alex Souza da Silva',
            celCliente: "21 964645673",
            localEvento: "Morro Agudo",
            dataEvento: "03/03/2001",
            observacao: "",
            eventoConfirmado: true
        },
        {
            id: 1,
            nomeEvento: 'Casamento Cintia e Allan',
            tipoServico: "Decoração",
            nomeCliente: 'Cintia de Souza Silva Costa',
            celCliente: "21 964645673",
            localEvento: "Mesquita",
            dataEvento: "01/12/2020",
            observacao: "",
            eventoConfirmado: true
        },
        {
            id: 2,
            nomeEvento: 'Happy Hour B2W',
            tipoServico: "Decoração",
            nomeCliente: 'Rafael Souza da Silva',
            celCliente: "21 964645673",
            localEvento: "Centro de Nova Iguaçu",
            dataEvento: "31/12/2021",
            observacao: "",
            eventoConfirmado: false
        },
    ];

    return (
        <Body>
            <Wrapper>
                <Header title="DecorArte" onPressFiltro={() => alert('Em desenvolvimento')} />
            </Wrapper>
            <A><B /></A>

            <Lista
                data={eventos}
                keyExtractor={(e) => e.id.toString()}
                renderItem={({ item }) => (
                    <CardEvento
                        key={item.id}
                        evento={item}
                        onPress={() => navigation.navigate('DetalheHome', { evento: item })}
                    />
                )}
            />
            <ActionButton
                buttonColor="#ed0059"
                onPress={() => navigation.navigate('DetalheHome')}
            />

        </Body>
    );
}