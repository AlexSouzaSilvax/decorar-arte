/** @format */

import React from "react";
import Caixa from "../../../assets/caixa-vazia.png";
import { View, Image, Text } from "./CardVazio.styles";

export default function CardVazio({ msg }) {
  return (
    <View>
      <Image source={Caixa} style={{ width: 70, height: 70 }} />
      <Text numberOfLines={1}>{msg}</Text>
    </View>
  );
}