import { colors } from "./colors";
import { Toast } from "native-base";

export const tiposServico = [
    {
        value: 0,
        label: "Decoração"
    },
    {
        value: 1,
        label: "Pegue e Monte"
    }
];

export function formatData(data) {
    if (data) {
        var dia = data.substr(8, 9);
        var mes = data.substr(5, 2);
        var ano = data.substr(0, 4);
        data = `${dia}/${mes}/${ano}`;
        return data;
    } else {
        data = '-';
    }
    return data;
}

export function formatData2(data) {
    if (data) {
        var dia = data.substr(0, 2);
        var mes = data.substr(3, 2);
        var ano = data.substr(6, 4);
        data = `${ano}-${mes}-${dia}`;
    }
    return data;
}


export function numberToReal(n) {
    return (
        "R$ " +
        n
            .toFixed(2)
            .replace(".", ",")
            .replace(/(\d)(?=(\d{3})+\,)/g, "$1.")
    );
}
export function formatTelCel(n) {
    var numeroFormatado = n;
    if (n.substr(2, 9).length == 9) {
        var ddd = n.substr(0, 2);
        var nove = n.substr(2, 1);
        var pDigito = n.substr(3, 4);
        var sDigito = n.substr(7, 4);
        numeroFormatado = `(${ddd}) ${nove} ${pDigito}-${sDigito}`;
    } else {
        var ddd = n.substr(0, 2);
        var pDigito = n.substr(2, 4);
        var sDigito = n.substr(6, 4);
        numeroFormatado = `(${ddd}) ${pDigito}-${sDigito}`;
    }
    return numeroFormatado;
};

export function flashMessage(message, type) {
    Toast.show({
        text: message,
        buttonText: "Ok",
        position: "top",
        type: type === "info" ? "warning" : type, //danger, warning, success
        duration: 4000,
        textStyle: {
            color: colors.white,
            fontSize: 17,
        },
        buttonTextStyle: {
            color: colors.white,
            fontWeight: "600",
            fontSize: 17,
        },
        buttonStyle: {},
        style: {
            margin: 5,
            borderRadius: 8,
            borderColor: colors.grayBorder,
            borderBottomWidth: 0,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            shadowColor: colors.black,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 1,
        },
    });
}

export function validValue(valor) {
    if (valor) {
        for (var i = 0; i < valor.length; i++) {
            if (valor.split("")[i] === "R") {
                valor = valor.substr((i + 2), valor.length);
            }
        }
    }
    return parseFloat(valor);
}