import React, { useState } from "react";
import { StyleSheet, Dimensions, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { Picker, Label, Form, Item, Input, ActionSheet } from 'native-base';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInputMask } from "react-native-masked-text";
import {
    Body, Wrapper, A, B, Lista, FormInfo, TituloFormInfo
} from "./DetalheHome.styles";
import Header from '../../components/Header';
import { colors } from "../../service/colors";
import { tiposServico } from "../../service/helper";

var BUTTONS = ["Decoração", "Pegue e Monte", "Cancelar"];
var CANCEL_INDEX = 2;

export default function DetalheHome({ route, navigation }) {

    const { evento } = route.params;

    const [dataEvento, setDataEvento] = useState(evento.dataEvento);
    const [dtPrevQuitaCobranca, setDtPrevQuitaCobranca] = useState(evento.dtPrevQuitaCobranca);
    const [id, setId] = useState(evento.id);
    const [localEvento, setLocalEvento] = useState(evento.localEvento);
    const [nomeCliente, setNomeCliente] = useState(evento.nomeCliente);
    const [nomeEvento, setNomeEvento] = useState(evento.nomeEvento);
    const [observacaoEvento, setObservacaoEvento] = useState(evento.observacaoEvento);
    const [observacaoCobranca, setObservacaoCobranca] = useState(evento.observacao_cobranca);
    const [pagoCobranca, setPagoCobranca] = useState(evento.pagoCobranca);
    const [telefoneCliente, setTelefoneCliente] = useState(evento.telefoneCliente);
    const [tipoPgtoCobranca, setTipoPgtoCobranca] = useState(evento.tipoPgtoCobranca);
    const [tipoServico, setTipoServico] = useState(evento.tipoServico);
    const [valorCobranca, setValorCobranca] = useState(evento.valorCobranca);
    const [valorEntradaCobranca, setValorEntradaCobranca] = useState(evento.valorEntradaCobranca);

    /*
        "id": 3,
        "tipoServico": 1,

        "nomeCliente": "Janaína Galante",
        "telefoneCliente": "(21) 9 6464-5673",    
        
        "nomeEvento": "Happy Hour Decorarte LTDA",
        "localEvento": null,        
        "dataEvento": "2021-01-09",
        "observacaoEvento": "Não permitido cores preta.",

        "pagoCobranca": false,        
        "valorCobranca": 2500,
        "tipoPgtoCobranca": 1,
        "valorEntradaCobranca": 1000,
        "dtPrevQuitaCobranca": "2021-01-09",        
        "observacao_cobranca": "Entrada de mil reais, irá quitar no dia do evento",        
    */

    return (
        <Body>
            <Wrapper>
                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    enableAutomaticScroll={(Platform.OS === 'ios')}
                    style={{
                        backgroundColor: colors.primaryColor
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <Header title="Agendamento" onPressVoltar={() => navigation.navigate('Home')} styleTitle={{ left: 22 }} />
                        <A><B /></A>
                    </View>

                    <Form style={styles.form}>

                        <FormInfo style={{ backgroundColor: colors.white3, flexDirection: "row" }}>
                            <TituloFormInfo style={{ fontSize: 18, flex: 1 }}>Tipo de Serviço</TituloFormInfo>
                            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={() => {
                                ActionSheet.show(
                                    {
                                        options: BUTTONS,
                                        cancelButtonIndex: CANCEL_INDEX,
                                        title: "Selecione um serviço"
                                    },
                                    buttonIndex => setTipoServico(buttonIndex)
                                )
                            }}>
                                <View style={{ padding: 7, backgroundColor: colors.white0, borderRadius: 12, borderWidth: 1, borderColor: colors.primaryColor }}>
                                    <Text style={{ alignSelf: "flex-start", color: colors.primaryColor }}>{tiposServico[tipoServico].label}</Text>
                                </View>
                            </TouchableOpacity>
                        </FormInfo>


                        <FormInfo style={{ marginTop: 20, padding: 10 }}>
                            <TituloFormInfo>Cliente</TituloFormInfo>
                            <Item floatingLabel>
                                <Label>Nome</Label>
                                <Input style={styles.input} value={nomeCliente} onChangeText={setNomeCliente} />
                            </Item>
                            <View style={[styles.inputContainer, { marginTop: 10 }]}>
                                <Text style={styles.label}>Telefone</Text>
                                <TextInputMask
                                    type={"cel-phone"}
                                    style={styles.inputTel}
                                    value={telefoneCliente}
                                    onChangeText={setTelefoneCliente}
                                />
                            </View>
                        </FormInfo>

                        <FormInfo style={{ marginTop: 20, padding: 10 }}>
                            <TituloFormInfo>Evento</TituloFormInfo>
                            <Item floatingLabel>
                                <Label>Nome</Label>
                                <Input style={styles.input} value={nomeEvento} onChangeText={setNomeEvento} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Local</Label>
                                <Input style={styles.input} value={localEvento} onChangeText={setLocalEvento} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Data</Label>
                                <Input style={styles.input} value={dataEvento} onChangeText={setDataEvento} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Observação</Label>
                                <Input style={styles.input} value={observacaoEvento} onChangeText={setObservacaoEvento} />
                            </Item>

                        </FormInfo>

                        <FormInfo style={{ marginTop: 20, padding: 10 }}>
                            <TituloFormInfo>Cobrança</TituloFormInfo>

                            <View style={{ marginTop: 20 }}>
                                <TituloFormInfo style={{ fontSize: 18, alignSelf: "center" }}>Pago</TituloFormInfo>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 5, marginTop: 5 }}>
                                    <TouchableOpacity style={{ margin: 5 }} onPress={() => setPagoCobranca(!pagoCobranca)}>
                                        <View style={{ padding: 10, borderColor: 'green', borderWidth: 1, borderRadius: 4 }}>
                                            <Text style={{ color: 'green', fontWeight: pagoCobranca ? '700' : '200' }}>Sim</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 5 }} onPress={() => setPagoCobranca(!pagoCobranca)}>
                                        <View style={{ padding: 10, borderColor: 'red', borderWidth: 1, borderRadius: 4 }}>
                                            <Text style={{ color: 'red', fontWeight: pagoCobranca == false ? '700' : '200' }}>Não</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>



                            <Item floatingLabel>
                                <Label>Valor</Label>
                                <Input style={styles.input} keyboardType="numeric" value={valorCobranca} onChangeText={setValorCobranca} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Forma de pagamento</Label>
                                <Input style={styles.input} value={tipoPgtoCobranca} onChangeText={setTipoPgtoCobranca} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Valor de entrada</Label>
                                <Input style={styles.input} value={valorEntradaCobranca} onChangeText={setValorEntradaCobranca} />
                            </Item>

                            <Item>
                                <Label>Observação</Label>
                                <Input style={styles.input} value={observacaoCobranca} onChangeText={setObservacaoCobranca} />
                            </Item>

                        </FormInfo>

                        {/*<Item>
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
*/}
                        <TouchableOpacity style={styles.button} onPress={() => { }}>
                            <Text style={styles.btnLabel}>Salvar</Text>
                        </TouchableOpacity>
                    </Form>
                </KeyboardAwareScrollView>
            </Wrapper>
        </Body >
    );
}

const styles = StyleSheet.create({
    form: {
        width: Dimensions.get("screen").width,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: "#efefef",
    },
    input: {
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    button: {
        width: Dimensions.get("screen").width - 60,
        height: 50,
        alignSelf: "center",
        backgroundColor: '#ed0059',
        marginTop: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
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
    inputTel: {
        alignSelf: "flex-start",
        paddingStart: 10,
        marginTop: 8,
        fontSize: 20,
        color: "#444",
        width: Dimensions.get("screen").width - 90,
    },
    inputContainer: {
        width: Dimensions.get("screen").width - 90,
        height: 50,
        borderRadius: 5,
        alignSelf: "center",
        margin: 5,
        left: 10,
        borderBottomWidth: 1,
        borderColor: "#d3d3d3",
    },
    label: {
        paddingStart: 4,
        fontSize: 16,
        color: colors.gray,
        fontWeight: "400",
    },
})