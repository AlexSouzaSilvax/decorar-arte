<h1 align="center">
  Projeto Decorar Arte Festas e Eventos
</h1>

<br>
  <p align="center" style="margin: 5px;">
    <img alt="print1" src="./mobile/assets/print1.jpeg" height="600px">
    <img alt="print2" src="./mobile/assets/print2.jpeg" height="600px">
    <img alt="print3" src="./mobile/assets/print3.jpeg" height="600px">
    <img alt="print4" src="./mobile/assets/print4.jpeg" height="600px">
    <img alt="print5" src="./mobile/assets/print5.jpeg" height="600px">
    <img alt="print6" src="./mobile/assets/print5.jpeg" height="600px">
  </p>

<br>

## 📛 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React
- React-Native
- Expo
- Redux
- Styled Components
- Java Spring Boot
- JPA
- MySql
- Tomcat
- Amazon Cloud

## 🧠 Projeto

Necessidade do Cliente, ter um app para controlar e administrar os eventos realizados, ter um histórico dos eventos.

<br>

  <h1 align="center">
  Documentação da API
</h1>
<br>
  <p align="center">
  Base url:
</p>
  <p align="center">
  http://3.17.4.232:8080/decorarte/api
</p>

<br>

## GET - Lista todos os eventos.

/evento

return BODY:

[
  {
        "id": int,
        "tipoServico": int,
        "nomeCliente": string,
        "telefoneCliente": string,
        "nomeEvento": string,
        "localEvento": string,
        "dataEvento": date,
        "observacaoEvento": string,
        "pagoCobranca": boolean,
        "valorCobranca": double,        
        "observacaoCobranca": string,
        "imagem": string (base64)
    }
]

<br>

## GET - Buscar um evento por id. 

/evento/buscar?id=ID

return BODY:

[
  {
        "id": int,
        "tipoServico": int,
        "nomeCliente": string,
        "telefoneCliente": string,
        "nomeEvento": string,
        "localEvento": string,
        "dataEvento": date,
        "observacaoEvento": string,
        "pagoCobranca": boolean,
        "valorCobranca": double,        
        "observacaoCobranca": string,
        "imagem": string (base64
    }
]

<br>

## POST - Buscar um evento por id. 

/evento/salvar


return BODY:

[
  {
        "id": int,
        "tipoServico": int,
        "nomeCliente": string,
        "telefoneCliente": string,
        "nomeEvento": string,
        "localEvento": string,
        "dataEvento": date,
        "observacaoEvento": string,
        "pagoCobranca": boolean,
        "valorCobranca": double,        
        "observacaoCobranca": string,
        "imagem": string (base64)
    }
]

<br>

## POST - Apaga um evento por id. 

/evento/apagar

id: ID

return HEADER:

 header.mensagem = Apagado com sucesso! || Error ao apagar!
 header.result = true || false
 
 <br>
 <br>
