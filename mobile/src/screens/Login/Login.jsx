import React, { useState } from "react";

import {
    Wrapper, Header, Header2, Title, ViewTitle, Img, Btn, TxtBtn
} from "./Login.styles";

import logo from '../../../assets/logo_login.jpg';

export default function Login({ navigation }) {

    return (
        <Wrapper>
            <Header>
                <ViewTitle>
                    <Title>DecorArte</Title>
                </ViewTitle>
            </Header>
            <Header2>
                <Img source={logo}></Img>
                <Btn onPress={() => navigation.navigate('Home')}><TxtBtn>Continuar</TxtBtn></Btn>
            </Header2>
        </Wrapper>
    );
}