import React, { useState } from "react";
import {
    Modal,
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";

import { Camera } from "expo-camera";
import { Icon, Spinner } from "native-base";
import { colors } from "../service/colors";

function CameraItem({
    modalCameraVisible,
    setModalCameraVisible,
    loadingCamera,
    permissao,
    setCamera,
    capturaFoto,
    cameraType,
    setCameraType
}) {

    const [flashOn, setFlashOn] = useState(false);
    const [flashOff, setFlashOff] = useState(true);
    const [flashAuto, setFlashAuto] = useState(false);
    const [flash, setFlash] = useState('');

    function FlashOn() {
        setFlashOn(true);
        setFlashOff(false);
        setFlashAuto(false);
        setFlash('on');
    }

    function FlashOff() {
        setFlashOn(false);
        setFlashOff(true);
        setFlashAuto(false);
        setFlash('off');
    }

    function FlashAuto() {
        setFlashOn(false);
        setFlashOff(false);
        setFlashAuto(true);
        setFlash('auto');
    }

    return (
        <Modal
            animationType="none"
            transparent={false}
            visible={modalCameraVisible}
            onRequestClose={setModalCameraVisible}
        >
            {loadingCamera ? (
                <Text style={styles.container}>Carregando...</Text>
            ) : !permissao ? (
                <View style={styles.container}>
                    <Spinner size="large" color={colors.primaryColor} />
                </View>
            ) : (
                        <View style={{ flex: 1 }}>
                            <Camera
                                style={styles.camera}
                                flashMode={flash}
                                type={cameraType ? Camera.Constants.Type.back : Camera.Constants.Type.front}
                                autoFocus={true}
                                permissionDialogTitle={"Permissão para usar a câmera"}
                                permissionDialogMessage={
                                    "Precisamos da sua permissão para usar a câmera do seu smartphone"
                                }
                                ref={setCamera}
                                onMountError={(e) => console.log(e)}
                            >

                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 30 }}>
                                    <TouchableOpacity
                                        style={{
                                            alignSelf: 'flex-end',
                                            alignItems: 'center',
                                            backgroundColor: 'transparent'
                                        }}>
                                        {flashOff ? (
                                            <Icon
                                                type="MaterialIcons"
                                                name={"flash-off"}
                                                size={30}
                                                style={{ color: '#FFFFFF' }}
                                                onPress={() => FlashOn()}
                                            />
                                        ) : (
                                                <View></View>
                                            )
                                        }

                                        {flashOn ? (
                                            <Icon
                                                type="MaterialIcons"
                                                name={"flash-on"}
                                                size={30}
                                                style={{ color: '#FFFFFF' }}
                                                onPress={() => FlashAuto()}
                                            />
                                        ) : (
                                                <View></View>
                                            )
                                        }

                                        {flashAuto ? (
                                            <Icon
                                                type="MaterialIcons"
                                                name={"flash-auto"}
                                                size={30}
                                                style={{ color: '#FFFFFF' }}
                                                onPress={() => FlashOff()}
                                            />
                                        ) : (
                                                <View></View>
                                            )
                                        }
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            alignSelf: 'flex-end',
                                            alignItems: 'center',
                                            backgroundColor: 'transparent',
                                        }}
                                        onPress={capturaFoto}>
                                        <Icon
                                            type="Feather"
                                            name="circle"
                                            style={{ color: "#fff", fontSize: 70 }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            alignSelf: 'flex-end',
                                            alignItems: 'center',
                                            backgroundColor: 'transparent',
                                        }}
                                        onPress={setCameraType}>
                                        <Icon
                                            type="MaterialCommunityIcons"
                                            name="camera-switch"
                                            style={{ color: "#fff", fontSize: 40 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </Camera>
                        </View>
                    )
            }
        </Modal >
    );
}

export default withNavigation(CameraItem);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3F3",
    },
    camera: {
        flex: 1,
    },
    button: {
        backgroundColor: "transparent",
        borderWidth: 4,
        borderColor: "#EEEEEE",
        borderRadius: 40,
        width: 70,
        height: 70,
        marginTop: Dimensions.get("screen").height - 200,
        //marginRight: "13%"
    },
    preview: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    buttonsPreview: {
        flex: 1,
        marginTop: 5,
        padding: 2,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    inputContainer: {
        flexDirection: "row",
        alignSelf: "center",
        width: Dimensions.get("screen").width - 20,
        borderBottomWidth: 1,
        borderColor: "#aaaaaa",
    },
    label: {
        marginEnd: 2,
        alignSelf: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "#1B75BB",
    },
    labelCancelar: {
        color: "#cc0000",
        marginStart: 2,
        alignSelf: "center",
        fontSize: 20,
    },
});