import React from "react";
import { View, Dimensions, StyleSheet, Platform } from "react-native";
import { Input, Icon } from "native-base";
import { withNavigation } from "react-navigation";
import { colors } from "../service/colors";
import { TouchableOpacity } from "react-native-gesture-handler";


function Pesquisa({ placeHolder, valor, onChangeText, onPressBackPesquisa }) {
    return (
        <View style={styles.container}>
            <View style={styles.cardPesquisa}>
                <TouchableOpacity onPress={onPressBackPesquisa} style={{ padding: 5 }}>
                    <Icon
                        type={"Ionicons"}
                        name={"ios-close"}
                        style={{ marginTop: 2, alignSelf: "center", paddingStart: 8, color: '#aaaaaa', fontSize: 30, }}
                    />
                </TouchableOpacity>
                <Input
                    placeholder={placeHolder}
                    placeholderTextColor="#aaaaaa"
                    style={{ alignSelf: "center", marginLeft: 10, color: "#444" }}
                    value={valor}
                    onChangeText={onChangeText}
                    autoFocus={true}
                />
            </View>
        </View>
    );
}
export default withNavigation(Pesquisa);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryColor,
        height: 80,
        justifyContent: "center"
    },
    cardPesquisa: {
        flexDirection: "row",
        height: 45,
        width: Dimensions.get("screen").width - 15,
        backgroundColor: colors.white,
        alignSelf: "center",
        borderRadius: 4,
    }
});