import React, { useState } from "react";

import {
    Body, Wrapper, A, B, Lista
} from "./DetalheHome.styles";
import Header from '../../components/Header';

import { StyleSheet, Dimensions, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { Picker, Label, Form, Item, Input, Radio } from 'native-base';

export default function DetalheHome({ route, navigation }) {

    const { evento } = route.params;

    /*
            id: 0,
            nomeEvento: 'Festa do Alex hoje vai ter uma festaa aa aa aaa a, bolo e guaraná',
            tipoServico: "Pegue e Monte",
            nomeCliente: 'Alex Souza da Silva',
            celCliente: "21 964645673",
            localEvento: "Morro Agudo",
            dataEvento: "03/03/2001",
            observacao: "",
            eventoConfirmado: true
    */

    return (
        <Body>
            <Wrapper>
                <Header title="Agendamento" />
            </Wrapper>
            <A><B /></A>

            <ScrollView style={{
                marginTop: -30
            }}>
                <Form style={styles.form}>

                    <Radio selectedColor={'red'} color={'green'} selected={evento.eventoConfirmado} />

                    <Item floatingLabel>
                        <Label>Evento confirmado ?</Label>
                        <Input style={styles.input} />
                    </Item>
                    <Item>
                        <View style={styles.wrapperPicker}>
                            <Label>Tipo de Serviço</Label>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: Dimensions.get("screen").width - 50 }}
                            //selectedValue={}
                            //onValueChange={() => {}}
                            >
                                <Picker.Item label="Pegue e Monte" value="0" />
                                <Picker.Item label="Decoração" value="1" />
                            </Picker>
                        </View>
                    </Item>

                    <Item floatingLabel>
                        <Label>Nome</Label>
                        <Input value={''} style={styles.input} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Cliente</Label>
                        <Input style={styles.input} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Contato</Label>
                        <Input style={styles.input} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Local</Label>
                        <Input style={styles.input} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Data do Evento</Label>
                        <Input style={styles.input} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Observação</Label>
                        <Input style={styles.input} />
                    </Item>

                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.btnLabel}>Salvar</Text>
                    </TouchableOpacity>
                </Form>
            </ScrollView>

        </Body>
    );
}

const styles = StyleSheet.create({
    form: {
        width: Dimensions.get("screen").width - 50,
        alignSelf: 'center'
    },
    input: {
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    button: {
        width: Dimensions.get("screen").width - 100,
        height: 50,
        alignSelf: "center",
        backgroundColor: '#ed0059',
        marginTop: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        marginBottom: 20,
    },
    btnLabel: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
    },
    wrapperPicker: {
        width: Dimensions.get("screen").width - 50,
        marginTop: 10,
    },
})