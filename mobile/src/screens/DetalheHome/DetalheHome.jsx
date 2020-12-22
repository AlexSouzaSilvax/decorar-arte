import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, ScrollView, View, TouchableOpacity, Text, TextInput, BackHandler } from 'react-native';
import { Picker, Label, Form, Item, Input, ActionSheet, Spinner } from 'native-base';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInputMask } from "react-native-masked-text";
import {
    Body, Wrapper, A, B, Lista, FormInfo, TituloFormInfo
} from "./DetalheHome.styles";
import Header from '../../components/Header';
import { colors } from "../../service/colors";
import { flashMessage, formatData, formatData2, tiposServico } from "../../service/helper";
import { api, BASE_URL } from "../../service/api";

var BUTTONS = ["Decoração", "Pegue e Monte"];

export default function DetalheHome({ navigation }) {

    let evento = navigation.getParam('evento');

    const [dataEvento, setDataEvento] = useState();
    const [dtPrevQuitaCobranca, setDtPrevQuitaCobranca] = useState();
    const [id, setId] = useState();
    const [localEvento, setLocalEvento] = useState();
    const [nomeCliente, setNomeCliente] = useState();
    const [nomeEvento, setNomeEvento] = useState();
    const [observacaoEvento, setObservacaoEvento] = useState();
    const [observacaoCobranca, setObservacaoCobranca] = useState();
    const [pagoCobranca, setPagoCobranca] = useState();
    const [telefoneCliente, setTelefoneCliente] = useState();
    const [tipoPgtoCobranca, setTipoPgtoCobranca] = useState();
    const [tipoServico, setTipoServico] = useState();
    const [valorCobranca, setValorCobranca] = useState();
    const [valorEntradaCobranca, setValorEntradaCobranca] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (evento) {
            setDataEvento(evento.dataEvento);
            setDtPrevQuitaCobranca(evento.dtPrevQuitaCobranca);
            setId(evento.id);
            setLocalEvento(evento.localEvento);
            setNomeCliente(evento.nomeCliente)
            setNomeEvento(evento.nomeEvento)
            setObservacaoEvento(evento.observacaoEvento)
            setObservacaoCobranca(evento.observacao_cobranca);
            setPagoCobranca(evento.pagoCobranca)
            setTelefoneCliente(evento.telefoneCliente)
            setTipoPgtoCobranca(evento.tipoPgtoCobranca)
            setTipoServico(evento.tipoServico ? evento.tipoServico : 0)
            setValorCobranca(evento.valorCobranca);
            setValorEntradaCobranca(evento.valorEntradaCobranca);
        }
    }, [])

    async function salvar() {
        setLoading(true);
        await api.post('/evento/salvar', {
            id: id,
            tipoServico: tipoServico,
            nomeCliente: nomeCliente,
            telefoneCliente: telefoneCliente,
            nomeEvento: nomeEvento,
            localEvento: localEvento,
            dataEvento: formatData2(dataEvento),
            observacaoEvento: observacaoEvento,
            pagoCobranca: pagoCobranca,
            valorCobranca: valorCobranca,
            tipoPgtoCobranca: tipoPgtoCobranca,
            valorEntradaCobranca: valorEntradaCobranca,
            dtPrevQuitaCobranca: dtPrevQuitaCobranca,
            observacao_cobranca: observacaoCobranca
        })
            .then((response) => {
                if (response.status !== 200) {
                    flashMessage("Houve um problema, tente novamente", "danger");
                } else {
                    flashMessage("Salvo com sucesso", "success");
                }
                console.log(response.data);
            })
            .catch((error) => {
                flashMessage("Falha na conexão com o servidor, tente novamente", "danger");
                console.error(error);
            });
        setLoading(false);
    }

    BackHandler.addEventListener("hardwareBackPress", () => {
        navigation.navigate("Home");
        return true;
      });

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
                                        title: "Selecione um serviço"
                                    },
                                    buttonIndex => {
                                        if (buttonIndex == undefined) {
                                            setTipoServico(tipoServico);
                                        } else {
                                            setTipoServico(buttonIndex);
                                        }
                                    }

                                )
                            }}>
                                <View style={{ padding: 7, backgroundColor: colors.white0, borderRadius: 12, borderWidth: 1, borderColor: colors.primaryColor }}>
                                    <Text style={{ alignSelf: "flex-start", color: colors.primaryColor }}>{tiposServico[tipoServico ? tipoServico : 0].label}</Text>
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
                            <View style={[styles.inputContainer, { marginTop: 10 }]}>
                                <Text style={styles.label}>Data</Text>
                                <TextInputMask
                                    type={"datetime"}
                                    style={styles.inputTel}
                                    value={dataEvento}
                                    onChangeText={setDataEvento}
                                />
                            </View>
                            <View style={[styles.inputContainer, styles.inputContainerObservacao, { marginTop: 10 }]}>
                                <Text style={styles.label}>Observação</Text>
                                <TextInput
                                    multiline={true}
                                    numberOfLines={5}
                                    style={styles.inputObservacao}
                                    value={observacaoEvento}
                                    onChangeText={setObservacaoEvento}
                                    placeholder="Ex: Festa começará à partir das 10hrs"
                                />
                            </View>

                        </FormInfo>

                        <FormInfo style={{ marginTop: 20, padding: 10 }}>
                            <TituloFormInfo>Cobrança</TituloFormInfo>

                            <View style={{ marginTop: 20 }}>
                                <TituloFormInfo style={{ fontSize: 18, alignSelf: "center" }}>Pago</TituloFormInfo>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 5, marginTop: 5 }}>
                                    <TouchableOpacity style={{ margin: 5 }} onPress={() => setPagoCobranca(!pagoCobranca)}>
                                        <View style={{
                                            padding: 10,
                                            borderColor: pagoCobranca ? 'green' : colors.greenWhite,
                                            borderWidth: 1,
                                            borderRadius: 4
                                        }}>
                                            <Text style={{
                                                color: pagoCobranca ? 'green' : colors.greenWhite,
                                                fontWeight: pagoCobranca ? '700' : '200'
                                            }}>Sim</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ margin: 5 }} onPress={() => setPagoCobranca(!pagoCobranca)}>
                                        <View style={{
                                            padding: 10,
                                            borderColor: pagoCobranca == false ? 'red' : colors.redWhite,
                                            borderWidth: 1,
                                            borderRadius: 4
                                        }}>
                                            <Text style={{
                                                color: pagoCobranca == false ? 'red' : colors.redWhite,
                                                fontWeight: pagoCobranca == false ? '700' : '200'
                                            }}>Não</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={[styles.inputContainer, { marginTop: 10 }]}>
                                <Text style={styles.label}>Valor</Text>
                                <TextInputMask
                                    type={"money"}
                                    style={styles.inputTel}
                                    value={valorCobranca}
                                    onChangeText={setValorCobranca}
                                />
                            </View>
                            <View style={[styles.inputContainer, styles.inputContainerObservacao, { marginTop: 10 }]}>
                                <Text style={styles.label}>Observação</Text>
                                <TextInput
                                    multiline={true}
                                    numberOfLines={5}
                                    style={styles.inputObservacao}
                                    value={observacaoCobranca}
                                    onChangeText={setObservacaoCobranca}
                                    placeholder="Ex: Pagamento adiantado."
                                />
                            </View>

                        </FormInfo>
                        <TouchableOpacity style={styles.button} onPress={salvar}>
                            {loading ?
                                <Spinner size="large" color={colors.white} />
                                :
                                <Text style={styles.btnLabel}>Salvar</Text>
                            }
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
        backgroundColor: colors.primaryColor,
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
        marginTop: 8,
        fontSize: 18,
        color: "#444",
        width: Dimensions.get("screen").width - 90,
    },
    inputObservacao: {
        alignSelf: "flex-start",
        marginTop: 8,
        fontSize: 18,
        color: "#444",
        width: Dimensions.get("screen").width - 90,
    },
    inputContainer: {
        width: Dimensions.get("screen").width - 90,
        height: 62,
        borderRadius: 5,
        alignSelf: "center",
        margin: 5,
        left: 10,
        borderBottomWidth: 1,
        borderColor: "#d3d3d3",
    },
    inputContainerObservacao: {
        width: Dimensions.get("screen").width - 90,
        height: 158,
        borderRadius: 5,
        alignSelf: "center",
        margin: 5,
        left: 10,
        borderBottomWidth: 1,
        borderColor: "#d3d3d3",
    },
    label: {
        paddingStart: 1,
        fontSize: 15,
        color: colors.gray,
        fontWeight: "400",
    },
})